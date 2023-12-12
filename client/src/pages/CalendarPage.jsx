import React from "react";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Calendar from "../components/Calendar";
import Shadow from "../components/Shadow";
import ChatBox from "../components/ChatBox";

const CalendarPage = () => {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <TopBanner />
        <NavBar />
        <Shadow />
        <div className="flex flex-1 items-center justify-center">
            <p className="w-[730px] h-[37px] mx-1 mt-6 mb-2 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#342f19cc] text-[24px] text-center">
            THE UNBOX HOLIDAYS CALENDAR
            </p>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Calendar />
        </div>
  
        <ChatBox className="!fixed !left-[1346px] !top-[816px]" />
        
        <Newsletter />
        <Footer />
      </div>
    );
  };
  
  export default CalendarPage;