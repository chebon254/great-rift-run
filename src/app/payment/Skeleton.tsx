import React from 'react';

const PaymentSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="h-7 w-40 bg-gray-200 rounded-md mb-4 animate-pulse" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {/* Payment Methods Section */}
        <div className="md:col-span-2 col-span-1">
          <div className="h-7 w-44 bg-gray-200 rounded-md mb-4 animate-pulse" />
          
          <div className="space-y-4">
            {/* Card Payment Option */}
            <div className="border rounded-md p-4">
              <div className="flex items-center">
                <div className="h-6 w-6 bg-gray-200 rounded-full mr-2 animate-pulse" />
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
                  <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="ml-2 h-5 w-28 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>

            {/* M-Pesa Option */}
            <div className="border rounded-md p-4">
              <div className="flex items-center">
                <div className="h-6 w-6 bg-gray-200 rounded-full mr-2 animate-pulse" />
                <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
                <div className="ml-2 h-5 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="w-full">
          <div className="h-7 w-36 bg-gray-200 rounded-md mb-4 animate-pulse" />
          <div className="mb-20">
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

export default PaymentSkeleton;