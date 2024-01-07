import React, { useState, useEffect } from 'react';

const ImageComponent = (imageName) => {
  const [imageUrl, setImageUrl] = useState('');
  
  useEffect(() => {
    fetch(`/api/images?name=${imageName.imageName}`)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        console.log(url);
        setImageUrl(url);
      })
      .catch(error => console.error('Error fetching image:', error));
  }, []);

  

  return (
    <div>
      {imageUrl && <img src={imageUrl} className="mx-auto" alt="Loaded from API" />}
    </div>
  );
};

export default ImageComponent;
