import React from "react";
import StepElement from "./StepElement";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#f7f6f2] rounded-[10px] text-center py-8 mb-8">
      <h2 className="font-bold [font-family:'Inria_Serif',Helvetica] text-[#7d5844] text-[34px]">
        {t("howItWorksTitle")}
      </h2>
      <div className="flex flex-col md:flex-row justify-around items-center px-4 mb-6">
        <StepElement
          text="1"
          text1={t("howItWorksBuildYourPlanTitle")}
          text2={t("howItWorksBuildYourPlanText")}
        />
        <StepElement
          text="2"
          text1={t("howItWorksPersonalizeTitle")}
          text2={t("howItWorksPersonalizeText")}
        />

        <StepElement
          text="3"
          text1={t("howItWorksEnjoyTitle")}
          text2={t("howItWorksEnjoyText")}
        />
      </div>
      <div className="flex justify-center gap-4 mb-4">
        <Link
          to="/questionnaire"
          className="text-[#c0876a] text-[16px]  [font-family:'Inria_Serif',Helvetica] border-2 border-solid border-[#c0876a] font-bold py-2 px-2 rounded-[5px] mr-10"
        >
          {t("getStartedLink")}
        </Link>
        <Link
          to="/faq"
          className="text-[#c0876a] text-[16px]  [font-family:'Inria_Serif',Helvetica]  border-2 border-solid border-[#c0876a] font-bold py-2 px-2 rounded-[5px] ml-10"
        >
          {t("faqTextButton")}
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
