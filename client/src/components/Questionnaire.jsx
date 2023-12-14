import React from "react";

const Questionnaire = () => {
  return (
    <div className="flex flex-wrap w-full max-w-[1000px] mx-auto mt-4">
      {/* First block - Top left */}
      <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
        <div style={{ marginRight: "0.7vw", marginLeft: "0.5vw", marginTop: "0.5vw", marginBottom: "1.5vw" }}>
          <span className="text-stone-800 text-xl font-bold font-['Inter'] leading-tight block">
            Question 1/4
          </span>
          <span className="text-stone-800 text-xl font-medium font-['Inter'] leading-tight block">
            Which image best captures your decorating style?
          </span>
          <div className="flex justify-between mt-4">
            <img
              className="w-[154px] h-[203px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[150px]"
              src="./images/Subscribe_img1.png"
              alt="Image 1"
            />
            <img
              className="w-[168px] h-[198px] md:w-[168px] md:h-[198px] lg:w-[168px] lg:h-[150px]"
              src="./images/Subscribe_img2.png"
              alt="Image 2"
            />
            <img
              className="w-[146px] h-[200px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[150px]"
              src="./images/Subscribe_img3.png"
              alt="Image 3"
            />
          </div>
        </div>
      </div>

      {/* Second block - Top right */}

      <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
        <div style={{ marginRight: "0.5vw", marginLeft: "4.5vw", marginTop: "0.5vw", marginBottom: "4.5vw" }}>
          <span className="text-stone-800 text-xl font-bold font-['Inter'] leading-tight block ">
            Question 2/4
          </span>
          <span className="text-stone-800 text-xl font-medium font-['Inter'] leading-tight block">
            Which area of the home are you decorating?
          </span>
          <div className="flex justify-between mt-4">
            <img
              className="w-[154px] h-[203px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[150px]"
              src="./images/Subscribe_img4.png"
              alt="Image 4"
            />
            <img
              className="w-[168px] h-[198px] md:w-[168px] md:h-[198px] lg:w-[168px] lg:h-[150px]"
              src="./images/Subscribe_img5.png"
              alt="Image 5"
            />
            <img
              className="w-[146px] h-[200px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[150px]"
              src="./images/Subscribe_img6.png"
              alt="Image 6"
            />
          </div>
        </div>
      </div>

      {/* Third block - Below first block */}
      <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
        <div style={{ marginRight: "0.7vw", marginLeft: "0.5vw", marginTop: "-0.25vw", marginBottom: "2.5vw"  }}>
          <span className="text-stone-800 text-xl font-bold font-['Inter'] leading-tight block">
            Question 3/4
          </span>
          <span className="text-stone-800 text-xl font-medium font-['Inter'] leading-tight block">
            What is your favorite holiday?
          </span>
          <div className="flex justify-between mt-4">
            <img
              className="w-[100px] h-[150px] md:w-[100px] md:h-[50px] lg:w-[110px] lg:h-[130px]"
              src="./images/Subscribe_img7.png"
              alt="Image 7"
            />
            <img
              className="w-[100px] h-[150px] md:w-[100px] md:h-[50px] lg:w-[110px] lg:h-[130px]"
              src="./images/Subscribe_img8.png"
              alt="Image 8"
            />
            <img
              className="w-[100px] h-[150px] md:w-[100px] md:h-[50px] lg:w-[110px] lg:h-[120px]"
              src="./images/Subscribe_img9.png"
              alt="Image 9"
            />
            <img
              className="w-[100px] h-[150px] md:w-[100px] md:h-[50px] lg:w-[110px] lg:h-[120px]"
              src="./images/Subscribe_img10.png"
              alt="Image 10"
            />
            
          </div>
        </div>
      </div>

      {/* Fourth block - Below second block */}
      <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
        <div style={{ marginRight: "0.5vw", marginLeft: "6.5vw", marginTop: "-0.25vw", marginBottom: "4.5vw" }}>
          <span className="text-stone-800 text-xl font-bold font-['Inter'] leading-tight block">
            Question 4/4
          </span>
          <span className="text-stone-800 text-xl font-medium font-['Inter'] leading-tight block">
            What is your favorite color?
          </span>
          <div className="flex justify-between mt-4">
            <img
              className="w-[80px] h-[80px] md:w-[100px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
              src="./images/Subscribe_img13.png"
              alt="Image 7"
            />
            <img
              className="w-[80px] h-[80px] md:w-[100px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
              src="./images/Subscribe_img14.png"
              alt="Image 8"
            />
            <img
              className="w-[80px] h-[80px] md:w-[100px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
              src="./images/Subscribe_img15.png"
              alt="Image 9"
            />
            <img
              className="w-[80px] h-[80px] md:w-[100px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
              src="./images/Subscribe_img16.png"
              alt="Image 10"
            />
           
            
          </div>
        </div>
        
      </div>
      
    </div>
    
  );
};

export default Questionnaire;
