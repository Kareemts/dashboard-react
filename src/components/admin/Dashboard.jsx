import React from "react";
import { Head } from "./Head";
import { General } from "./General";
import { Live } from "./Live";
import { Device } from "./Device";
import { Activity } from "./Activity";
import { Location } from "./Location";
import { Domain } from "./Domain";

export const Dashboard = () => {
  return (
    <div className=" px-8  bg-[#F6F6F6]">
      <p className="text-[20px]">Project</p>
      <div className="mt-4">
        <Head />
        <div className="mt-3 grid grid-cols-3 gap-3 ">
          <div>
            <div className=" bg-[#FFFFFF] h-[180px] rounded-[1px] border-solid border-[1px] ">
              <General />
            </div>
            <div className=" bg-[#FFFFFF] h-[180px] mt-3 rounded-[1px] border-solid border-[1px] ">
              <Device />
            </div>
          </div>

          <div>
            <div className=" bg-[#FFFFFF] h-[180px] rounded-[1px] border-solid border-[1px] ">
              <Live />
            </div>
            <div className=" bg-[#FFFFFF] h-[180px] mt-3 rounded-[1px] border-solid border-[1px] ">
              <Activity />
            </div>
          </div>
          <div>
            <div className=" bg-[#FFFFFF] h-[240px] rounded-[1px] border-solid border-[1px]">
              <Location />
            </div>
            <div className=" bg-[#FFFFFF] h-[120px] mt-3 rounded-[1px] border-solid border-[1px]">
              <Domain />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
