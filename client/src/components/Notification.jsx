import React from 'react';

const Notification = ({ message, onClose }) => {
    if (!message) return null;

    return (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50">
            <div className="relative bg-black bg-opacity-75 text-white py-3 px-6 border border-gray-700 rounded shadow-md max-w-lg mx-auto">
                <p className="text-center text-sm md:text-lg">{message}</p>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-transparent text-xl leading-none font-semibold outline-none focus:outline-none"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default Notification;
