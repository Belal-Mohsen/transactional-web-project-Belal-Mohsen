import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    isNewsletter: false,
    isAdmin: false
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData, 
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e, action) => {
    e.preventDefault();
    if (action === 'update') {
      // Update user logic
    } else if (action === 'delete') {
      // Delete user logic
    }
    // Reset form after action
    setFormData({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      isNewsletter: false,
      isAdmin: false
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#f7f6f2] rounded shadow-md p-6 my-20 border">
      <h2 className="text-2xl font-medium text-[#342f19] mb-4 text-center">User Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="id" className="block text-sm font-medium text-[#342f19]">ID</label>
          <input
            type="text"
            name="id"
            id="id"
            value={formData.id}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-[#342f19]">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-[#342f19]">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#342f19]">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="isNewsletter" className="block text-sm font-medium text-[#342f19]">
            Subscribe to Newsletter
          </label>
          <input
            type="checkbox"
            name="isNewsletter"
            id="isNewsletter"
            checked={formData.isNewsletter}
            onChange={handleChange}
            className="mt-1 block"
          />
        </div>
        <div>
          <label htmlFor="isAdmin" className="block text-sm font-medium text-[#342f19]">
            Is Admin
          </label>
          <input
            type="checkbox"
            name="isAdmin"
            id="isAdmin"
            checked={formData.isAdmin}
            onChange={handleChange}
            className="mt-1 block"
          />
        </div>
        <div className="flex justify-between mt-6">
          <button type="submit" onClick={(e) => handleSubmit(e, 'update')} className="button-hover-effect m-4">Update</button>
          <button type="submit" onClick={(e) => handleSubmit(e, 'delete')} className="button-hover-effect m-4">Delete</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
