import React from "react";
import StepElement from "./StepElement";

const HowItWorks = () => {
  return (
    <div className="w-full max-w-[1249px] mx-auto my-8">
        <div className="relative h-[479px] top-[5px] rounded-[10px]">
          <div className="absolute w-[283px] h-[65px] top-[370px] left-[629px] bg-[#d9d9d9]" />
          <div className="absolute w-[1238px] h-[479px] top-0 left-0 bg-[#f7f6f2] rounded-[10px]" />
          <StepElement
            className="!absolute !left-[864px] !top-[128px]"
            text="3"
            text1="Enjoy your Pack!"
            text2="Voila! Receive your box and add, upgrade, skip or cancel at any time."
          />
          <StepElement
            className="!absolute !left-[452px] !top-[128px]"
            text="2"
            text1="Personalize your decor."
            text2="Choose your favorite theme + decor for each holiday on your subscription."
          />
          <StepElement
            className="!absolute !left-[54px] !top-[128px]"
            text="1"
            text1="Build your plan."
            text2="Choose your holidays, select your box sizes for each, and define your payment preference."
          />
          <button className="absolute w-[161px] h-[43px] top-[382px] left-[372px] all-[unset] box-border">
            <div className="relative h-[43px] rounded-[5px]">
              <div className="w-[161px] rounded-[5px] absolute h-[43px] top-0 left-0 border-2 border-solid border-[#c0876a]" />
              <div className="w-[136px] top-[7px] left-[12px] absolute h-[26px] [font-family:'Inria_Serif',Helvetica] font-bold text-[#c0876a] text-[16px] text-center tracking-[0] leading-[normal]">
                GET STARTED
              </div>
            </div>
          </button>
          <button className="absolute w-[274px] h-[43px] top-[382px] left-[638px]">
            <div className="relative h-[43px] rounded-[5px]">
              <div className="w-[274px] rounded-[5px] absolute h-[43px] top-0 left-0 border-2 border-solid border-[#c0876a]" />
              <div className="w-[244px] top-[8px] left-[15px] absolute h-[26px] [font-family:'Inria_Serif',Helvetica] font-bold text-[#c0876a] text-[16px] text-center tracking-[0] leading-[normal]">
                FREQUENTLY ASKED QUESTIONS
              </div>
            </div>
          </button>
          <div className="absolute w-[300px] h-[62px] top-[50px] left-[513px] [font-family:'Inria_Serif',Helvetica] font-bold text-[#7d5844] text-[36px] tracking-[0] leading-[normal]">
            How It Works
          </div>
        </div>
      
    </div>
  );
};

export default HowItWorks;
