import { Button, Progress } from "antd";
import React from "react";

export const Live = () => {
  return (
    <div className="p-5">
      <div className="text-[#000000] text-[16px] font-normal  ">
        Live Statistics
      </div>
      <div className="flex justify-evenly">
        <div className="flex flex-col">
          <Progress
            type="circle"
            percent={15}
            strokeColor={"#0B3366"}
            size={[70, 30]}
            className="mt-5"
            strokeWidth={10}
          />
          <Button type="primary" size="small" ghost className="mt-2  w-[60px] ">
            <p className="text-[12px]">Info</p>
          </Button>
        </div>
        <div className="flex flex-col">
          <Progress
            type="circle"
            percent={27}
            strokeColor={"#0B3366"}
            size={[70, 30]}
            className="mt-5"
            strokeWidth={10}
          />
          <Button type="primary" size="small" ghost className="mt-2  w-[60px] ">
            <p className="text-[12px]">Warning</p>
          </Button>
        </div>
        <div className="flex flex-col">
          <Progress
            type="circle"
            percent={1}
            strokeColor={"#0B3366"}
            size={[70, 30]}
            className="mt-5"
            strokeWidth={10}
          />
          <Button type="primary" size="small" ghost className="mt-2 w-[60px] ">
            <p className="text-[12px]">Error</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
