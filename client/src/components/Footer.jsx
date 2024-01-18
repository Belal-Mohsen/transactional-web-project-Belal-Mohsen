import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[#c0876a] text-white text-center py-4 [font-family:'Inria_Serif',Helvetica]">
        <p className="font-normal text-sm">
        {t("footerMessage")}
        </p>
      </footer>
  );
}

export default Footer;