import React from "react";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Shadow from "../components/Shadow";
import ChatBox from "../components/ChatBox";
import ContactUs from "../components/ContactUs";

const ContactUsPage = () => {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <TopBanner />
        <NavBar />
        <Shadow />
        <div className="flex flex-1 items-center justify-center">
            <p className="w-[730px] h-[37px] mx-1 my-4 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#342f19cc] text-[20px] text-center">
                FILL OUT THE FORM BELOW IF YOU HAVE A QUESTION OR COMMENT FOR US
            </p>
        </div>
        <div className="flex flex-1 items-center justify-center m-6">
          <ContactUs />
        </div>
  
        <ChatBox className="!fixed !left-[1346px] !top-[816px]" />
        
        <Newsletter />
        <Footer />
      </div>
    );
  };
  
  export default ContactUsPage;