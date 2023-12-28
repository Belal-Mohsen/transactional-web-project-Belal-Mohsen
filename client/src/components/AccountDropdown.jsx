import React from 'react';
import { Link } from "react-router-dom";

const AccountDropdown = ({ isLoggedIn, handleLogout }) => {
    return (
        <div className="absolute right-0 bg-black border mt-2 py-1 w-48">
            {!isLoggedIn ? (
                <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</Link>
            ) : (
                <>
                    <Link to="/myaccount" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</Link>
                    <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Logout</button>
                </>
            )}
        </div>
    );
};

export default AccountDropdown;
