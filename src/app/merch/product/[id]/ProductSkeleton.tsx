import React from 'react';

const ProductDetailSkeleton = () => {
  return (
    <div className="mx-auto max-w-7xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-md p-6 w-full">
        {/* Image Gallery Skeleton */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="w-full h-full rounded-md bg-gray-200 animate-pulse" />
          </div>
          
          {/* Thumbnail Images Skeleton */}
          <div className="flex items-center justify-center space-x-2">
            {[1, 2, 3, 4].map((index) => (
              <div 
                key={index}
                className="w-20 h-20 rounded-md bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* Product Information Skeleton */}
        <div>
          <div className="relative">
            {/* In Stock Status Skeleton */}
            <div className="absolute top-0 right-0 w-24 h-8 bg-gray-200 rounded animate-pulse" />
            
            {/* Title Skeleton */}
            <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
            
            {/* Description Skeleton */}
            <div className="mt-6 space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Price Skeleton */}
          <div className="mt-10 h-8 w-32 bg-gray-200 rounded animate-pulse" />

          {/* Size/Capacity Selection Skeleton */}
          <div className="my-10">
            <div className="flex items-center -gap-[1px] w-full">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="px-4 py-6 border w-1/5 bg-gray-200 animate-pulse"
                />
              ))}
            </div>
          </div>

          {/* Quantity Selector Skeleton */}
          <div className="my-10">
            <div className="flex items-center justify-between -gap-[1px] rounded-md w-full">
              <div className="w-2/6 h-14 bg-gray-200 animate-pulse" />
              <div className="w-2/6 h-14 bg-gray-200 animate-pulse" />
              <div className="w-2/6 h-14 bg-gray-200 animate-pulse" />
            </div>
          </div>

          {/* Product Details Skeleton */}
          <div className="my-10 space-y-6">
            <div className="flex items-center justify-between">
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="flex items-center justify-between">
              <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Add to Cart Button Skeleton */}
          <div className="w-full h-16 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;