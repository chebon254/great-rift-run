import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function GET(request: Request) {
  try {
    // Extract the `id` parameter from the request URL
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); // Assuming this captures the dynamic `[id]`

    if (!id) {
      return NextResponse.json(
        { error: 'Product ID is missing' },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Error fetching product' },
      { status: 500 }
    );
  }
}
