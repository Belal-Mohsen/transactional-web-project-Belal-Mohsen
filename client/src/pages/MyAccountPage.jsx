import React, { useState } from "react";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Shadow from "../components/Shadow";
import Footer from "../components/Footer";
import EditProfileForm from '../components/EditProfileForm';
import Newsletter from '../components/Newsletter';
import { useSelector } from 'react-redux';
import { userSignOut } from '../utils/authUtils';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Notification from "../components/Notification";


const MyAccountPage = () => {
  // Access the user data from the Redux store
  const user = useSelector(state => state.auth.user);
  const username = user ? user.displayName || user.email : "Guest";
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    userSignOut(navigate, dispatch);
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to permanently delete your account? This action cannot be undone.")) {
      deleteAccount();
    }
  }

  const deleteAccount = async () => {
    try {
      const response = await fetch(`/api/user/deleteUser/${user.uid}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Account deleted successfully', data);
        setNotification('Account deleted successfully');
        userSignOut(navigate, dispatch);
        navigate('/');
      } else {
        console.error('Failed to delete account', data.message);
        setNotification('Failed to delete account');
      }
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  }

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
            <button onClick={handleDeleteAccount} className="px-4 py-2 bg-red-700 text-white rounded-md mb-4">Delete Account</button>
            <button onClick={handleSignOut} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Sign Out</button>
          </div>

          <div className="flex flex-col p-4 ">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#342f19]">Edit Your Profile</h2>
            <EditProfileForm />
          </div>
        </div>

      </div>
      <Newsletter />
      <Footer />
      <Notification message={notification} onClose={() => setNotification('')} />
    </div>
  )
}

export default MyAccountPage