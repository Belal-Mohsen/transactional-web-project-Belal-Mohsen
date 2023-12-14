import React from "react";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Shadow from "../components/Shadow";
import ChatBox from "../components/ChatBox";
import Subscribe from "../components/Subscribe";

const SubscribePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />
      <NavBar />
      <Shadow />

      <p className="mx-1 mt-6 mb-2 font-inter-semi-bold italic font-semibold text-[#342f19cc] text-[18px] text-center">
        Merely illustrative images
      </p>

      <div className="flex mt-4 items-center justify-center">
        <Subscribe />
      </div>

      <ChatBox className="fixed left-0 top-[10%] md:left-[10%] md:top-[30%]" />

      <button className="w-full md:w-auto px-6 py-3 bg-[#c0876a] rounded text-black font-bold text-[18px] md:text-[32px] mt-4 mx-auto md:mb-6">
        SUBSCRIBE
      </button>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default SubscribePage;
