import React from "react";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Questionnaire from "../components/Questionnaire";
import Shadow from "../components/Shadow";

const QuestionnairePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />
      <NavBar />
      <Shadow />
      <div>
      <p className="mx-1 mt-6 mb-2 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#342f19] text-[32px] text-center">
        Questionnaire
      </p>
      <div className="flex mt-4 items-center justify-center">
        <Questionnaire />
      </div>
      </div>      

      <Newsletter />
      <Footer />
    </div>
  );
};

export default QuestionnairePage;
