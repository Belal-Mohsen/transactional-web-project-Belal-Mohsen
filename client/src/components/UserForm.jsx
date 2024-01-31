import React, { useState, useEffect } from 'react';

const UserForm = ({ user, refreshUsers }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    isNewsletter: false,
    isAdmin: false
  });

  const [message, setMessage] = useState(''); // State for success/error messages
  
  // Update form state when user prop changes
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.fName || '',
        lastName: user.lName || '',
        email: user.email || '',
        isNewsletter: user.newsLetter || false,  // Ensure this key matches your user object structure
        isAdmin: user.isAdmin || false
      });
    }
  }, [user]);  // Dependency array, re-run effect when user changes


  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData, 
      [name]: type === 'checkbox' ? checked : value
    }));
  };

 // Handle form submission
 const handleSubmit = async (e, action) => {
  e.preventDefault();
  setMessage(''); // Clear previous messages

  if (action === 'update' && user && user.uid) {
    try {
      const response = await fetch(`http://localhost:5001/api/user/updateUser/${user.uid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('User updated successfully.');
        refreshUsers(); // Refresh the user list
      } else {
        setMessage(data.message || 'Failed to update user.');
      }
    } catch (error) {
      setMessage('Failed to update user.');
      console.error('Error updating user:', error);
    }
  } else if (action === 'delete' && user && user.uid) {
    try {
      const response = await fetch(`http://localhost:5001/api/user/deleteUser/${user.uid}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('User deleted successfully.');
        refreshUsers(); // Refresh the user list
      } else {
        setMessage(data.message || 'Failed to delete user.');
      }
    } catch (error) {
      setMessage('Failed to delete user.');
      console.error('Error deleting user:', error);
    }
  }

    // Reset form after action
    setFormData({
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
    {/* Message display */}
    {message && (
                <div style={{ marginTop: '20px', color: 'red' }}>
                    {message}
                </div>
            )}
        </div>
    );
};


export default UserForm;
