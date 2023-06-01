import React from "react";
import { Progress } from "antd";
export const General = () => {
  return (
    <div className="p-8 ">
      <p className="text-[#000000] text-[16px] font-normal  ">
        General Information
      </p>
      <div className="flex">
        <div>
          <div className=" flex mt-4">
            <p className="text-[#909090] text-[14px] font-normal">Projects</p>
          </div>
          <div className=" flex mt-6">
            <p className="text-[#909090] text-[14px] font-normal">Users</p>
          </div>{" "}
          <div className=" flex mt-6">
            <p className="text-[#909090] text-[14px] font-normal">Channels</p>
          </div>{" "}
          <div className=" flex mt-6">
            <p className="text-[#909090] text-[14px] font-normal">Devices</p>
          </div>
        </div>
        <div>
          <div className=" flex mt-4">
            <div className="ml-10">
              <Progress
                percent={20}
                size={[300, 18]}
                strokeColor={"#0B3366"}
                showInfo={false}
              />
            </div>
            <p className="text-[#909090] text-[14px] font-normal ml-5">2/10</p>
          </div>{" "}
          <div className=" flex mt-4">
            <div className="ml-10">
              <Progress
                percent={100}
                size={[300, 18]}
                strokeColor={"#0B3366"}
                showInfo={false}
              />
            </div>
            <p className="text-[#909090] text-[14px] font-normal ml-5">3/3</p>
          </div>{" "}
          <div className=" flex mt-4">
            <div className="ml-10">
              <Progress
                percent={100}
                size={[300, 18]}
                strokeColor={"#0B3366"}
                showInfo={false}
              />
            </div>
            <p className="text-[#909090] text-[14px] font-normal ml-5">10/10</p>
          </div>{" "}
          <div className=" flex mt-4">
            <div className="ml-10">
              <Progress
                percent={50}
                size={[300, 18]}
                strokeColor={"#0B3366"}
                showInfo={false}
              />
            </div>
            <p className="text-[#909090] text-[14px] font-normal ml-5">5/10</p>
          </div>
        </div>
      </div>
    </div>
  );
};
