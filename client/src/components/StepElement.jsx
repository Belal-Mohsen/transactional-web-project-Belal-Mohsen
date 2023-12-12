import React from "react";

const StepElement = ({
  className,
  text = "1",
  text1 = "Build your plan.",
  text2 = "Choose your holidays, select your box sizes for each, and define your payment preference.",
}) => {
  return (
    <div className={`relative w-[338px] h-[223px] ${className}`}>
      <div className="absolute w-[208px] h-[88px] -top-px left-[61px]">
        <div className="absolute w-[68px] h-[88px] top-0 left-[70px] [font-family:'Jolly_Lodger',Helvetica] font-normal text-[#c0876a4c] text-[200px] tracking-[0] leading-[normal] whitespace-nowrap">
          {text}
        </div>
        <div className="absolute w-[208px] h-[44px] top-[44px] left-0 [font-family:'Inria_Serif',Helvetica] font-normal text-[#342f19] text-[24px] text-center tracking-[0] leading-[normal]">
          {text1}
        </div>
      </div>
      <p className="absolute w-[281px] h-[80px] top-[142px] left-[17px] [font-family:'Inter',Helvetica] font-extralight text-black text-[18px] text-center tracking-[0] leading-[normal]">
        {text2}
      </p>
    </div>
  );
};

export default StepElement;