import React from "react";

import TopBanner from "../components/TopBanner";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import HowItWorks from "../components/HowItWorks";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import OurStory from "../components/OurStory";
import ImageCarousel from "../components/ImageCarousel";
import WhatsHot from "../components/WhatsHot";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />
      <NavBar />
      <Banner />
      <div className="my-6 flex flex-1 items-center justify-center">
        <div className="w-full max-w-5xl mx-auto">
          <WhatsHot />
          <ImageCarousel />
          <HowItWorks />
          <OurStory />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;
