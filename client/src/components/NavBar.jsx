import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { MdOutlineAccountCircle } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="relative overflow-x-auto bg-white">
      <div className="flex justify-between items-center p-1 mr-5 ml-1">
        <img
          className="h-12 object-cover"
          alt="Logo color updated"
          src="https://c.animaapp.com/qqWqs49g/img/logo-color-updated-1@2x.png"
        />
        <div className="z-10 hidden md:flex gap-16 [font-family:'Inria_Serif',Helvetica]">
          <Link to="/" className="font-bold text-[#342f19] text-lg">Home</Link>
          <Link to="/subscribe" className="font-bold text-[#342f19] text-lg">Subscribe</Link>
          <Link to="/faq" className="font-bold text-[#342f19] text-lg">FAQ</Link>
          <Link to="/calendar" className="font-bold text-[#342f19] text-lg">Calendar</Link>
          <Link to="/contactus" className="font-bold text-[#342f19] text-lg">Contact Us</Link>
        </div>
        <div className="z-10 flex gap-4">
          <Link to="/cart">
            <PiShoppingCartDuotone color="#7d5844" className="w-6 h-7"/>
          </Link>
          <Link to="/myaccount">
            <MdOutlineAccountCircle color="#7d5844" className="w-6 h-7" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
