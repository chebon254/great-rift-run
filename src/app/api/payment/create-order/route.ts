import prisma from "../../../../../lib/prisma";
import {
  getPesapalToken,
  createPesapalOrder,
  registerIPN
} from "../../../../../lib/pesapal";
import { NextResponse } from "next/server";

interface CartItem {
  id: string;
  quantity: number;
  price: number;
  size?: string;
  capacity?: string;
}

interface ShippingDetails {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  street: string;
  house: string;
  additionalInfo?: string;
}

export async function POST(request: Request) {
  try {
    const { cartItems, shippingDetails, totalAmount }: 
      { cartItems: CartItem[]; shippingDetails: ShippingDetails; totalAmount: number } = await request.json();

    // Generate unique order number with timestamp for better uniqueness
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

    // Create order in database
    const order = await prisma.order.create({
      data: {
        orderNumber,
        subtotal: totalAmount - 2000,
        shippingCost: 2000,
        totalAmount,
        paymentMethod: "pesapal",
        paymentStatus: "PENDING",
        items: {
          create: cartItems.map((item: any) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
            size: item.size || null,
            capacity: item.capacity || null,
          })),
        },
        address: {
          create: {
            firstName: shippingDetails.firstName,
            lastName: shippingDetails.lastName,
            phone: shippingDetails.phone,
            email: shippingDetails.email,
            city: shippingDetails.city,
            street: shippingDetails.street,
            house: shippingDetails.house,
            additionalInfo: shippingDetails.additionalInfo || "",
          },
        },
      },
    });

    console.log('Order created:', orderNumber);

    // Get Pesapal token
    const token = await getPesapalToken();
    console.log('Pesapal token obtained');

    // Register IPN URL and get IPN ID
    const ipnId = await registerIPN(token);
    console.log('IPN registered with ID:', ipnId);

    // Create Pesapal order
    const pesapalOrder = await createPesapalOrder(
      {
        id: orderNumber,
        currency: "KES",
        amount: totalAmount,
        description: `Order ${orderNumber}`,
        callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/payment/callback`,
        notification_id: ipnId,
        billing_address: {
          email_address: shippingDetails.email,
          phone_number: shippingDetails.phone,
          first_name: shippingDetails.firstName,
          last_name: shippingDetails.lastName,
        },
      },
      token
    );

    if (!pesapalOrder?.redirect_url) {
      throw new Error("No redirect URL received from Pesapal");
    }

    // Create payment record
    await prisma.payment.create({
      data: {
        orderId: order.id,
        amount: totalAmount,
        merchantRef: orderNumber,
        status: "PENDING",
      },
    });

    return NextResponse.json({
      success: true,
      order: order,
      paymentUrl: pesapalOrder.redirect_url,
    });
  } catch (error: any) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || "Failed to create order",
        details: error.response?.data || {} 
      },
      { status: 500 }
    );
  }
}