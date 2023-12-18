import React from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import PropTypes from 'prop-types';

const CartItem = ({ item, onIncrease, onDecrease, onDelete }) => {
  const { name, image, quantity, price } = item;

  return (
    <div className="bg-white rounded-[20px] shadow-md p-4 mb-4 flex  items-center justify-between md:mx-32">

      <div className="flex  items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-lg object-cover mr-8" />
        <div>
          <p className="text-md font-semibold">{name}</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="mx-2">{quantity}</span>
        <div className='flex flex-col items-center'>
          <button onClick={onIncrease}><IoMdArrowDropup className='text-2xl' /></button>
          <button onClick={onDecrease} disabled={quantity === 1}><IoMdArrowDropdown className='text-2xl' /></button>
        </div>


      </div>

      <div className="flex items-center">
        <p className="text-md font-medium md:mx-16">${price}</p>
        <button onClick={onDelete} className="md:mx-16">
          <FaRegTrashCan className='text-2xl' />
        </button>
      </div>

    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
