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
  setMessage(''); // Clear previous messages

  if (action === 'update' && box && box._id) {
    try {
      const response = await fetch(`http://localhost:5001/api/box/updatebox/${box._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Box updated successfully.');
        refreshBoxes(); // Refresh the box list
      } else {
        setMessage(data.message || 'Failed to update box.');
      }
    } catch (error) {
      setMessage('Failed to update box.');
      console.error('Error updating box:', error);
    }
  } else if (action === 'delete' && box && box._id) {
    try {
      const response = await fetch(`http://localhost:5001/api/box/deletebox/${box._id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Box deleted successfully.');
        refreshBoxes(); // Refresh the box list
      } else {
        setMessage(data.message || 'Failed to delete box.');
      }
    } catch (error) {
      setMessage('Failed to delete box.');
      console.error('Error deleting box:', error);
    }
  } else if (action === 'add') {
    try {
      const response = await fetch('http://localhost:5001/api/box/addbox', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Box added successfully.');
        refreshBoxes(); // Refresh the box list
      } else {
        setMessage(data.message || 'Failed to add box.');
      }
    } catch (error) {
      setMessage('Failed to add box.');
      console.error('Error adding box:', error);
    }
  }

  // Reset form after action
  setFormData({
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
