"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import { OrderProgress, PaymentStatus } from "@prisma/client";
import Link from "next/link";
import React from "react";
import OrderSkeleton from "./Skeleton";

interface OrderDetail {
  id: number;
  orderNumber: string;
  orderProgress: OrderProgress;
  paymentStatus: PaymentStatus;
  paymentMethod: string;
  createdAt: Date;
  totalAmount: number;
  subtotal: number;
  shippingCost: number;
  address: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    street: string;
    house: string;
    additionalInfo?: string;
  };
  items: {
    id: number;
    quantity: number;
    size: string;
    capacity: string;
    price: number;
    product: {
      name: string;
      imageURL1: string;
    };
  }[];
}

export default function OrderDetails() {
  const params = useParams();
  const orderId = params?.id as string;

  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  const fetchOrderDetails = async () => {
    setLoading(true); // Start loading when fetching data
    try {
      const response = await fetch(`/api/tracking/${orderId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch order details");
      }
      const data = await response.json();
      if (data) {
        setOrder(data);
      } else {
        setError("Order not found");
      }
    } catch (err) {
      setError("Failed to load order details");
      console.error("Error fetching order details:", err);
    } finally {
      setLoading(false); // End loading after fetching data
    }
  };

  if (loading) {
    return (
      <>
        <div
          className="h-[30vh] w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-image.png)" }}
        >
          <div className="mx-auto max-w-7xl px-4 h-full flex justify-center items-center">
            <div className="h-fit text-left w-full px-4 md:px-8">
              <div className="text-left text-[#FFFFFF] my-10 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                ORDER DETAILS
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl relative z-10 rounded-[10px] bg-white shadow-1 mb-4 px-4 py-4 md:px-6 2xl:px-7 flex items-center justify-start flex-wrap">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </li>
            <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate">
              Order Details
            </li>
          </ol>
        </div>
        <OrderSkeleton />
      </>
    );
  }

  if (error) {
    return (
      <>
        <div
          className="h-[30vh] w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-image.png)" }}
        >
          <div className="mx-auto max-w-7xl px-4 h-full flex justify-center items-center">
            <div className="h-fit text-left w-full px-4 md:px-8">
              <div className="text-left text-[#FFFFFF] my-10 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                ORDER DETAILS
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl relative z-10 rounded-[10px] bg-white shadow-1 mb-4 px-4 py-4 md:px-6 2xl:px-7 flex items-center justify-start flex-wrap">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </li>
            <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate">
              Order Details
            </li>
          </ol>
        </div>
        <div className="text-red-500">{error}</div>
      </>
    );
  }

  if (!order) {
    return (
      <>
        <div
          className="h-[30vh] w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-image.png)" }}
        >
          <div className="mx-auto max-w-7xl px-4 h-full flex justify-center items-center">
            <div className="h-fit text-left w-full px-4 md:px-8">
              <div className="text-left text-[#FFFFFF] my-10 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                ORDER DETAILS
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl relative z-10 rounded-[10px] bg-white shadow-1 mb-4 px-4 py-4 md:px-6 2xl:px-7 flex items-center justify-start flex-wrap">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </li>
            <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate">
              Order Details
            </li>
          </ol>
        </div>
        <div className="text-lg">Order not found</div>
      </>
    );
  }
  
  return (
    <>
      <div
        className="h-[30vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-image.png)" }}
      >
        <div className="mx-auto max-w-7xl px-4 h-full flex justify-center items-center">
          <div className="h-fit text-left w-full px-4 md:px-8">
            <div className="text-left text-[#FFFFFF] my-10 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              ORDER DETAILS
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl relative z-10 rounded-[10px] bg-white shadow-1 mb-4 px-4 py-4 md:px-6 2xl:px-7 flex items-center justify-start flex-wrap">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link>
          </li>
          <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate">
            Order Details
          </li>
        </ol>
      </div>
      {loading ? (
        <OrderSkeleton />
      ) : (
        <div className="mx-auto mt-[20px] max-w-7xl w-full p-6 rounded-2xl bg-white">
          <div className="flex items-center justify-between">
            <div className="p-0">
              <h1 className="text-2xl font-bold mb-4">Your Order</h1>
              <p className="mb-2">
                <strong>Order No:</strong> {order.orderNumber}
              </p>
              <p className="mb-6">
                <strong>Status:</strong> {order.orderProgress}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border rounded-lg p-4">
              <h2 className="font-semibold mb-4">Order Info</h2>
              <p className="my-2">
                <strong>Order Date:</strong>{" "}
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <p className="my-2">
                <strong>Status:</strong> {order.orderProgress}
              </p>
              <p className="my-2">
                <strong>Payment Status:</strong> {order.paymentStatus}
              </p>
              <p className="my-2">
                <strong>Payment Method:</strong> {order.paymentMethod}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h2 className="font-semibold mb-4">Customer</h2>
              <p className="my-2">
                <strong>Name:</strong>{" "}
                {`${order.address.firstName} ${order.address.lastName}`}
              </p>
              <p className="my-2">
                <strong>Email:</strong> {order.address.email}
              </p>
              <p className="my-2">
                <strong>Phone:</strong> {order.address.phone}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h2 className="font-semibold mb-2">Shipping Address</h2>
              <p className="my-2">
                <strong>City:</strong> {order.address.city}
              </p>
              <p className="my-2">
                <strong>Street:</strong> {order.address.street}
              </p>
              <p className="my-2">
                <strong>House:</strong> {order.address.house}
              </p>
              {order.address.additionalInfo && (
                <p className="my-2">
                  <strong>Additional Info:</strong>{" "}
                  {order.address.additionalInfo}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-4"
              >
                <Image
                  src={item.product.imageURL1 || "/product/product-02.webp"}
                  alt={item.product.name}
                  width={80}
                  height={80}
                />
                <div className="flex-1 ml-4">
                  <h4 className="font-semibold">{item.product.name}</h4>
                  <div className="flex items-center justify-start">
                    <span className="mr-2 py-2">Quantity: {item.quantity}</span>
                    <span className="mr-2 py-2">Capacity: {item.capacity}</span>
                    <span className="mr-2 py-2">Size: {item.size}</span>
                  </div>
                </div>
                <p className="font-semibold">
                  Ksh{item.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          <div className="text-right">
            <h3 className="text-xl font-bold mt-4">
              Total: Ksh{order.totalAmount.toLocaleString()}
            </h3>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
