import React from "react";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const ChristmasBox = () => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden">
      <img
        src="./images/chrisBox.png"
        alt="Christmas Box"
        className="w-full border-2 border-[#C0876A] border-[6px] rounded-[5px] "
      />
      <div className="flex justify-between items-center p-4 bg-white">
        <div>
          <h2 className="text-l font-bold [font-family:'Inria_Serif',Helvetica]">
            Christmas Box
          </h2>
          <p className="text-[16px] font-light text-gray-600">
            from <span className="text-red-600 line-through">$69</span>{" "}
            <span className="text-green-600">$55</span>
          </p>
        </div>
        <Link to="/cart">
          <PiShoppingCartDuotone color="#7d5844" className="w-6 h-7" />
        </Link>
      </div>
    </div>
  );
};

export default ChristmasBox;
