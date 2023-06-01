import { Progress } from "antd";
import React from "react";

export const Domain = () => {
  return (
    <div className="m-8">
      <div className="text-[#000000] text-[16px] font-normal  ">
        Domain Quota
      </div>

      <div className="flex  justify-between">
        <div className="flex items-center">
          <Progress
            type="circle"
            percent={60.33}
            strokeColor={"#0B3366"}
            size={[100, 30]}
            className="mt-5"
            gapPosition={"bottom"}
            strokeWidth={10}
            gapDegree={5}
          />
          <div className="ml-5 ">
            <div className="text-[#909090] text-[13px] font-normal mb-2  ">
              Data usage
            </div>
            <div className="text-[#000000] text-[30px]  "></div>
            60.33gb/100gb
          </div>
        </div>

        <div className="flex">
          <div className="mr-3">
            <div>
              <div className="text-[#909090] text-[13px] font-normal ">
                Today
              </div>
              <div>30.00 %</div>
            </div>
            <div>
              <div className="text-[#909090] text-[13px] font-normal ">
                This Week
              </div>
              <div>15.00 %</div>
            </div>
            <div>
              <div className="text-[#909090] text-[13px] font-normal ">
                This Month
              </div>
              <div>55.00 %</div>
            </div>
          </div>
          <div>
            <div>
              <div className="text-[#3CC25A] text-[4px] font-normal ">
                Increase
              </div>
              <div className="text-[#909090] text-[10px] font-normal ">
                +15.00
              </div>
            </div>
            <div className="mt-5">
              <div className="text-[#3CC25A] text-[4px] font-normal ">
                Decrease
              </div>
              <div className="text-[#909090] text-[10px] font-normal ">
                -15.00
              </div>
            </div>
            <div className="mt-5">
              <div className="text-[#3CC25A] text-[4px] font-normal ">
                Decrease
              </div>
              <div className="text-[#909090] text-[10px] font-normal ">
                +25.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
