import React from "react";
import next from "../../public/next.png";

export const Device = () => {
  return (
    <div className="">
      <div className="text-[#000000] text-[16px] font-normal mt-5 ml-5 ">
        Devise Status
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Device Name</th>
              <th>Status</th>
              <th>Laste Response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test device 1</td>
              <td>
                <div className="bg-[#E40404] text-white p-[2px] rounded-[3px] text-[10px]  ">
                  Online
                </div>
              </td>
              <td>Wed Apr 26 2023 ; 12:00:10 --</td>
            </tr>
            <tr>
              <td>Test device 2</td>
              <td>
                <div className="bg-[#E40404] text-white p-[2px] rounded-[3px] text-[10px]  ">
                  Online
                </div>
              </td>
              <td className="relative">
                Wed Apr 26 2023 ; 12:00:10{" "}
                <span className="absolute right-0">
                  <img src={next} alt="" />
                </span>{" "}
              </td>
            </tr>
            <tr>
              <td>Test device 3</td>
              <td>
                <div className="bg-[#E40404] text-white p-[2px] rounded-[3px] text-[10px]  ">
                  Online
                </div>
              </td>
              <td>Wed Apr 26 2023 ; 12:00:10</td>
            </tr>

            <tr>
              <td>Test device 3</td>
              <td>
                <div className="bg-[#E40404] text-white p-[2px] rounded-[3px] text-[10px]  ">
                  Online
                </div>
              </td>
              <td className="relative">
                Wed Apr 26 2023 ; 12:00:10{" "}
                <span className="absolute right-0">
                  <img src={next} alt="" />
                </span>{" "}
              </td>
            </tr>
            <tr>
              <td>Test device 4</td>
              <td>
                <div className="bg-[#E40404] text-white p-[2px] rounded-[3px] text-[10px]  ">
                  Online
                </div>
              </td>
              <td>Wed Apr 26 2023 ; 12:00:10</td>
            </tr>
            <tr>
              <td>Test device 3</td>
              <td>
                <div className="bg-[#E40404] text-white p-[2px] rounded-[3px] text-[10px]  ">
                  Online
                </div>
              </td>
              <td className="relative">
                Wed Apr 26 2023 ; 12:00:10{" "}
                <span className="absolute right-0">
                  <img src={next} alt="" />
                </span>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
