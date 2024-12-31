import React from "react";

const Skeleton = () => {
  return (
    <div className="flex items-center justify-evenly flex-wrap my-8">
      <div className="my-6 mx-4 h-fit w-[380px]">
        <div className="text-left">
          <div className="my-4 h-[320px] w-full max-w-[400px] bg-gray-200 animate-pulse"></div>
          <div className="h-10 bg-gray-200 animate-pulse"></div>
          <div className="h-6 my-1 mb-6 bg-gray-200 animate-pulse"></div>
          <div className="h-10 w-40 bg-gray-200 animate-pulse"></div>
        </div>
      </div>
      <div className="my-6 mx-4 h-fit w-[380px]">
        <div className="text-left">
          <div className="my-4 h-[320px] w-full max-w-[400px] bg-gray-200 animate-pulse"></div>
          <div className="h-10 bg-gray-200 animate-pulse"></div>
          <div className="h-6 my-1 mb-6 bg-gray-200 animate-pulse"></div>
          <div className="h-10 w-40 bg-gray-200 animate-pulse"></div>
        </div>
      </div>
      <div className="my-6 mx-4 h-fit w-[380px]">
        <div className="text-left">
          <div className="my-4 h-[320px] w-full max-w-[400px] bg-gray-200 animate-pulse"></div>
          <div className="h-10 bg-gray-200 animate-pulse"></div>
          <div className="h-6 my-1 mb-6 bg-gray-200 animate-pulse"></div>
          <div className="h-10 w-40 bg-gray-200 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
