import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import CircularProgress from "@mui/material/CircularProgress";
import {
  onAuthStateChanged,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import AddressInput from "./AddressInput"; // Ensure this path is correct
import { convertLength } from "@mui/material/styles/cssUtils";

const EditProfileForm = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    address: "",
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [mapboxToken, setMapboxToken] = useState(
    process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setLoading(true);
        try {
          const response = await fetch(`/user/profile/${firebaseUser.uid}`);
          if (!response.ok) throw new Error("Failed to fetch user data");
          const userData = await response.json();
          console.log("Received data:", userData);
          setFormData({
            fName: userData.data.fName,
            lName: userData.data.lName,
            email: userData.data.email,
            address: userData.data.address,
          });
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      }
    });
    return unsubscribe;
  }, [mapboxToken]);

  const handleAddressSelect = (selectedAddress) => {
    setFormData({ ...formData, address: selectedAddress });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prevPasswords) => ({ ...prevPasswords, [name]: value }));
  };

  const handleSaveChanges = async () => {
    const uid = auth.currentUser.uid;
    const updateData = {};

    if (formData.fName) {
      updateData.fName = formData.fName;
    }

    if (formData.lName) {
      updateData.lName = formData.lName;
    }

    if (formData.email) {
      updateData.email = formData.email;
    }

    if (formData.address) {
      updateData.address = formData.address;
    }

    try {
      const response = await fetch(`/user/updateUser/${uid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile");
      }

      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert(error.message, "Error updating profile");
    }
  };

  const handlePasswordUpdate = async () => {
    if (passwords.newPassword !== passwords.confirmNewPassword) {
      alert("New passwords do not match");
      return;
    }

    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      passwords.currentPassword
    );

    try {
      await reauthenticateWithCredential(auth.currentUser, credential);
      await updatePassword(auth.currentUser, passwords.newPassword);
      alert("Password updated successfully");
      setPasswords({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch (error) {
      alert(
        "Failed to update password. Ensure the current password is correct."
      );
      console.error("Error updating password:", error);
    }
  };

  const handleCancel = () => {
    setFormData({
      fName: "",
      lName: "",
      email: "",
      address: "",
    });
    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="max-w-lg m-8 p-4 bg-white shadow-md rounded-md text-[#342f19]">
          <form>
            <div className="flex flex-col md:flex-row md:gap-8">
              {/* First Name */}
              <label className="block mb-2">
                First Name
                <input
                  type="text"
                  name="fName"
                  placeholder="Enter your first name"
                  value={formData.fName}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 bg-[#f5f5f5] rounded-md"
                  required
                />
              </label>

              {/* Last Name */}
              <label className="block mb-2">
                Last Name
                <input
                  type="text"
                  name="lName"
                  placeholder="Enter your last name"
                  value={formData.lName}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 bg-[#f5f5f5] rounded-md"
                  required
                />
              </label>
            </div>

            <div className="flex flex-col md:flex-row md:gap-8">
              {/* Email */}
              <label className="block mb-2">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 bg-[#f5f5f5] rounded-md"
                  required
                />
              </label>

              {/* Address */}
              <label className="block mb-2">
                Address
                <AddressInput
                  accessToken={mapboxToken}
                  onAddressSelect={handleAddressSelect}
                />
              </label>
            </div>

            <div className="mt-4 flex flex-col gap-3 md:flex-row justify-end">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                type="submit"
                className="px-4 py-2 bg-[#c0876a] text-white rounded-md "
              >
                Save Changes
              </button>
            </div>

            <div className="mt-4">
              {/* Password Changes */}
              <label className="block mb-2">
                Current Password
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  value={passwords.currentPassword}
                  onChange={handlePasswordChange}
                  className="block w-full mt-1 p-2 bg-[#f5f5f5] rounded-md"
                  required
                />
              </label>

              <label className="block mb-2">
                New Password
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                  className="block w-full mt-1 p-2 bg-[#f5f5f5] rounded-md"
                  required
                />
              </label>

              <label className="block mb-2">
                Confirm New Password
                <input
                  type="password"
                  name="confirmNewPassword"
                  placeholder="Confirm New Password"
                  value={passwords.confirmNewPassword}
                  onChange={handlePasswordChange}
                  className="block w-full mt-1 p-2 bg-[#f5f5f5] rounded-md"
                  required
                />
              </label>
            </div>

            <div className="mt-4 flex flex-col gap-3 md:flex-row justify-end">
              <button
                onClick={handlePasswordUpdate}
                className="px-4 py-2 bg-[#c0876a] text-white rounded-md "
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditProfileForm;
