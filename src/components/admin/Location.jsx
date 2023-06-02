import React from "react";
import myImage from "../../public/Map.png";

export const Location = () => {
  return (
    <div className="">
      <div className="text-[#000000] text-[16px] font-normal mt-2 mb-3 pl-5 ">
        Location-device
      </div>

      <div>
        <img src={myImage} alt="" className="w-full h-[195px]  " />
      </div>
    </div>
  );
};
