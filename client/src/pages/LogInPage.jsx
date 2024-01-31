import React from "react";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Shadow from "../components/Shadow";
import LogIn from "../components/LogIn";

const LogInPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />
      <NavBar />
      <Shadow />

      <div className="flex flex-1 items-center justify-center">
        <LogIn />
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default LogInPage;
