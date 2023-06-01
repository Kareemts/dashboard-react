import React from "react";

export const Head = () => {
  return (
    <div className="bg-[#FFFFFF] h-[85px] rounded-[1px] border-solid border-[1px]  ">
      <div className="flex justify-evenly mb-3">
        {" "}
        <div className="mt-4">
          <p className="text-[#000000] text-[15px] font-normal">
            Adidas Mobile
          </p>
        </div>{" "}
        <div className="mt-4">
          <p className="text-[#C6C6C6] text-[14px] font-normal">
            Compaigns
          </p>
          <p className=" text-[15px] font-normal mt-2">8</p>
        </div>{" "}
        <div className="mt-4">
          <p className="text-[#C6C6C6] text-[14px] font-normal ">
            Channels
          </p>
          <p className=" text-[15px] font-normal mt-2">9/10</p>
        </div>{" "}
        <div className="mt-4">
          <p className="text-[#C6C6C6] text-[14px] font-normal">
            Last Edited by
          </p>
          <p className=" text-[15px] font-normal mt-2">Varun</p>
        </div>{" "}
        <div className="mt-4">
          <p className="text-[#C6C6C6] text-[14px] font-normal">
          Last Edited on
          </p>
          <p className=" text-[15px] font-normal  mt-2 ">5 hours ago</p>
        </div>{" "}
      </div>
    </div>
  );
};
