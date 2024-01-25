import React, { useState } from 'react';

const BoxForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    image: null
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  // Handle image file change
  const handleImageChange = (e) => {
    setFormData(prevFormData => ({ ...prevFormData, image: e.target.files[0] }));
  };

  // Handle form submission
  const handleSubmit = (e, action) => {
    e.preventDefault();
    if (action === 'add') {
      // Add box logic
    } else if (action === 'update') {
      // Update box logic
    } else if (action === 'delete') {
      // Delete box logic
    }
  
    // Reset form after action
    setFormData({
      id: '',
      name: '',
      price: '',
      image: null
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#f7f6f2] rounded shadow-md p-6 my-10 border">
      <h2 className="text-2xl font-medium text-[#342f19] mb-4 text-center">Box Form</h2>
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
          <label htmlFor="name" className="block text-sm font-medium text-[#342f19]">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-[#342f19]">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-[#342f19]">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="flex justify-between mt-6">
          <button onClick={(e) => handleSubmit(e, 'add')} className="button-hover-effect m-4">Add</button>
          <button onClick={(e) => handleSubmit(e, 'update')} className="button-hover-effect m-4">Update</button>
          <button onClick={(e) => handleSubmit(e, 'delete')} className="button-hover-effect m-4">Delete</button>
        </div>
      </form>
    </div>
  );
};

export default BoxForm;
