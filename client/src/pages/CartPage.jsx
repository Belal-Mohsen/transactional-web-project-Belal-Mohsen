import React, { useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Shadow from "../components/Shadow";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import CartItem from "../components/CartItem";
import axios from 'axios';

const CartPage = () => {

  const [cartItems, setCartItems] = useState([
    // TODO: implement the real implementation
    // Dummy Data for testing
    { id: 1, name: 'Item 1', image: "./images/image1.png", quantity: 2, price: 10 },
    { ide: 2, name: 'Item 2', image: "./images/image1.png", quantity: 5, price: 20 },

  ]);

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51OTGT4EF5hvjq3vbnyUWgXON5tKfLqE8CkyNpkWxCelaYZPzlMsTt7gexLdPuyQCne9z1VjrMctBcYD8wdZKumlA00DPu8cXGj");
    const body = {
      product: cartItems
    }

    try {
      const response = await axios.post("/checkout-session", body, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      const session = response.data;
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error("Error during the checkout process", error);
    }
  }

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

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />
      <NavBar />
      <Shadow />
      <div className="bg-white flex flex-col justify-center items-center w-full flex-grow mt-6">
        <h1 className='font-semibold text-xl mb-4'>Shopping cart</h1>
        {totalItems === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className='flex w-full justify-center md:justify-end md:px-32 mb-4'>
            <p>You have {totalItems} item(s) in your cart</p>
          </div>
        )}

        {totalItems > 0 && (
          <div className='w-full'>
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item}
                onIncrease={() => handleIncrease(item.id)}
                onDecrease={() => handleDecrease(item.id)}
                onDelete={() => handleDelete(item.id)}
              />
            ))}
          </div>
        )}

        {totalItems > 0 && (

          <div className='flex flex-col md:flex-row w-full md:px-32 px-4 justify-between mt-4'>

            <div className='flex flex-col md:flex-row items-start'>
              <input
                className='border p-2 rounded-md border-black mr-4'
                placeholder='Coupon Code'
              />
              <button
                className="px-4 my-2 md:my-0 py-2 bg-[#c0876a] text-white rounded-md"
              >
                Apply Coupon
              </button>
            </div>

            <div className='flex flex-col border border-gray-400/25 rounded-md mb-4'>
              <p className='mx-3 my-8 text-lg'>Cart Total</p>
              <div className='flex justify-between m-4'> <p className='md:mr-72'>Subtotal: </p> <p className='mr-6'>${totalPrice}</p></div>
              <div className='mx-4 border-b border-gray-500'></div>
              <div className='flex justify-between m-4'> <p className='md:mr-72'>Shipping: </p> <p className='mr-6'>Free</p></div>
              <div className='mx-4 border-b border-gray-500'></div>
              <div className='flex justify-between m-4'> <p className='md:mr-72'>Total: </p> <p className='mr-6'>${totalPrice}</p></div>

              <div className='flex justify-center justify-items-center mb-6'>
                <button
                  className="px-4 py-2 bg-[#c0876a] text-white rounded-md w-1/2"
                  onClick={makePayment}
                >
                  CheckOut
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CartPage;