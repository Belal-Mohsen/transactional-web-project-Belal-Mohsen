import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-[#f7eade] text-center py-6">
        <p className="font-semibold text-lg text-[#342f19cc]">
          SIGN UP FOR FESTIVE UPDATES.
        </p>
        <div className="mt-4 flex justify-center items-center">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded-l mr-6 w-1/5" 
          />
          <button className="p-2 bg-[#c0876a] text-white rounded-r px-4">
            SUBMIT
          </button>
        </div>
    </div>
  );
};

export default Newsletter;
