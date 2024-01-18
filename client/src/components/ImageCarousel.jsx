import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const images = [
  "./images/image1.png",
  "./images/image2.png",
  "./images/image3.png",
  "./images/image4.png",
  "./images/image5.png",
  "./images/image6.png",
  "./images/image7.png",
  "./images/image8.png",
  "./images/image9.png",
];

const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <FaChevronCircleRight color="#E7D5CA" />,
    prevArrow: <FaChevronCircleLeft color="#E7D5CA" />,
  };

  const { t } = useTranslation();
  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold text-center mb-4">
        <span
          style={{ fontFamily: "'Inria Serif', Helvetica", color: "#342f19" }}
        >
          {t("imageCarouselTitlePrevious")}
        </span>{" "}
        <span
          style={{
            fontFamily: "italianno, Helvetica, sans-serif",
            color: "#7d5844",
            fontSize: "48px",
          }}
        >
          {t("imageCarouselTitleBoxes")} 
        </span>
      </h2>

      <Slider {...settings}>
        {images.map((image, idx) => (
          <div key={idx} className="px-3">
            <img className="rounded-10 w-full h-auto" src={image} alt={`Slide ${idx}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
