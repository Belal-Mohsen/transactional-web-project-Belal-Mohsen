import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#f7eade]">
      <div className=" max-w-6xl mx-auto p-4">
        <div className="text-center space-y-4">
          <p className="font-bold [font-family:'Inria_Serif',Helvetica] text-[#342f19] text-2xl md:text-3xl">
            Unbox Joy, Unbox Fun, Unbox Holidays!
          </p>
          <p className="font-normal [font-family:'Inria_Serif',Helvetica] text-[#342f19] text-base md:text-l">
            Celebrate the Seasons with Surprise!
          </p>
          <button className="border-2 [font-family:'Inria_Serif',Helvetica] border-[#c0876a] text-[#c0876a] font-bold py-2 px-4">
            Discover Now
          </button>
        </div>
        <img
            className="absolute right-0 top-[50px] object-cover"
            alt="Banner"
            src="https://c.animaapp.com/qqWqs49g/img/bannerimage.png"
          />
      </div>
    </div>
  );
};

export default Banner;
