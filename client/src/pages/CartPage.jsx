import React from 'react';
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Shadow from "../components/Shadow";
import Footer from "../components/Footer";
import Newsletter from '../components/Newsletter';

const CartPage = () => {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />
      <NavBar />
      <Shadow />
      <div className="bg-white flex flex-row justify-center w-full">
        test
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CartPage;