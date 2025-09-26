import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json"; 

const Scene = () => {
  return (
    <div style={{ width: 285, margin: "auto" }} className="relative" >
      <Lottie animationData={animationData} loop={true} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-red-500 ">
        <div className="relative">
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold font " >Vv</h1>
        </div>
      </div>
    </div>
  );
};

export default Scene;
