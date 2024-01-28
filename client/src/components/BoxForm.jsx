import React, { useState, useEffect } from 'react';

const BoxForm = ({ box, refreshBoxes }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: null
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (box) {
      setFormData({
        name: box.name || '',
        price: box.price || '',
        image: box.image || null
      });
    } else {
      // Reset form if no box is selected
      setFormData({
        name: '',
        price: '',
        image: null
      });
    }
  }, [box]);

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
  const handleSubmit = async (e, action) => {
    e.preventDefault();
    setMessage('');

    // Example for the update operation
const url = action === 'add'
? 'http://localhost:5001/api/addbox'
: action === 'update'
? `http://localhost:5001/api/box/updatebox/${box?._id}`  // Use box._id
: `http://localhost:5001/api/box/deletebox/${box?._id}`;  // Use box._id

    const options = {
      method: action === 'add' || action === 'update' ? 'POST' : 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: action === 'add' || action === 'update' ? JSON.stringify(formData) : undefined,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        const successMessage = action === 'add' ? 'Box added successfully.' : action === 'update' ? 'Box updated successfully.' : 'Box deleted successfully.';
        setMessage(successMessage);
        refreshBoxes(); // Refresh the box list
      } else {
        setMessage(data.message || `Failed to ${action} box.`);
      }
    } catch (error) {
      const errorMessage = `Failed to ${action} box.`;
      setMessage(errorMessage);
      console.error(errorMessage, error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#f7f6f2] rounded shadow-md p-6 my-10 border">
      <h2 className="text-2xl font-medium text-[#342f19] mb-4 text-center">Box Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
      {/* Message display */}
      {message && (
        <div style={{ marginTop: '20px', color: 'red' }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default BoxForm;
