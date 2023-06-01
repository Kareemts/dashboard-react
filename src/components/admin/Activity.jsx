import React from "react";
import device from "../../public/device.png";
import command from "../../public/command.png";
import zones from "../../public/zones.png";

export const Activity = () => {
  return (
    <div className="p-8">
      <div className="text-[#000000] text-[16px] font-normal  ">
        Activity Logs
      </div>
      <div className="divide-y h-[220px] overflow-y-auto ">
        <div className="flex justify-between mt-5   ">
          <div className="flex items-center">
            <img src={device} alt="" className="w-[15px] h-[15px]" />
            <div>
              <div className="ml-3">
                <p className="text-[#545454] text-[15px] font-normal">
                  Devices
                </p>
                <p className="text-[#545454] text-[11px] font-normal">
                  FutureIK-device 1 report generated successfully
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[#545454] text-[15px] font-normal">
              16 Mar 2023
            </p>
            <p className="text-[#545454] text-[15px] font-normal">
              06:30:25 PM
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-5   ">
          <div className="flex items-center">
            <img src={command} alt="" className="w-[15px] h-[15px]" />
            <div>
              <div className="ml-3">
                <p className="text-[#545454] text-[15px] font-normal">
                  Compaign
                </p>
                <p className="text-[#545454] text-[11px] font-normal">
                  FutureIK-cenimas 1 modified successfully
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[#545454] text-[15px] font-normal">
              16 Mar 2023
            </p>
            <p className="text-[#545454] text-[15px] font-normal">
              06:30:25 PM
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-5   ">
          <div className="flex items-center">
            <img src={zones} alt="" className="w-[15px] h-[15px]" />
            <div className="ml-3">
              <p className="text-[#545454] text-[15px] font-normal">Zones</p>
              <p className="text-[#545454] text-[11px] font-normal">
                FutureIK-cenimas 1 modified successfully
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#545454] text-[15px] font-normal">
              16 Mar 2023
            </p>
            <p className="text-[#545454] text-[15px] font-normal">
              06:30:25 PM
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-5   ">
          <div className="flex items-center">
            <img src={zones} alt="" className="w-[15px] h-[15px]" />
            <div className="ml-3">
              <p className="text-[#545454] text-[15px] font-normal">Zones</p>
              <p className="text-[#545454] text-[11px] font-normal">
                FutureIK-cenimas 1 modified successfully
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#545454] text-[15px] font-normal">
              16 Mar 2023
            </p>
            <p className="text-[#545454] text-[15px] font-normal">
              06:30:25 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
