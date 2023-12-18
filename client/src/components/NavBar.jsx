import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsList, BsX } from 'react-icons/bs';
import { PiShoppingCartDuotone } from "react-icons/pi";
import { MdOutlineAccountCircle } from "react-icons/md";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative overflow-x-auto bg-white">
      <div className="hidden md:flex justify-between items-center p-1 mr-5 ml-1">
        <Link to="/">
          <img
            className="h-12 object-cover"
            alt="Logo color updated"
            src="logo.png"
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
            <PiShoppingCartDuotone color="#7d5844" className="w-6 h-7" />
          </Link>
          <Link to="/myaccount">
            <MdOutlineAccountCircle color="#7d5844" className="w-6 h-7" />
          </Link>
        </div>
      </div>

      <div
        className={
          isMenuOpen
            ? "md:hidden flex flex-col w-full bg-gray-100"
            : "md:hidden bg-gray-100"
        }
      >
        <div className="flex justify-between px-2">
          <Link to="/">
            <img
              className="h-12 object-cover"
              alt="Logo color updated"
              src="logo.png"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 text-4xl"
          >
            {isMenuOpen ? <BsX /> : <BsList className="flex ml-" />}
          </button>
        </div>
        <div>
          {isMenuOpen && (
            <div>
              <ul className=" flex flex-col gap-2 p-4">
                <Link to="/" className="hover:[color:#7d5844]">Home</Link>
                <Link to="/subscribe" className="hover:[color:#7d5844]">Subscribe</Link>
                <Link to="/faq" className="hover:[color:#7d5844]">FAQ</Link>
                <Link to="/calendar" className="hover:[color:#7d5844]">Calendar</Link>
                <Link to="/contactus" className="hover:[color:#7d5844]">Contact Us</Link>

              </ul>
              <div className='flex pl-4 gap-4 pb-3'>
                <Link to="/cart">
                  <PiShoppingCartDuotone color="#7d5844" className="w-6 h-7" />
                </Link>
                <Link to="/myaccount">
                  <MdOutlineAccountCircle color="#7d5844" className="w-6 h-7" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
