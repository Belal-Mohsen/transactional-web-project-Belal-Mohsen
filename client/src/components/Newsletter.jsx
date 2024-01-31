import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // For showing response messages
  const { t } = useTranslation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(""); // Clear any previous message

    try {
      // Replace 'your-api-endpoint' with your actual newsletter subscription API endpoint
      const response = await axios.post('/api/your-api-endpoint', { email });
      setEmail(""); // Clear the email field after successful submission

      // Show success message
      setMessage("Thank you for subscribing!");
    } catch (error) {
      // Error handling
      setMessage("An error occurred. Please try again later.");
      console.error("Newsletter subscription error:", error);
    }
  };

  return (
    <div className="w-full bg-[#f7eade] text-center py-6">
      <p className="font-semibold text-lg text-[#342f19cc]">
      {t("signUpUpdatesTitle")}
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex justify-center items-center">
        <input
          type="email"
          placeholder= {t("signUpUpdatesEmail")}
          className="p-2 border rounded-l mr-6 w-1/5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="p-2 bg-[#c0876a] text-white rounded-[5px] px-4">
        {t("signUpUpdatesSubmitButton")}
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>} {/* Display response message */}
    </div>
  );
};

export default Newsletter;
