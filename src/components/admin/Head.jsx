import React from "react";

export const Head = () => {
  return (
    <div className="bg-[#FFFFFF] h-[60px] rounded-[1px] border-solid border-[1px]  ">
      <div className="flex justify-evenly mb-2">
        {" "}
        <div className="mt-4">
          <p className="text-[#000000] text-[15px] font-normal">
            Adidas Mobile
          </p>
        </div>{" "}
        <div className="mt-2">
          <p className="text-[#C6C6C6] text-[14px] font-normal">
            Compaigns
          </p>
          <p className=" text-[15px] font-normal ">8</p>
        </div>{" "}
        <div className="mt-2">
          <p className="text-[#C6C6C6] text-[14px] font-normal ">
            Channels
          </p>
          <p className=" text-[15px] font-normal ">9/10</p>
        </div>{" "}
        <div className="mt-2">
          <p className="text-[#C6C6C6] text-[14px] font-normal">
            Last Edited by
          </p>
          <p className=" text-[15px] font-normal ">Varun</p>
        </div>{" "}
        <div className="mt-2">
          <p className="text-[#C6C6C6] text-[14px] font-normal">
          Last Edited on
          </p>
          <p className=" text-[15px] font-normal  ">5 hours ago</p>
        </div>{" "}
      </div>
    </div>
  );
};
