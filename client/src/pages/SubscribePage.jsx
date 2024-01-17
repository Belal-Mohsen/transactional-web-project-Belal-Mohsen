import React from "react";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Shadow from "../components/Shadow";
import Subscribe from "../components/Subscribe";
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";

const SubscribePage = () => {
  let { state } = useLocation();

  const SubscribeBoxes =
  {
    id: 1,
    name: 'SubscribeBox',
    price: (state.value[2].length * state.value[3].length) * 69,
    image: './images/christmasBox.png'
  };

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addItemToCart({
      id: SubscribeBoxes.id,
      name: SubscribeBoxes.name,
      price: SubscribeBoxes.price,
      image: SubscribeBoxes.image
    }));
    toast.success(`${SubscribeBoxes.name} added to cart!`, {
      position: "top-right",
      autoClose: 1000,
    });
  };
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />
      <NavBar />
      <Shadow />

      <p className="mx-1 mt-6 mb-2 font-inter-semi-bold italic font-semibold text-[#342f19cc] text-[18px] text-center">
        Merely illustrative images
      </p>

      <div className="flex mt-4 items-center justify-center">
        <Subscribe />
      </div>

      <button onClick={() => handleClick()} className="w-full md:w-auto px-6 py-3 bg-[#c0876a] rounded text-black font-bold text-[18px] md:text-[32px] mt-4 mx-auto md:mb-6">
        SUBSCRIBE
      </button>


      <Newsletter />
      <Footer />
      <ToastContainer />

    </div>

  );


};

export default SubscribePage;
