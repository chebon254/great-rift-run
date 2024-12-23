import prisma from "../../../../../lib/prisma";
import {
  getPesapalToken,
  createPesapalOrder,
} from "../../../../../lib/pesapal";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { cartItems, shippingDetails, totalAmount } = await request.json();

    // Generate unique order number
    const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Create order in database
    const order = await prisma.order.create({
      data: {
        orderNumber,
        subtotal: totalAmount - 2000, // Subtract shipping cost
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

    // Get Pesapal token
    const token = await getPesapalToken();

    // Create Pesapal order
    const pesapalOrder = await createPesapalOrder(
      {
        id: orderNumber,
        currency: "KES",
        amount: totalAmount,
        description: `Order ${orderNumber}`,
        callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/payment/callback`,
        notification_id: `NOTIFY-${orderNumber}`,
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
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create order" },
      { status: 500 }
    );
  }
}
