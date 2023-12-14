import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-wrap w-full max-w-[1200px] mx-auto">
      {/* First block - Top left */}
      <div className="w-full text-center mb-4 md:mb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <div className="mb-10">
            <img
              className="w-full h-auto md:w-[368px] md:h-[498px] lg:w-[420px] lg:h-[420px]"
              src="./images/chrisBox.png"
              alt="Image 1"
            />
          </div>
          <div className="mb-10">
            <img
              className="w-full h-auto md:w-[368px] md:h-[498px] lg:w-[420px] lg:h-[420px]"
              src="./images/newyear.png"
              alt="Image 2"
            />
          </div>
          <div className="mb-10">
            <img
              className="w-full h-auto md:w-[368px] md:h-[498px] lg:w-[420px] lg:h-[420px]"
              src="./images/valentineBox.png"
              alt="Image 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
