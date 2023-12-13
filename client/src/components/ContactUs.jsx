import React from "react";

const ContactUs = () => {
        return (
            <div className="w-full max-w-2xl mx-auto bg-[#f7f6f2] rounded shadow-md p-6 my-10 border">
              <h2 className="text-2xl font-medium text-[#342f19] mb-4 text-center">
                CONTACT US
             </h2>
              <form className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#342f19]">
                      First Name <span className="text-[#d15d1c]">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#342f19]">
                      Last Name <span className="text-[#d15d1c]">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#342f19]">
                    Email <span className="text-[#d15d1c]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#342f19]">
                    Message <span className="text-[#d15d1c]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#c0876a] text-white rounded py-2 mt-4"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
  );
};

export default ContactUs;
