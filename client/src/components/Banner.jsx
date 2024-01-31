import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#f7eade]">
      <div className="relative z-10 max-w-6xl mx-auto py-[57px] ">
        <div className="text-center space-y-4 ">
          <p className="font-bold [font-family:'Inria_Serif',Helvetica] text-[#342f19] text-2xl md:text-3xl">
            {t("bannerTitle")}
          </p>
          <p className="font-normal [font-family:'Inria_Serif',Helvetica] text-[#342f19] text-base md:text-l">
            {t("bannerSubTitle")}
          </p>
          <Link
            to="/questionnaire"
            className="border-2 rounded-[5px] [font-family:'Inria_Serif',Helvetica] border-[#c0876a] text-[#c0876a] font-bold py-2 px-4 inline-block"
          >
            {t("discoverNowBannerButton")}
          </Link>
        </div>
      </div>
      <img
        className="hidden xl:block absolute right-0 top-6 object-cover"
        alt="Banner"
        src="https://c.animaapp.com/qqWqs49g/img/bannerimage.png"
      />
    </div>
  );
};

export default Banner;
