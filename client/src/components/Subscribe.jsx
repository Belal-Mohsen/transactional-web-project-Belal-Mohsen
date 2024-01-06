import React from "react";
import { useLocation } from "react-router-dom";
import ImageComponent from './ImageComponent';

const Subscribe = () => {
  let { state } = useLocation();

  let imageName = GetImageName(state.value);
 
  return (
    <div className="flex justify-center items-center w-full h-screen"> 
      <div className="text-center">      
        <ImageComponent imageName={imageName}/>
      </div>
    </div>
  );
};

const GetImageName = (selectedImages) => {
  let imageName = "";
 
  switch (selectedImages[2][0]) {
    case 4:
      imageName += "dining";
      break;

    case 5:
      imageName += "living";
      break;

    case 6:
      imageName += "kitchen";
      break;

    default:
      break;
  }

  imageName += "_";

  switch (selectedImages[3][0]) {
    case 7:
    case 13:
      imageName += "newyear_christmas";
      break;

    case 11:
    case 12:
      imageName += "thanks";
      break;

    case 8:
    case 9:
      imageName += "valentine";
      break;

    case 10:
      imageName += "easter";
      break;

    default:
      break;
  }

  imageName += "_";

  switch (selectedImages[4][0]) {
    case 14:
      imageName += "blue";
      break;

    case 15:
      imageName += "green";
      break;

    case 16:
      imageName += "orange";
      break;

    case 17:
      imageName += "gray";
      break;

    case 18:
      imageName += "pink";
      break;

    case 19:
      imageName += "purple";
      break;

    case 20:
      imageName += "red";
      break;

    default:
      break;
  }
  return imageName;
};
export default Subscribe;
