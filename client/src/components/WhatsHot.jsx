import React from 'react';
import { PiShoppingCartDuotone } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";

const WhatsHot = () => {
  const { t } = useTranslation();

  const holidayBoxes = [
    {
      id: 1,
      name: t("christmasBoxProductName"),
      price: '69',
      discount: '55',
      image: './images/christmasBox.png'
    },
    {
      id: 2,
      name: t("newYearBoxProductName"),
      price: '69',
      image: './images/newyearBox.png'
    },
    {
      id: 3,
      name: t("valentineBoxProductName"),
      price: '69',
      image: './images/valentineBox.png'
    }
  ];

  const dispatch = useDispatch();

  const handleClick = (holidayBox) => {
    dispatch(addItemToCart({
      id: holidayBox.id,
      name: holidayBox.name,
      price: holidayBox.discount || holidayBox.price,
      image: holidayBox.image
    }));
    toast.success(`${holidayBox.name} added to cart!`, {
      position: "top-right",
      autoClose: 1000,
    });
  };


  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex-grow text-center">
          <h2 className="[font-family:'Inria_Serif',Helvetica] text-2xl font-bold">
          {t("whatsHotTitle")}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {holidayBoxes.map((holidayBox) => (
          <div className="max-w-sm mx-auto overflow-hidden">
            <img
              src={holidayBox.image}
              alt={holidayBox.name}
              className="w-full border-2 border-[#C0876A] border-[6px] rounded-[5px] "
            />
            <div className="flex justify-between items-center p-4 bg-white">
              <div>
                <h2 className="text-l font-bold [font-family:'Inria_Serif',Helvetica]">
                  {holidayBox.name}
                </h2>
                <p className="text-[16px] font-light text-gray-600">
                {t("fromPriceLabel")} {holidayBox.discount ? (
                    <>
                      {' '}
                      <span className="text-red-600 line-through">
                        {holidayBox.price}
                      </span>{' '}
                      <span className="text-green-600">
                        {holidayBox.discount}
                      </span>
                    </>
                  ) : (
                    holidayBox.price
                  )}
                </p>
              </div>
              <button onClick={() => handleClick(holidayBox)}>
                <PiShoppingCartDuotone color="#7d5844" className="w-6 h-7" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default WhatsHot;