import React from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import PropTypes from 'prop-types';
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const {
    addToCart,
    removeFromCart,
    deleteFromCart,
    getItemQuantity
  } = React.useContext(CartContext);

  const quantity = getItemQuantity(item.id);

  return (
    <div className="bg-white rounded-[20px] shadow-md p-4 mb-4 flex  items-center justify-between md:mx-32">

      <div className="flex  items-center">
        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover mr-8" />
        <div>
          <p className="text-md font-semibold">{item.name}</p>
        </div>
      </div>

      <div className="flex items-center">
        <span className="mx-2">{quantity}</span>
        <div className='flex flex-col items-center'>
          <button onClick={() => addToCart(item.id)}><IoMdArrowDropup className='text-2xl' /></button>
          <button onClick={() => removeFromCart(item.id)} disabled={quantity === 1}><IoMdArrowDropdown className='text-2xl' /></button>
        </div>


      </div>

      <div className="flex items-center">
        <p className="text-md font-medium md:mx-16">${item.price}</p>
        <button onClick={() => deleteFromCart(item.id)} className="md:mx-16">
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
