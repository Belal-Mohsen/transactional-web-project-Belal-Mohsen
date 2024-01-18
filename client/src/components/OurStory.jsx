import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OurStory = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img
          src="./images/story1.png"
          alt="Decorating Christmas Tree"
          className="w-full h-auto md:h-full object-cover rounded-tl-10 rounded-bl-10"
        />
      </div>
      <div className="md:w-1/2 bg-[#DFC2B4] p-4 md:p-8 flex flex-col justify-center  rounded-tr-10 rounded-br-10">
        <h2 className="text-2xl md:text-3xl mb-4 [font-family:italianno,Helvetica,sans-serif] font-normal text-[#342f19] text-[48px] text-center tracking-[0] leading-[normal]">
          {t("ourStoryTitle")}
        </h2>
        <p className="mb-4 [font-family:'Inter-Light',Helvetica] font-normal text-[#342f19] text-[16px] tracking-[0] leading-[normal]">
          <span className="font-light">{t("ourStoryTextBeginning")}</span>
          <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold italic">
            {t("businessName")}
          </span>
          <span className="font-light">
            {" "}
            {t("ourStoryTextEndOfFirstParagraph")}
            <br />
            <br />
            {t("ourStorySecondParagraphBeginning")}
          </span>
          <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold italic">
            {t("businessName")}
          </span>
          <span className="font-light">
            {t("ourStorySecondParagraphEnding")}
            <br />
            <br />
            {t("ourStoryThirdParagraph")}
          </span>
        </p>
        <button className="mx-auto w-[130px] py-1 px-1 rounded-[5px] border border-solid border-[#c0876a] box-border">
          <Link
            to="/contactus"
            className="[font-family:'Inria_Serif',Helvetica] font-bold text-[#c0876a] text-[16px] leading-[normal] no-underline"
          >
            {t("contactUsButton")}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default OurStory;
