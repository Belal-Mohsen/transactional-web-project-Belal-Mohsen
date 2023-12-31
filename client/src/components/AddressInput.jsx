// AddressInput.js
import React, { useState } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';

const AddressInput = ({ accessToken, onAddressSelect }) => {
    const [address, setAddress] = useState('');

    const handleRetrieve = (res) => {
        const feature = res.features[0];
        setAddress(feature.place_name);
        onAddressSelect(feature.place_name);
    };

    return (
        <AddressAutofill accessToken={accessToken} onRetrieve={handleRetrieve}>
            <input
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="block w-full mt-1 p-2 bg-[#f5f5f5] rounded-md"
            />
        </AddressAutofill>
    );
};

export default AddressInput;