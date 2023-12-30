import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";

const EditProfileForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
    });
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                try {
                    const response = await fetch(`/api/user/profile/${firebaseUser.uid}`);
                    if (!response.ok) throw new Error('Failed to fetch user data');
                    const userData = await response.json();
                    setFormData({
                        firstName: userData.fName,
                        lastName: userData.lName,
                        email: userData.email,
                        address: userData.address,
                    });
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        });
        return unsubscribe;
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords(prevPasswords => ({ ...prevPasswords, [name]: value }));
    };

    const handleSaveChanges = async () => {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.address) {
            alert('All fields are required');
            return;
        }
    
        try {
            // Assuming you have the current user's UID available
            const uid = auth.currentUser.uid;
    
            const response = await fetch(`/api/updateUser/${uid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fName: formData.firstName,
                    lName: formData.lastName,
                    email: formData.email,
                    address: formData.address,
                    // Include other fields that need to be updated
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update profile');
            }
    
            alert('Profile updated successfully');
        } catch (error) {
            console.error("Error updating profile:", error);
            alert(error.message || 'Error updating profile');
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
            setPasswords({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
        } catch (error) {
            alert("Failed to update password. Ensure the current password is correct.");
            console.error("Error updating password:", error);
        }
    };

    const handleCancel = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            address: '',
        });
        setPasswords({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    };

    return (

        <div className="max-w-lg m-8 p-4 bg-white shadow-md rounded-md text-[#342f19]">
            <div className='flex flex-col md:flex-row md:gap-8'>
                <label className="block mb-2">
                    First Name
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="block w-full mt-1 p-2 bg-[#f5f5f5] rounded-md"
                        required
                    />
                </label>

                <label className="block mb-2">
                    Last Name
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="block w-full mt-1 p-2 bg-[#f5f5f5] rounded-md"
                        required
                    />
                </label>
            </div>

            <div className='flex flex-col md:flex-row md:gap-8'>
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

                <label className="block mb-2">
                    Address
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                        className="block w-full mt-1 p-2 bg-[#f5f5f5] rounded-md"
                        required
                    />
                </label>
            </div>

            <div className="mt-4 flex flex-col gap-3 md:flex-row justify-end mb-4">
                <button onClick={handleCancel} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Cancel</button>
                <button
                    onClick={handleSaveChanges}
                    className="px-4 py-2 bg-[#c0876a] text-white rounded-md "
                >
                    Save Changes
                </button>
            </div>

            <label className="block mb-2">
                Password Changes
                <div>
                    <input
                        type="password"
                        name="currentPassword"
                        placeholder="Current Password"
                        value={passwords.currentPassword}
                        onChange={handlePasswordChange}
                        className="block w-full mt-1 p-2 bg-[#f5f5f5] rounded-md"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        value={passwords.newPassword}
                        onChange={handlePasswordChange}
                        className="block w-full mt-1 p-2 rounded-md bg-[#f5f5f5]"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="confirmNewPassword"
                        placeholder="Confirm New Password"
                        value={passwords.confirmNewPassword}
                        onChange={handlePasswordChange}
                        className="block w-full mt-1 p-2 bg-[#f5f5f5] rounded-md"
                        required
                    />
                </div>
            </label>
            <div className="mt-4 flex flex-col gap-3 md:flex-row justify-end">
                <button
                    onClick={handlePasswordUpdate}
                    className="px-4 py-2 bg-[#c0876a] text-white rounded-md "
                >
                    Update Password
                </button>
            </div>
            
        </div>
    );
};

export default EditProfileForm;