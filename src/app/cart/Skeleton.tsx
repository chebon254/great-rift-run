import React from 'react';

const CartSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 bg-white shadow-sm rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
        {/* Cart Items Skeleton */}
        <div>
          <div className="h-7 w-48 bg-gray-200 rounded-md mb-4 animate-pulse" />
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-md animate-pulse" />
                  <div>
                    <div className="h-5 w-32 bg-gray-200 rounded-md mb-2 animate-pulse" />
                    <div className="h-4 w-24 bg-gray-200 rounded-md animate-pulse" />
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-16 h-8 bg-gray-200 rounded-md animate-pulse" />
                  <div className="h-5 w-24 bg-gray-200 rounded-md animate-pulse" />
                  <div className="w-6 h-6 bg-gray-200 rounded-md animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary Skeleton */}
        <div className="p-4 mt-5 rounded-md">
          <div className="h-7 w-36 bg-gray-200 rounded-md mb-4 animate-pulse" />
          <div className="mb-2 w-full mt-14">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex justify-between my-3">
                <div className="h-5 w-24 bg-gray-200 rounded-md animate-pulse" />
                <div className="h-5 w-28 bg-gray-200 rounded-md animate-pulse" />
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between my-3">
                <div className="h-6 w-20 bg-gray-200 rounded-md animate-pulse" />
                <div className="h-6 w-32 bg-gray-200 rounded-md animate-pulse" />
              </div>
            </div>
            <div className="h-12 w-full bg-gray-200 rounded-md mt-6 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;