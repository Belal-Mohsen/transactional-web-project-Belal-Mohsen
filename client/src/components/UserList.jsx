import React from 'react';

const UserList = ({ users, onSelectItem }) => {
  // Provide a default empty array if users is undefined
  const safeUsers = users || [];

  return (
    <div className="overflow-y-auto max-h-96 border border-gray-300 rounded-md shadow-sm my-4">
      {safeUsers.map((user) => (
        <div
          key={user.uid}
          onClick={() => onSelectItem(user)}
          className="p-4 hover:bg-gray-100 cursor-pointer border-b border-gray-300"
        >
          <p className="text-gray-600">First Name: {user.fName}</p>
          <p className="text-gray-600">Last Name: {user.lName}</p>
          <p className="text-gray-600">Email: {user.email}</p>
          {/* Add other user details if needed */}
        </div>
      ))}
    </div>
  );
};

export default UserList;
