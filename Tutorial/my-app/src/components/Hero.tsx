import React from "react";
import goodImage from "public/goodImage.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="-z-10 inset-0 absolute">
        <Image
          src={goodImage}
          fill
          alt="Good image"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="flex pt-64 justify-center">
        <h1 className=" text-shadow-black text-white text-6xl font-bold">
          Play games
        </h1>
      </div>
    </div>
  );
};

export default Hero;
