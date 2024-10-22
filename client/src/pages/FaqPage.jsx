import React from "react";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Faq from "../components/Faq";
import Shadow from "../components/Shadow";
import { useTranslation } from "react-i18next";

const FaqPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />
      <NavBar />
      <Shadow />
      <div className="flex flex-1 items-center justify-center">
        <p className="mx-1 mt-6 mb-2 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#342f19cc] text-[32px] text-center">
          FAQs
          <p className="text-[#c0876a] text-[22px]">{t("yourQuestionAnswered")}</p>
        </p>
      </div>

      <div className="flex flex-1 items-top justify-center">
        <Faq />
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default FaqPage;
