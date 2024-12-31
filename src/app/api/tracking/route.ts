// src/app/api/tracking/route.ts
import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const phone = searchParams.get('phone');
  const orderNumber = searchParams.get('orderNumber');

  try {
    const orders = await prisma.order.findMany({
      where: {
        OR: [
          {
            address: {
              email: email || undefined,
            },
          },
          {
            address: {
              phone: phone || undefined,
            },
          },
          {
            orderNumber: orderNumber || undefined,
          },
        ],
      },
      include: {
        address: true,
        items: {
          include: {
            product: {
              select: {
                name: true,
                imageURL1: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(orders);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}