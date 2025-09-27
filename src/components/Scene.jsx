import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json"; 

const Scene = () => {
  return (
    <div style={{ margin: "auto" }} className="relative md:w-[23%] w-[53%] " >
      <Lottie animationData={animationData} loop={true} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-red-500 ">
        <div className="relative">
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:text-5xl text-6xl font-bold font " >VV//</h1>
        </div>
      </div>
    </div>
  );
};

export default Scene;
