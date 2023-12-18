import React from 'react'
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Shadow from "../components/Shadow";
import Footer from "../components/Footer";
import EditProfileForm from '../components/EditProfileForm';
import Newsletter from '../components/Newsletter';
import ChatBot from '../components/ChatBot';

const MyAccountPage = ({ username = "test" }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />
      <NavBar />
      <Shadow />

      <div className="flex flex-col flex-grow">

        <div className="flex justify-end p-4">
          Welcome Back, <span className='text-red-600 ml-1'>{username}!</span>
        </div>

        <div className='flex flex-col md:flex-row md:ml-64 md:gap-10'>
          <div className="flex flex-col p-4">
            <a href="/myaccount" className="underline mb-2 font-semibold text-[#342f19]">
              Manage Your Account
            </a>
            <a href="/subscribe" className="mb-4 font-semibold text-[#342f19]">
              Manage Your Subscription
            </a>
          </div>

          <div className="flex flex-col p-4 ">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#342f19]">Edit Your Profile</h2>
            <EditProfileForm />
          </div>
        </div>

      </div>
      <ChatBot />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default MyAccountPage