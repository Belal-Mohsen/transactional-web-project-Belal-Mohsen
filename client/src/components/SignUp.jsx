import React, { useState } from "react";
import Notification from "./Notification";
import { auth, app } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      setNotification("Passwords do not match.");
      return;
    }

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log('Registration successful:', user);
        navigate('/login');
        // TODO: redirect to another page or handle user data
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error occurred:", error);
        setNotification("Registration failed. Please try again.");
      });
  };

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-20 py-10">
      <div className="w-full max-w-md bg-[#f7f6f2] rounded border shadow-md p-6">
        <h2 className="text-2xl font-medium text-[#342f19] mb-4 text-center">SIGN UP</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fName"
            placeholder="First Name"
            className="w-full p-2 border rounded"
            value={formData.fName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lName"
            placeholder="Last Name"
            className="w-full p-2 border rounded"
            value={formData.lName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 border rounded"
            value={formData.confirmPassword}
            onChange={handleInputChange}
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
      <Notification message={notification} onClose={() => setNotification('')} />
    </div>
  );
};

export default SignUp;
