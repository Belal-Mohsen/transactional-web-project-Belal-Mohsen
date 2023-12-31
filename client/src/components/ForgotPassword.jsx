import React, { useState } from "react";
import { auth } from '../firebase';
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [loginData, setLoginData] = useState({
    email: ''
  });

  const changePassword = (event) => {
    event.preventDefault(); // Prevent default form submission

    sendPasswordResetEmail(auth, loginData.email)
      .then(() => {
        alert("Password Reset Email Sent!");
      })
      .catch((error) => {
        alert(error.message); // Display error message
      });
  }

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-20 py-10">
      <div className="w-full max-w-md bg-[#f7f6f2] rounded border shadow-md p-6">
        <h2 className="text-2xl font-medium text-[#767676] mb-4 text-center">
          Forgot Password
        </h2>
        <h3 className="text-[#767676] mb-4 text-center">Enter your email and we'll send you a link to reset your password.</h3>
        <form className="space-y-4" onSubmit={changePassword}>
          <input
            type="email" // Change to 'email' type
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />
          <div className="flex justify-center">
            <button
              type="submit" // Change to 'submit' type
              className="w-full bg-[#c0876a] text-white rounded py-2 mt-4"
            >
              Send Email
            </button>
          </div>
          <p className="text-[#c0876a] text-[13px] text-center">
            <a href="/login" className="underline">Back to Log In Page</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
