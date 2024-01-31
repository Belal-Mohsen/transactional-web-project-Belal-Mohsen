import React from "react";
import { useTranslation } from "react-i18next";

const TopBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#c0876a] text-white text-center py-2 [font-family:italianno,Helvetica,sans-serif]">
      <p className="font-normal text-l">{t("topBannerMessage")}</p>
    </div>
  );
};

export default TopBanner;
