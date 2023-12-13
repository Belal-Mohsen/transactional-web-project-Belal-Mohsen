import React from "react";

const Questionnaire = () => {
  return (
    <div className="flex flex-wrap w-full max-w-[508px] mx-auto mt-4">
      {/* First block - Top left */}
      <div className="w-full md:w-2/4 text-center mb-4 md:mb-0">
        <span className="text-stone-800 text-xl font-bold font-['Inter'] leading-tight block">
          Question 1/4
        </span>
        <span className="text-stone-800 text-xl font-medium font-['Inter'] leading-tight block">
          Which image best captures your decorating style?
        </span>
        <div className="flex justify-between mt-4">
          <img
            className="w-[154px] h-[203px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[200px]"
            src="./images/Subscribe_img1.png"
            alt="Image 1"
          />
          <img
            className="w-[168px] h-[198px] md:w-[168px] md:h-[198px] lg:w-[168px] lg:h-[198px]"
            src="./images/Subscribe_img2.png"
            alt="Image 2"
          />
          <img
            className="w-[146px] h-[200px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[200px]"
            src="./images/Subscribe_img3.png"
            alt="Image 3"
          />
        </div>
      </div>

      {/* Second block - Top right */}
      <div className="w-full md:w-3/4 text-center">
        <span className="text-stone-800 text-xl font-bold font-['Inter'] leading-tight block">
          Question 2/4
        </span>
        <span className="text-stone-800 text-xl font-medium font-['Inter'] leading-tight block">
          Which area of the home are you decorating?
        </span>
        <div className="flex justify-between mt-4">
          <img
            className="w-[154px] h-[203px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[200px]"
            src="./images/Subscribe_img4.png"
            alt="Image 4"
          />
          <img
            className="w-[168px] h-[198px] md:w-[168px] md:h-[198px] lg:w-[168px] lg:h-[198px]"
            src="./images/Subscribe_img5.png"
            alt="Image 5"
          />
          <img
            className="w-[146px] h-[200px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[200px]"
            src="./images/Subscribe_img6.png"
            alt="Image 6"
          />
        </div>
      </div>

      {/* Third block - Below first block */}
      <div className="w-full text-center mt-4">
        <span className="text-stone-800 text-xl font-bold font-['Inter'] leading-tight block">
          Question 3/4
        </span>
        <span className="text-stone-800 text-xl font-medium font-['Inter'] leading-tight block">
          What is your favorite holiday?
        </span>
        <div className="flex justify-between mt-4">
          <img
            className="w-[154px] h-[203px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[200px]"
            src="./images/Subscribe_img7.png"
            alt="Image 7"
          />
          <img
            className="w-[168px] h-[198px] md:w-[168px] md:h-[198px] lg:w-[168px] lg:h-[198px]"
            src="./images/Subscribe_img8.png"
            alt="Image 8"
          />
          <img
            className="w-[146px] h-[200px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[200px]"
            src="./images/Subscribe_img9.png"
            alt="Image 9"
          />
          <img
            className="w-[146px] h-[200px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[200px]"
            src="./images/Subscribe_img10.png"
            alt="Image 10"
          />
          <img
            className="w-[146px] h-[200px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[200px]"
            src="./images/Subscribe_img11.png"
            alt="Image 11"
          />
          <img
            className="w-[146px] h-[200px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[200px]"
            src="./images/Subscribe_img12.png"
            alt="Image 12"
          />
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
