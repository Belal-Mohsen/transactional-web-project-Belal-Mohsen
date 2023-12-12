import React from "react";

const NavBar = () => {
  return (
    <div className="relative overflow-x-auto bg-white">
      <div className="flex justify-between items-center p-2">
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
        <div className="flex gap-6">
          <img
            className="w-6 h-7"
            alt="Cart icon"
            src="https://c.animaapp.com/qqWqs49g/img/carticon.svg"
          />
          <img
            className="w-6 h-8"
            alt="Account icon"
            src="https://c.animaapp.com/qqWqs49g/img/accounticon.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
