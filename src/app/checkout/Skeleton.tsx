import React from 'react';

const CheckoutSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 py-20">
      <div className="h-7 w-32 bg-gray-200 rounded-md mb-4 animate-pulse" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {/* Contact & Delivery Info Skeleton */}
        <div className="md:col-span-2 col-span-1">
          {/* Contact Information */}
          <div className="h-7 w-48 bg-gray-200 rounded-md mb-4 animate-pulse" />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <div className="h-4 w-24 bg-gray-200 rounded-md mb-1 animate-pulse" />
                <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse" />
              </div>
            ))}
          </div>

          {/* Delivery Information */}
          <div className="h-7 w-48 bg-gray-200 rounded-md mb-4 animate-pulse" />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <div className="h-4 w-24 bg-gray-200 rounded-md mb-1 animate-pulse" />
                <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary Skeleton */}
        <div className="w-full">
          <div className="h-7 w-36 bg-gray-200 rounded-md mb-4 animate-pulse" />
          <div className="pb-20">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded animate-pulse" />
                <div className="ml-4 flex-grow">
                  <div className="h-5 w-24 bg-gray-200 rounded-md mb-1 animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded-md animate-pulse" />
                </div>
                <div className="h-5 w-8 bg-gray-200 rounded-md animate-pulse" />
              </div>
            ))}
          </div>

          {/* Summary Totals */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex justify-between mb-2">
              <div className="h-5 w-20 bg-gray-200 rounded-md animate-pulse" />
              <div className="h-5 w-24 bg-gray-200 rounded-md animate-pulse" />
            </div>
          ))}

          <div className="h-12 w-full bg-gray-200 rounded-md mt-6 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default CheckoutSkeleton;