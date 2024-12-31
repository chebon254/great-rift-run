"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const OrderTracking = () => {
  const [searchParams, setSearchParams] = useState({
    email: "",
    phone: "",
  });
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const queryParams = new URLSearchParams(
        Object.entries(searchParams).filter(([value]) => value)
      );
      const response = await fetch(`/api/tracking?${queryParams}`);
      const data = await response.json();

      if (response.ok) {
        setOrders(data);
        if (data.length === 0) {
          setError("No orders found with the provided information.");
        }
      } else {
        setError("Failed to fetch orders. Please try again.");
      }
    } catch {
      setError("An error occurred while searching for orders.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div
          className="h-[30vh] w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-image.png)" }}
        >
          <div className="mx-auto max-w-7xl px-4 h-full flex justify-center items-center">
            <div className="h-fit text-left w-full px-4 md:px-8">
              <div className="text-left text-[#FFFFFF] my-10 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                ORDER TRACKING
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl relative z-10 rounded-[10px] bg-white shadow-1 my-4 px-4 py-4 md:px-6 2xl:px-7">
          <div className="p-6 bg-white">
            <h1 className="text-2xl font-bold mb-1">Track Your Order</h1>
            <p className="mb-4">Enter email or phone or both used in shipping address.</p>
            <form onSubmit={handleSearch} className="space-y-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  type="email"
                  placeholder="Enter order email"
                  value={searchParams.email}
                  onChange={(e: { target: { value: any } }) =>
                    setSearchParams((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="border border-gray-300 rounded-[10px] focus:border-green-500 placeholder:text-grey-500"
                />
                <Input
                  type="tel"
                  placeholder="Enter order phone"
                  value={searchParams.phone}
                  onChange={(e: { target: { value: any } }) =>
                    setSearchParams((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  className="border border-gray-300 rounded-[10px] focus:border-green-500 placeholder:text-grey-500"
                />
              </div>
              <Button
                type="submit"
                className={`w-full min-w-[120px] rounded-[4px] md:w-auto ${
                  loading ? "text-gray-400 bg-[#14AE5C]/50" : "text-white bg-[#14AE5C] hover:bg-[#14AE5C]/90"
                }`}
                disabled={loading}
              >
                {loading ? "Searching..." : "Track Order"}
              </Button>
            </form>

            {error && (
              <div className="text-red-500 mb-4">
                No order with details found! Check your details
              </div>
            )}

            {orders.length > 0 && (
              <div className="space-y-4">
                {orders.map((order: any) => (
                  <div key={order.id} className="border-b pb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">
                          Order ID: {order.orderNumber}
                        </p>
                        <p>
                          Date: {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                        <p>Total: Ksh{order.totalAmount.toLocaleString()}</p>
                      </div>
                      <div className="flex space-x-4 items-center">
                        <span
                          className={`px-2 py-1 rounded ${
                            order.paymentStatus === "PAID"
                              ? "bg-green-100 text-green-600"
                              : "bg-yellow-100 text-yellow-600"
                          }`}
                        >
                          {order.paymentStatus}
                        </span>
                        <Link
                          href={`/Tracking/OrderDetails/${order.id}`}
                          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                        >
                          View details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderTracking;
