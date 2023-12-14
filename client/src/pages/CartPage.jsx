import React, { useState } from 'react';
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Shadow from "../components/Shadow";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import CartItem from "../components/CartItem";

const CartPage = () => {

  const [cartItems, setCartItems] = useState([
    // TODO: implement the real implementation
    // Dummy Data for testing
    { id: 1, name: 'Item 1', image: "./images/image1.png", quantity: 2, price: 10 },
    { ide: 2, name: 'Item 2', image: "./images/image1.png", quantity: 1, price: 20 },

  ]);

  const handleIncrease = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedCart);
  };

  const handleDecrease = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: Math.max(1, item.quantity - 1) };
      }
      return item;
    });

    setCartItems(updatedCart);
  };


  const handleDelete = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />
      <NavBar />
      <Shadow />
      <div className="bg-white flex flex-col justify-center items-center w-full flex-grow mt-6">
        <h1 className='font-semibold text-xl mb-4'>Shopping cart</h1>
        <div className='flex w-full justify-end px-32 mb-4'>
          <p>You have {3} item(s) in your cart</p>
        </div>

        <div className='w-full'>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item}
              onIncrease={() => handleIncrease(item.id)}
              onDecrease={() => handleDecrease(item.id)}
              onDelete={() => handleDelete(item.id)}
            />
          ))}
        </div>

        <div className='flex w-full px-32 justify-between mt-4'>

          <div className='flex items-start'>
            <input
              className='border p-2 rounded-md border-black mr-4'
              placeholder='Coupon Code'
            />
            <button
              className="px-4 py-2 bg-[#c0876a] text-white rounded-md"
            >
              Apply Coupon
            </button>
          </div>

          <div className='flex flex-col border border-gray-400/25 rounded-md mb-4'>
            <p className='mx-3 my-8 text-lg'>Cart Total</p>
            <div className='flex justify-between m-4'> <p className='mr-72'>Subtotal: </p> <p className='mr-6'>${ }</p></div>
            <div className='mx-4 border-b border-gray-500'></div>
            <div className='flex justify-between m-4'> <p className='mr-72'>Shipping: </p> <p className='mr-6'>Free</p></div>
            <div className='mx-4 border-b border-gray-500'></div>
            <div className='flex justify-between m-4'> <p className='mr-72'>Total: </p> <p className='mr-6'>${ }</p></div>

            <div className='flex justify-center justify-items-center mb-6'>
              <button
                className="px-4 py-2 bg-[#c0876a] text-white rounded-md w-1/2"
              >
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CartPage;