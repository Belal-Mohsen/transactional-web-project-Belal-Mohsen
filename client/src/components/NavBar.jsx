import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { MdOutlineAccountCircle } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="relative overflow-x-auto bg-white">
      <div className="flex justify-between items-center p-1 mr-5 ml-1">
      <Link to="/">
        <img
          className="h-12 object-cover"
          alt="Logo color updated"
          src="https://c.animaapp.com/qqWqs49g/img/logo-color-updated-1@2x.png"
        />
      </Link>
        <div className="z-10 hidden md:flex gap-16 [font-family:'Inria_Serif',Helvetica] font-bold [color:#342f19] text-lg ">
          <Link to="/" className="hover:[color:#7d5844]">Home</Link>
          <Link to="/subscribe" className="hover:[color:#7d5844]">Subscribe</Link>
          <Link to="/faq" className="hover:[color:#7d5844]">FAQ</Link>
          <Link to="/calendar" className="hover:[color:#7d5844]">Calendar</Link>
          <Link to="/contactus" className="hover:[color:#7d5844]">Contact Us</Link>
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
