import React from "react";
import StepElement from "./StepElement";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="bg-[#f7f6f2] rounded-[10px] text-center py-8 mb-8">
      <h2 className="font-bold [font-family:'Inria_Serif',Helvetica] text-[#7d5844] text-[34px]">
        How It Works
      </h2>
      <div className="flex flex-col md:flex-row justify-around items-center px-4 mb-6">
        <StepElement
          text="1"
          text1="Build your plan."
          text2="Choose your holidays, select your box sizes for each, and define your payment preference."
        />
        <StepElement
          text="2"
          text1="Personalize your decor."
          text2="Choose your favorite theme + decor for each holiday on your subscription."
        />

        <StepElement
          text="3"
          text1="Enjoy your Pack!"
          text2="Voila! Receive your box and add, upgrade, skip or cancel at any time."
        />
      </div>
      <div className="flex justify-center gap-4 mb-4">
        <Link
          to="/subscribe"
          className="text-[#c0876a] text-[16px]  [font-family:'Inria_Serif',Helvetica] border-2 border-solid border-[#c0876a] font-bold py-2 px-2 rounded-[5px] mr-10"
        >
          GET STARTED
        </Link>
        <Link
          to="/faq"
          className="text-[#c0876a] text-[16px]  [font-family:'Inria_Serif',Helvetica]  border-2 border-solid border-[#c0876a] font-bold py-2 px-2 rounded-[5px] ml-10"
        >
          FREQUENTLY ASKED QUESTIONS
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
