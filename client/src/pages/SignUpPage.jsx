import React from "react";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import SignUp from "../components/SignUp";
import Shadow from "../components/Shadow";
import ChatBox from "../components/ChatBox";

const SignUpPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />

      <NavBar />
    <Shadow />
      <div className="flex flex-1 items-center justify-center">
        <SignUp />
      </div>

    <ChatBox className="!fixed !left-[1346px] !top-[816px]" />
      <Newsletter />

      <Footer />
    </div>
  );
};

export default SignUpPage;
