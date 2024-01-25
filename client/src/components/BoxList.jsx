import React from 'react';

const BoxList = ({ boxes, onSelectItem }) => {
  // Provide a default empty array if boxes is undefined
  const safeBoxes = boxes || [];

  return (
    <div className="overflow-y-auto max-h-96 border border-gray-300 rounded-md shadow-sm my-4">
      {safeBoxes.map((box) => (
        <div
          key={box.id}
          onClick={() => onSelectItem(box)}
          className="p-4 hover:bg-gray-100 cursor-pointer border-b border-gray-300"
        >
          <p className="font-medium text-gray-700">ID: {box.id}</p>
          <p className="text-gray-600">Name: {box.name}</p>
          <p className="text-gray-600">Price: {box.price}</p>
          {/* Display more box details if needed */}
        </div>
      ))}
    </div>
  );
};

export default BoxList;
