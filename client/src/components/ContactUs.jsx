import React, {useState, useRef} from "react";
import emailjs from 'emailjs-com';
import '../index.css';

const ContactUs = () => {

  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0e5uiz9', 'template_kfshyvq', form.current, 'qcOvreJhM51DKvHGV')
        .then((result) => {
            console.log(result.text);
            alert('Your message has been sent successfully!');
            form.current.reset();
            setTimeout(() => setMessage(''), 5000);
        }, (error) => {
            console.log(error.text);
            alert("Failed to send the email, please try again.");
            setTimeout(() => setMessage(''), 5000);
        });
};

        return (
            <div className="w-full max-w-2xl mx-auto bg-[#f7f6f2] rounded shadow-md p-6 my-10 border">
              <h2 className="text-2xl font-medium text-[#342f19] mb-4 text-center">
                CONTACT US
             </h2>
             <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#342f19]">
                      First Name <span className="text-[#d15d1c]">*</span>
                    </label>
                    <input
                      type="text"
                      name="first_name" 
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
                      name="last_name"
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
                    name="email"
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
                    name="message"
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="button-hover-effect"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
  );
};

export default ContactUs;
