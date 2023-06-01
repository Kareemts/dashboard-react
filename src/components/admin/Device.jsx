import React from "react";

export const Device = () => {
  return (
    <div className="">
      <div className="text-[#000000] text-[16px] font-normal mt-8 ml-8 ">
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
              <td>Wed Apr 26 2023 ; 12:00:10</td>
            </tr>
            <tr>
              <td>Test device 2</td>
              <td>
                <div className="bg-[#E40404] text-white p-[2px] rounded-[3px] text-[10px]  ">
                  Online
                </div>
              </td>
              <td>Wed Apr 26 2023 ; 12:00:10</td>
              <td>
                <div className="bg-[#a5a4a4] text-white p-[5px] rounded-[200px] text-[10px]  ">
                  {" "}
                  >{" "}
                </div>
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
              <td>Wed Apr 26 2023 ; 12:00:10</td>
              <td>
                <div className="bg-[#a5a4a4] text-white p-[5px] rounded-[200px] text-[10px]  ">
                  {" "}
                  >{" "}
                </div>
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
              <td>Wed Apr 26 2023 ; 12:00:10</td>
              <td>
                <div className="bg-[#a5a4a4] text-white p-[5px] rounded-[200px] text-[10px]  ">
                  {" "}
                  >{" "}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
