import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma'; // Updated path

export async function GET() {
  console.log("Fetching products..."); // Debug log
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        deletedAt: null
      }
    });
    
    console.log("Products fetched:", products); // Debug log
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Error fetching products' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}