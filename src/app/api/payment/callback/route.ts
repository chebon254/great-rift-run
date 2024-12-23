import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const orderTrackingId = url.searchParams.get('OrderTrackingId') || undefined;
  const orderMerchantReference = url.searchParams.get('OrderMerchantReference');
  const orderNotificationType = url.searchParams.get('OrderNotificationType');

  if (!orderMerchantReference) {
    console.error('Missing merchant reference');
    return NextResponse.redirect(new URL('/payment/failed', process.env.NEXT_PUBLIC_APP_URL!));
  }

  try {
    // Update payment status
    await prisma.payment.update({
      where: {
        merchantRef: orderMerchantReference,
      },
      data: {
        status: orderNotificationType === 'COMPLETED' ? 'PAID' : 'FAILED',
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
        paymentStatus: orderNotificationType === 'COMPLETED' ? 'PAID' : 'FAILED',
      },
    });

    // Redirect to success or failure page
    const redirectUrl = orderNotificationType === 'COMPLETED' 
      ? '/payment/success'
      : '/payment/failed';

    return NextResponse.redirect(new URL(redirectUrl, process.env.NEXT_PUBLIC_APP_URL));
  } catch (error) {
    console.error('Error processing payment callback:', error);
    return NextResponse.redirect(new URL('/payment/failed', process.env.NEXT_PUBLIC_APP_URL));
  }
}