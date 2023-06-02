import { Progress } from "antd";
import React from "react";


export const Domain = () => {
  return (
    <div className="mx-4">
      <div className="text-[#000000] text-[16px] font-normal mt-3   ">
        Domain Quota
      </div>

      <div className="flex  justify-between">
        <div className="flex ">
          <div className="relative">
            <div className="absolute top-6 right-3">
              <p className="text-[8px] text-[#909090]">60.33 %</p>
              <p className="text-[8px] text-[#909090] ">Used</p>
            </div>
            <Progress
              type="circle"
              percent={60.33}
              strokeColor={"#0B3366"}
              size={[55, 30]}
              className="mt-2"
              gapPosition={"bottom"}
              strokeWidth={10}
              gapDegree={5}
              showInfo={false}
            />
          </div>
          <div className="ml-3 mt-3 ">
            <div className="text-[#909090] text-[13px] font-normal  ">
              Data usage
            </div>
            <div className="text-[#000000] text-[15px]  "> 60.33gb/100gb</div>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="mr-3 ">
            <div>
              <div className="text-[#909090] text-[8px] font-normal ">
                Today
              </div>
              <div className=" text-[10px] font-normal ">30.00 %</div>
            </div>
            <div>
              <div className="text-[#909090] text-[8px] font-normal ">
                This Week
              </div>
              <div className=" text-[10px] font-normal ">30.00 %</div>
            </div>
            <div>
              <div className="text-[#909090] text-[8px] font-normal ">
                This Month
              </div>
              <div className=" text-[10px] font-normal ">30.00 %</div>
            </div>
          </div>
          <div>
            <div className="mt-1">
              <div className="text-[#3CC25A] text-[4px] font-normal ">
                Increase
              </div>
              <div className="text-[#909090] text-[8px] font-normal ">
                +15.00
              </div>
            </div>
            <div className="mt-3">
              <div className="text-[#3CC25A] text-[4px] font-normal ">
                Decrease
              </div>
              <div className="text-[#909090] text-[8px] font-normal ">
                -15.00
              </div>
            </div>
            <div className="mt-3">
              <div className="text-[#3CC25A] text-[4px] font-normal ">
                Decrease
              </div>
              <div className="text-[#909090] text-[8px] font-normal ">
                +25.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
