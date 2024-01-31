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
import axios from 'axios';
import { useSelector } from 'react-redux';


const SubscribePage = () => {

  const user = useSelector(state => state.auth.user);

  const imageMapToApi = {
    1: "Farm",
    2: "Coastal",
    3: "Minimalist",
    4: "Dining",
    5: "Living",
    6: "Kitchen",
    7: "New Year's Eve",
    8: "Valentine's Day",
    9: "St. Patrick's Day",
    10: "Easter",
    11: "Thanksgiving",
    12: "Halloween",
    13: "Christmas",
    14: "Blue",
    15: "Green",
    16: "Orange",
    17: "Gray",
    18: "Pink",
    19: "Purple",
    20: "Red",
  };

  let { state } = useLocation();

  const mapValues = (values, mapping) => {
    return values?.map(item => mapping[item]) || [];
  };

  const subscriptionData = {
    style: imageMapToApi[state.value[1]],
    area: mapValues(state.value[2], imageMapToApi),
    holidays: mapValues(state.value[3], imageMapToApi),
    color: imageMapToApi[state.value[4]],
    date: new Date()
  };

  const updateUserSubscription = async (uid, subscriptionData) => {
    try {
      const response = await axios.put(`/api/user/updateUser/${uid}`, {
        subscription: subscriptionData
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating subscription:", error);
      throw error;
    }
  };

  const SubscribeBoxes =
  {
    id: 1,
    name: 'SubscribeBox',
    price: (state.value[2].length * state.value[3].length) * 69,
    image: './images/christmasBox.png'
  };

  const dispatch = useDispatch();
  const handleClick = () => {

    updateUserSubscription(user.uid, subscriptionData)
      .then(data => console.log("Subscription updated:", data))
      .catch(err => console.error(err));

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
