import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const orderTrackingId = url.searchParams.get('OrderTrackingId');
  const orderMerchantReference = url.searchParams.get('OrderMerchantReference');
  const orderNotificationType = url.searchParams.get('OrderNotificationType');

  console.log('IPN notification received:', {
    orderTrackingId,
    orderMerchantReference,
    orderNotificationType
  });

  if (!orderMerchantReference) {
    console.error('Missing merchant reference in IPN');
    return NextResponse.json({ error: 'Missing merchant reference' }, { status: 400 });
  }

  try {
    // Update payment status
    await prisma.payment.update({
      where: {
        merchantRef: orderMerchantReference,
      },
      data: {
        status: orderNotificationType === 'COMPLETED' ? 'PAID' : 'FAILED',
        transactionId: orderTrackingId || undefined,
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing IPN:', error);
    return NextResponse.json({ error: 'Failed to process IPN' }, { status: 500 });
  }
}