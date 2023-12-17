import React, { useState } from "react";

const Questionnaire = () => {
  const [selectedImages, setSelectedImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const imageMapToApi = 
  {
    "1" : "Farm", 
    "2" : "Coastal", 
    "3" : "Minimalist", 
    "4" : "Dining", 
    "5" : "Living", 
    "6" : "Kitchen", 
    "7" : "New Year's Eve", 
    "8" : "Valentine's Day", 
    "9" : "St. Patrick's Day", 
    "10" : "Easter", 
    "11" : "Thanksgiving", 
    "12" : "Halloween", 
    "13" : "Christmas", 
    "14" : "Blue", 
    "15" : "Green", 
    "16" : "Orange", 
    "17" : "Gray", 
    "18" : "Pink", 
    "19" : "Purple", 
    "20" : "Red" 
  }

  const handleImageClick = (questionNumber, imageNumber) => {
    console.log(`Clicked Image ${imageNumber} for Question ${questionNumber}`);

    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [questionNumber]: imageNumber,
    }));
  };

  const getImageStyle = (questionNumber, imageNumber) => {
    return {
      border:
        selectedImages[questionNumber] === imageNumber
          ? "1px solid black"
          : "none",
    };
  };

  const generateImagesFromApi = () => {
    console.log("Generate images from API");
    console.log(selectedImages);
    console.log("First answer: " + imageMapToApi[selectedImages["1"]]);
    console.log("Second answer: " + imageMapToApi[selectedImages["2"]]);
    console.log("Third answer: " + imageMapToApi[selectedImages["3"]]);
    console.log("Fourth answer: " + imageMapToApi[selectedImages["4"]]);
  };

  return (
    <div className="flex flex-wrap w-full max-w-[1150px] mx-auto mt-4">
      {/* First block - Top left */}
      <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
        <div
          style={{
            marginRight: "0.5vw",
            marginLeft: "0.7vw",
            marginTop: "0.5vw",
            marginBottom: "5.5vw",
          }}
        >
          <span className="text-stone-800 text-xl font-bold font-['Inter'] leading-tight block">
            Question 1/4
          </span>
          <span className="text-stone-800 text-xl font-medium font-['Inter'] leading-tight block">
            Which image best captures your decorating style?
          </span>
          <div className="flex justify-between mt-4">
            {[1, 2, 3].map((imageNumber) => (
              <button
                key={imageNumber}
                className="focus:outline-none"
                onClick={() => handleImageClick(1, imageNumber)}
              >
                <img
                  className="w-[154px] h-[203px] md:w-[168px] md:h-[198px] lg:w-[155px] lg:h-[150px]"
                  src={`./images/Subscribe_img${imageNumber}.png`}
                  alt={`Image ${imageNumber}`}
                  style={getImageStyle(1, imageNumber)}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add more space between blocks */}
      <div className="w-full md:w-1/12"></div>

      {/* Second block - Top right */}
      <div className="w-full md:w-5/12 text-center mb-4 md:mb-0">
        <div
        // style={{
        //    marginRight: "0.5vw",
        //    marginLeft: "4.5vw",
        //    marginTop: "0.5vw",
        //    marginBottom: "4.5vw",
        //  }}
        >
          <span className="text-stone-800 text-xl font-bold font-['Inter'] leading-tight block">
            Question 2/4
          </span>
          <span className="text-stone-800 text-xl font-medium font-['Inter'] leading-tight block">
            Which area of the home are you decorating?
          </span>
          <div className="flex justify-between mt-4">
            {[4, 5, 6].map((imageNumber) => (
              <button
                key={imageNumber}
                className="focus:outline-none"
                onClick={() => handleImageClick(2, imageNumber)}
              >
                <img
                  className="w-[154px] h-[203px] md:w-[168px] md:h-[198px] lg:w-[146px] lg:h-[150px]"
                  src={`./images/Subscribe_img${imageNumber}.png`}
                  alt={`Image ${imageNumber}`}
                  style={getImageStyle(2, imageNumber)}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Third block - Below first block */}
      <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
        <div
          style={{
            marginRight: "0.5vw",
            marginLeft: "0.7vw",
            marginTop: "-0.25vw",
            marginBottom: "2.5vw",
          }}
        >
          <span className="text-stone-800 text-xl font-bold font-['Inter'] leading-tight block">
            Question 3/4
          </span>
          <span className="text-stone-800 text-xl font-medium font-['Inter'] leading-tight block">
            What is your favorite holiday?
          </span>
          <div className="flex justify-between mt-4">
            {[7, 8, 9, 10, 11, 12, 13].map((imageNumber) => (
              <button
                key={imageNumber}
                className="focus:outline-none"
                onClick={() => handleImageClick(3, imageNumber)}
              >
                <img
                  className="w-[154px] h-[203px] md:w-[168px] md:h-[198px] lg:w-[150px] lg:h-[130px]"
                  src={`./images/Subscribe_img${imageNumber}.png`}
                  alt={`Image ${imageNumber}`}
                  style={getImageStyle(3, imageNumber)}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add more space between blocks */}
      <div className="w-full md:w-1/12"></div>

      {/* Fourth block - Below second block */}
      <div className="w-full md:w-5/12 text-center mb-4 md:mb-0">
        <div
          style={{
            marginRight: "0.5vw",
            marginLeft: "0.7vw",
            marginTop: "-0.25vw",
            marginBottom: "2.5vw",
          }}
        >
          <span className="text-stone-800 text-xl font-bold font-['Inter'] leading-tight block">
            Question 4/4
          </span>
          <span className="text-stone-800 text-xl font-medium font-['Inter'] leading-tight block">
            What is your favorite color?
          </span>
          <div className="flex justify-between mt-4">
            {[14, 15, 16, 17, 18, 19, 20].map((imageNumber) => (
              <button
                key={imageNumber}
                className="focus:outline-none"
                onClick={() => handleImageClick(4, imageNumber)}
              >
                <img
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
                  src={`./images/Subscribe_img${imageNumber}.png`}
                  alt={`Image ${imageNumber}`}
                  style={getImageStyle(4, imageNumber)}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <button className="p-2 bg-[#c0876a] rounded text-black font-bold text-[26px] mt-4 mx-auto mb-8"
      onClick={() => generateImagesFromApi()}>
      
        GENERATE IMAGES
      </button>
    </div>
  );
};

export default Questionnaire;
