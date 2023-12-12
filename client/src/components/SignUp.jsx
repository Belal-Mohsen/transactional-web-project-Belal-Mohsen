import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center w-full px-4 md:px-20 py-10">
      <div className="w-full max-w-md bg-[#f7f6f2] rounded border shadow-md p-6">
        <h2 className="text-2xl font-medium text-[#342f19] mb-4 text-center">
          SIGN UP
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 border rounded"
          />
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span>
              Accept{" "}
              <a href="#" className="underline text-[#c0876a]">
                Terms & Conditions
              </a>
            </span>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/3 bg-[#c0876a] text-white rounded py-2 mt-4"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
