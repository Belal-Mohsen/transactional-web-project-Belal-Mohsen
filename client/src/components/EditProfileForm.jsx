import React, { useState } from 'react';

const EditProfileForm = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSaveChanges = () => {
        if (
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.address &&
            formData.currentPassword &&
            formData.newPassword &&
            formData.confirmNewPassword
        ) {
            // TODO: will be implemented later with MangoDB
            console.log('Saving changes:', formData);
        }
        else {
            alert('All fields are required');
        }
    };

    const handleCancel = () => {
        setFormData(initialFormData);
    };

    return (

        <div className="max-w-lg m-8 p-4 bg-white shadow-md rounded-md">
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
            <label className="block mb-2">
                Password Changes
                <div>
                    <input
                        type="password"
                        name="currentPassword"
                        placeholder="Current Password"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        className="block w-full mt-1 p-2 bg-[#f5f5f5] rounded-md"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="block w-full mt-1 p-2 rounded-md bg-[#f5f5f5]"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="confirmNewPassword"
                        placeholder="Confirm New Password"
                        value={formData.confirmNewPassword}
                        onChange={handleChange}
                        className="block w-full mt-1 p-2 bg-[#f5f5f5]rounded-md"
                        required
                    />
                </div>
            </label>

            <div className="mt-4 flex flex-col gap-3 md:flex-row justify-end">
                <button onClick={handleCancel} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Cancel</button>
                <button
                    onClick={handleSaveChanges}
                    className="px-4 py-2 bg-[#c0876a] text-white rounded-md "
                >
                    Save Changes
                </button>

            </div>
        </div>
    );
};

export default EditProfileForm;