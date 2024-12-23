import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';
import axios from 'axios';

async function getTransactionStatus(orderTrackingId: string, token: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_PESAPAL_API_URL}/api/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Error getting transaction status:', error);
    throw error;
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const orderTrackingId = url.searchParams.get('OrderTrackingId');
  const orderMerchantReference = url.searchParams.get('OrderMerchantReference');

  if (!orderTrackingId || !orderMerchantReference) {
    console.error('Missing required parameters');
    return NextResponse.redirect(new URL('/payment/failed', process.env.NEXT_PUBLIC_APP_URL!));
  }

  try {
    // Get token for status check
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_PESAPAL_API_URL}/api/Auth/RequestToken`,
      {
        consumer_key: process.env.NEXT_PUBLIC_PESAPAL_CONSUMER_KEY,
        consumer_secret: process.env.NEXT_PUBLIC_PESAPAL_CONSUMER_SECRET,
      }
    );

    const token = response.data.token;
    
    // Get transaction status
    const status = await getTransactionStatus(orderTrackingId, token);
    console.log('Transaction status:', status);

    const paymentStatus = status.payment_status_description;
    const isSuccessful = paymentStatus === 'Completed';

    // Update payment status
    await prisma.payment.update({
      where: {
        merchantRef: orderMerchantReference,
      },
      data: {
        status: isSuccessful ? 'PAID' : 'FAILED',
        transactionId: orderTrackingId,
        paymentDate: new Date(),
      },
    });

    // Update order status
    await prisma.order.update({
      where: {
        orderNumber: orderMerchantReference,
      },
      data: {
        paymentStatus: isSuccessful ? 'PAID' : 'FAILED',
      },
    });

    // Redirect based on payment status
    const redirectUrl = isSuccessful ? '/payment/success' : '/payment/failed';
    return NextResponse.redirect(new URL(redirectUrl, process.env.NEXT_PUBLIC_APP_URL));
  } catch (error) {
    console.error('Error processing payment callback:', error);
    return NextResponse.redirect(new URL('/payment/failed', process.env.NEXT_PUBLIC_APP_URL));
  }
}