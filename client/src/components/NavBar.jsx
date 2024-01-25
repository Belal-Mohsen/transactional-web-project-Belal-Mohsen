import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  
 
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { t } = useTranslation();

  

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
          <Link to="/" className="hover:[color:#7d5844]">
            {t("homeButton")}
          </Link>
          <Link to="/questionnaire" className="hover:[color:#7d5844]">
            {t("subscribeButton")}
          </Link>
          <Link to="/faq" className="hover:[color:#7d5844]">
            {t("faqButton")}
          </Link>
          <Link to="/calendar" className="hover:[color:#7d5844]">
            {t("calendarButton")}
          </Link>
          <Link to="/contactus" className="hover:[color:#7d5844]">
            {t("contactUsButton")}
          </Link>
        </div>
        <div className="z-10 flex gap-4">
          <LanguageSwitcher />
          <Link to="/cart" className="relative">
            <PiShoppingCartDuotone color="#7d5844" className="w-6 h-7" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <Link to="/myaccount">
            <MdOutlineAccountCircle color="#7d5844" className="w-6 h-7" />
          </Link>
         
                <Link to="/admin" className="hover:[color:#7d5844]">
                  Admin 
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
        <div className="flex justify-between px-2 z-20">
          <Link to="/">
            <img
              className="h-12 object-cover"
              alt="Logo color updated"
              src="logo.png"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 text-4xl z-20"
          >
            {isMenuOpen ? <BsX /> : <BsList className="flex ml-" />}
          </button>
        </div>
        <div>
          {isMenuOpen && (
            <div>
              <ul className=" flex flex-col gap-2 p-4 z-20">
                <Link to="/" className="hover:[color:#7d5844]">
                  {t("homeButton")}
                </Link>
                <Link to="/subscribe" className="hover:[color:#7d5844]">
                  {t("subscribeButton")}
                </Link>
                <Link to="/faq" className="hover:[color:#7d5844]">
                  {t("faqButton")}
                </Link>
                <Link to="/calendar" className="hover:[color:#7d5844]">
                  {t("calendarButton")}
                </Link>
                <Link to="/contactus" className="hover:[color:#7d5844]">
                  {t("contactUsButton")}
                </Link>
              </ul>
              <div className="flex pl-4 gap-4 pb-3">
                <LanguageSwitcher />
                <Link to="/cart" className="relative">
                  <PiShoppingCartDuotone color="#7d5844" className="w-6 h-7" />
                  {totalItems > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                      {totalItems}
                    </span>
                  )}
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
