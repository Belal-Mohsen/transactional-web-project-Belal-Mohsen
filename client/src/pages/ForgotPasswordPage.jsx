import React from "react";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Shadow from "../components/Shadow";
import ChatBot from "../components/ChatBot";
import ForgotPassword from "../components/ForgotPassword";

const ForgotPasswordPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />
      <NavBar />
      <Shadow />

      <div className="flex flex-1 items-center justify-center">
        <ForgotPassword />
      </div>
      <ChatBot />

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
