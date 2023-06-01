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
    <div className=" px-10  bg-[#F6F6F6]">
      <p className="text-[24px]">Project</p>
      <div className="mt-6">
        <Head />
        <div className="mt-3 grid grid-cols-3 gap-4 ">
          <div>
            <div className=" bg-[#FFFFFF] h-[275px] rounded-[1px] border-solid border-[1px] ">
              <General />
            </div>
            <div className=" bg-[#FFFFFF] h-[280px] mt-3 rounded-[1px] border-solid border-[1px] ">
              <Device />
            </div>
          </div>

          <div>
            <div className=" bg-[#FFFFFF] h-[275px] rounded-[1px] border-solid border-[1px] ">
              <Live />
            </div>
            <div className=" bg-[#FFFFFF] h-[280px] mt-3 rounded-[1px] border-solid border-[1px] ">
              <Activity />
            </div>
          </div>
          <div>
            <div className=" bg-[#FFFFFF] h-[350px] rounded-[1px] border-solid border-[1px]">
              <Location />
            </div>
            <div className=" bg-[#FFFFFF] h-[205px] mt-3 rounded-[1px] border-solid border-[1px]">
              <Domain />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
