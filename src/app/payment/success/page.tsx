"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <div className="max-w-4xl mx-auto p-6 flex items-center justify-center min-h-screen">
      <div className="text-center p-8">
        <Image 
          src="/payment-success.svg"
          height={200}
          width={200}
          alt="Payment Success"
          className="mx-auto my-4"
        />
        <h1 className="font-[family-name:var(--font-roboto-extrabold)] text-5xl">
          Thank you for your order!
        </h1>
        <p className="font-[family-name:var(--font-roboto-medium)] text-lg mt-4">
          Your payment was successful. A receipt has been sent to your email.
        </p>
        <div className="flex items-center justify-evenly w-fit mx-auto py-10">
          <Link href="/orders" className="bg-[#14AE5C] mx-2 text-[#FFFFFF] py-3 px-10">
            VIEW ORDER
          </Link>
          <Link href="/merch" className="bg-[#FFFFFF] mx-2 border border-[#14AE5C] text-[#14AE5C] py-3 px-10">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </div>
  );
}