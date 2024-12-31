"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <>
      {/* Hero */}
      <div
        className="h-[30vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-image.png)" }}
      >
        <div className="mx-auto max-w-7xl px-4 h-full flex justify-center items-center">
          <div className="h-fit text-left w-full px-4 md:px-8">
            <div className="text-center text-[#FFFFFF] my-10 font-[family-name:var(--font-roboto-bold)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              PAYMENT STATUS
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 flex items-center justify-center min-h-[50vh]">
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
            <Link
              href="/Tracking"
              className="bg-[#14AE5C] mx-2 text-[#FFFFFF] py-3 px-10"
            >
              VIEW ORDER
            </Link>
            <Link
              href="/merch"
              className="bg-[#FFFFFF] mx-2 border border-[#14AE5C] text-[#14AE5C] py-3 px-10"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
