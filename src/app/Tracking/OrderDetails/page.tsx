import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

const OrderDetails = () => {
  return (
    <>
    {/* Hero */}
    <div
          className="h-[30vh] w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-image.png)" }}
        >
          <div className="mx-auto max-w-7xl px-4 h-full flex justify-center items-center">
            <div className="h-fit text-left w-full px-4 md:px-8">
              <div className="text-left text-[#FFFFFF] my-10 font-[family-name:var(--font-roboto-bold)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                ORDER DETAILS
              </div>
            </div>
          </div>
        </div>
      <div className="mx-auto max-w-7xl relative z-10 rounded-[10px] bg-white shadow-1 my-4 px-4 py-4 md:px-6 2xl:px-7 flex items-center justify-start  flex-wrap">
        <ol className="flex items-center whitespace-nowrap">
          <li className="inline-flex items-center">
            <Link
              className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              href="/Tracking"
            >
             Tracking
              <svg
                className="shrink-0 mx-2 size-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link>
          </li>
          <li
            className="inline-flex items-center text-sm font-semibold text-gray-800 truncate"
            aria-current="page"
          >
            Order Details
          </li>
        </ol>
      </div>
      <div className="mx-auto max-w-7xl w-full p-6 rounded-2xl bg-white">
        <div className="flex items-center justify-between">
            <div className="p-0">
                <h1 className="text-2xl font-bold mb-4">Your Order Details</h1>
                <p className="mb-2">Order #46528952</p>
                <p className="mb-6">Order waiting processing</p>
            </div>
            <div className="flex items-center justify-between">
                <h3 className="text-base font-bold mr-4">Order Status: </h3>
                <span className="py-3 px-7 rounded-sm bg-[#14AE5C33] text-[#14AE5C]">Processed</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-4">Order Info</h2>
            <p className="my-2"><strong>Order Date:</strong> Mar 28, 2023</p>
            <p className="my-2"><strong>Delivery Date:</strong> April 01, 2023</p>
            <p className="my-2"><strong>Status:</strong> Progress</p>
            <p className="my-2"><strong>Payment Status:</strong> Paid</p>
            <p className="my-2"><strong>Payment Method:</strong> Cash on Delivery</p>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-4">Customer</h2>
            <p className="my-2"><strong>Name:</strong> John Smith</p>
            <p className="my-2"><strong>Email:</strong> john.smith@gmail.com</p>
            <p className="my-2"><strong>Phone number:</strong> +91 76802 52136</p>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-2">Shipping Address</h2>
            <p className="my-2"><strong>City/Town:</strong> Nairobi</p>
            <p className="my-2"><strong>Location:</strong> Kabete</p>
            <p className="my-2"><strong>Custom:</strong> Pharouh Court</p>
            <p className="my-2"><strong>House:</strong> 11</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between border rounded-lg p-4">
            <Image
              src="/product/product-02.webp"
              alt="Smart Watch"
              width={80}
              height={80}
            />
            <div className="flex-1 ml-4">
              <h4 className="font-semibold">Smart Watch</h4>
              <p>Quantity: 1</p>
            </div>
            <p className="font-semibold">Ksh140.00</p>
          </div>
          <div className="flex items-center justify-between border rounded-lg p-4">
            <Image
              src="/product/product-02.webp"
              alt="iPhone 15"
              width={80}
              height={80}
            />
            <div className="flex-1 ml-4">
              <h4 className="font-semibold">iPhone 15</h4>
              <p>Quantity: 1</p>
            </div>
            <p className="font-semibold">Ksh1,550.26</p>
          </div>
        </div>

        <div className="text-right">
          <p className="mb-1"><strong>Subtotal:</strong> Ksh1,690.26</p>
          <p className="mb-1"><strong>Shipping Charge:</strong> Ksh60.00</p>
          <p className="mb-1"><strong>Taxes:</strong> Ksh80.00</p>
          <h3 className="text-xl font-bold mt-4">Total: ksh1,830.26</h3>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default OrderDetails;
