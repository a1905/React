import React, { useEffect, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "../App.css";
function SectionOne({ images }) {
  const [currentImages, setCurrentImages] = useState(0);
  const goToNextImage = () => {
    setCurrentImages((Index) => (Index + 1) % images.length);
  };
  const goToPrevImage = () => {
    setCurrentImages((Index) => (Index - 1 + images.length) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImages]);
  return (
    <div className="slider-container relative w-full ">
      <img
        className="w-full h-full object-cover"
        src={images[currentImages]}
        alt="resim"
      ></img>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={goToPrevImage}
      >
        <GrPrevious />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={goToNextImage}
      >
        <GrNext />
      </button>
    </div>
  );
}

export default SectionOne;
