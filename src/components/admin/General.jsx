import React from "react";
import { Progress } from "antd";
export const General = () => {
  return (
    <div className="p-5 ">
      <p className="text-[#000000] text-[16px] font-normal  ">
        General Information
      </p>
      <div className="flex">
        <div>
          <div className=" flex mt-2">
            <p className="text-[#909090] text-[12px] font-normal">Projects</p>
          </div>
          <div className=" flex mt-3">
            <p className="text-[#909090] text-[12px] font-normal">Users</p>
          </div>{" "}
          <div className=" flex mt-3">
            <p className="text-[#909090] text-[12px] font-normal">Channels</p>
          </div>{" "}
          <div className=" flex mt-3">
            <p className="text-[#909090] text-[12px] font-normal">Devices</p>
          </div>
        </div>
        <div>
          <div className=" flex mt-1">
            <div className="ml-5">
              <Progress
                percent={20}
                size={[150, 12]}
                strokeColor={"#0B3366"}
                showInfo={false}
              />
            </div>
            <p className="text-[#909090] text-[12px] font-normal ml-5">2/10</p>
          </div>{" "}
          <div className=" flex mt-0">
            <div className="ml-5">
              <Progress
                percent={100}
                size={[150, 12]}
                strokeColor={"#0B3366"}
                showInfo={false}
              />
            </div>
            <p className="text-[#909090] text-[12px] font-normal ml-5">3/3</p>
          </div>{" "}
          <div className=" flex mt-0">
            <div className="ml-5">
              <Progress
                percent={100}
                size={[150, 12]}
                strokeColor={"#0B3366"}
                showInfo={false}
              />
            </div>
            <p className="text-[#909090] text-[12px] font-normal ml-5">10/10</p>
          </div>{" "}
          <div className=" flex mt-0">
            <div className="ml-5">
              <Progress
                percent={50}
                size={[150, 12]}
                strokeColor={"#0B3366"}
                showInfo={false}
              />
            </div>
            <p className="text-[#909090] text-[12px] font-normal ml-5">5/10</p>
          </div>
        </div>
      </div>
    </div>
  );
};
