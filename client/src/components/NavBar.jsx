import React from "react";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { MdOutlineAccountCircle } from "react-icons/md";
// import { FaShoppingCart, FaUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="relative overflow-x-auto bg-white">
      <div className="flex justify-between items-center p-1 mr-5 ml-1">
        <img
          className="h-12 object-cover"
          alt="Logo color updated"
          src="https://c.animaapp.com/qqWqs49g/img/logo-color-updated-1@2x.png"
        />
        <div className="hidden md:flex gap-16 [font-family:'Inria_Serif',Helvetica]">
          <div className="font-bold text-[#342f19] text-lg">Home</div>
          <div className="font-bold text-[#342f19] text-lg">Subscribe</div>
          <div className="font-bold text-[#342f19] text-lg">FAQ</div>
          <div className="font-bold text-[#342f19] text-lg">Calendar</div>
          <div className="font-bold text-[#342f19] text-lg">Contact Us</div>
        </div>
        <div className="flex gap-4">
      <PiShoppingCartDuotone color="#7d5844" className="w-6 h-7"/>
      <MdOutlineAccountCircle color="#7d5844" className="w-6 h-7" />
    </div>
      </div>
    </div>
  );
};

export default NavBar;
