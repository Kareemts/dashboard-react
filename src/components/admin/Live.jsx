import { Button, Progress } from "antd";
import React from "react";

export const Live = () => {
  return (
    <div className="p-8">
      <div className="text-[#000000] text-[16px] font-normal  ">
        Live Statistics
      </div>
      <div className="flex justify-evenly">
        <div className="flex flex-col">
          <Progress
            type="circle"
            percent={15}
            strokeColor={"#0B3366"}
            size={[100, 30]}
            className="mt-5"
            strokeWidth={10}
          />
          <Button type="primary" ghost className="mt-5">
            Info
          </Button>
        </div>
        <div className="flex flex-col">
          <Progress
            type="circle"
            percent={27}
            strokeColor={"#0B3366"}
            size={[100, 30]}
            className="mt-5"
            strokeWidth={10}
          />
          <Button type="primary" ghost className="mt-5">
            Warning
          </Button>
        </div>
        <div className="flex flex-col">
          <Progress
            type="circle"
            percent={1}
            strokeColor={"#0B3366"}
            size={[100, 30]}
            className="mt-5"
            strokeWidth={10}
          />
          <Button type="primary" ghost className="mt-5">
            Error
          </Button>
        </div>
      </div>
    </div>
  );
};
