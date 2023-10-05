"use client";

import React, { useState } from "react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import DashboardLayout from "@/components/DashboardLayout";
const DashbaordContent = () => {
  const [showLandscape, setShowLandscape] = useState(false);
  const [showHello, setShowHello] = useState(false);

  const handleMouseEnterLandscape = () => {
    setShowLandscape(true);
  };

  const handleMouseLeaveLandscape = () => {
    setShowLandscape(false);
  };

  const handleMouseEnterHello = () => {
    setShowHello(true);
  };

  const handleMouseLeaveHello = () => {
    setShowHello(false);
  };

  return (
      <div className="bg-white mt-10  ml-10 w-[94%] mr-2  h-[80%] rounded-md">
        <p className="p-8  font-normal ">Web pages</p>
        <div className="flex">
          <div className="flex gap-2 p-4">
            <div onMouseLeave={handleMouseLeaveLandscape}>
              <button
                onMouseEnter={handleMouseEnterLandscape}
                className="w-[200px] mb-2 rounded-lg flex items-center justify-between p-1 cursor-pointer h-fit text-white bg-primary"
              >
                Landing Page{" "}
                {showLandscape ? <BsChevronDown /> : <BsChevronRight />}
              </button>
              {showLandscape && (
                <div onMouseEnter={handleMouseEnterLandscape}>
                  <button
                    onMouseEnter={handleMouseEnterLandscape}
                    className="w-[200px] mb-2 rounded-lg flex items-center justify-between p-1 cursor-pointer h-fit text-[#7E7E7E] bg-[#F5FBFF]"
                  >
                    About us <BsChevronDown />
                  </button>
                  <button
                    onMouseEnter={handleMouseEnterLandscape}
                    className="w-[200px] mb-2 rounded-lg flex items-center justify-between p-1 cursor-pointer h-fit text-[#7E7E7E] bg-[#F5FBFF]"
                  >
                    Admissions <BsChevronDown />
                  </button>
                  <button
                    onMouseEnter={handleMouseEnterLandscape}
                    className="w-[200px] mb-2 rounded-lg flex items-center justify-between p-1 cursor-pointer h-fit text-[#7E7E7E] bg-[#F5FBFF]"
                  >
                    Events <BsChevronDown />
                  </button>
                  <button
                    onMouseEnter={handleMouseEnterLandscape}
                    className="w-[200px] mb-2 rounded-lg flex items-center justify-between p-1 cursor-pointer h-fit text-[#7E7E7E] bg-[#F5FBFF]"
                  >
                    High school <BsChevronDown />
                  </button>
                </div>
              )}
            </div>

            <div onMouseLeave={handleMouseLeaveHello} className="">
              <button
                onMouseEnter={handleMouseEnterHello}
                className="w-[200px] mb-2 rounded-lg flex items-center justify-between p-1 cursor-pointer h-fit text-white bg-primary"
              >
                Hello Section{" "}
                {showHello ? <BsChevronDown /> : <BsChevronRight />}
              </button>
              {showHello && (
                <div onMouseEnter={handleMouseEnterHello}>
                  <button
                    onMouseEnter={handleMouseEnterHello}
                    className="w-[200px] mb-2 rounded-lg flex items-center justify-between p-1 cursor-pointer h-fit text-[#7E7E7E] bg-[#F5FBFF]"
                  >
                    Levels <BsChevronDown />
                  </button>
                  <button
                    onMouseEnter={handleMouseEnterHello}
                    className="w-[200px] mb-2 rounded-lg flex items-center justify-between p-1 cursor-pointer h-fit text-[#7E7E7E] bg-[#F5FBFF]"
                  >
                    Numbers <BsChevronDown />
                  </button>
                  <button
                    onMouseEnter={handleMouseEnterHello}
                    className="w-[200px] mb-2 rounded-lg flex items-center justify-between p-1 cursor-pointer h-fit text-[#7E7E7E] bg-[#F5FBFF]"
                  >
                    About us <BsChevronDown />
                  </button>
                  <button
                    onMouseEnter={handleMouseEnterHello}
                    className="w-[200px] mb-2 rounded-lg flex items-center justify-between p-1 cursor-pointer h-fit text-[#7E7E7E] bg-[#F5FBFF]"
                  >
                    Reasons <BsChevronDown />
                  </button>
                  <button
                    onMouseEnter={handleMouseEnterHello}
                    className="w-[200px] mb-2 rounded-lg flex items-center justify-between p-1 cursor-pointer h-fit text-[#7E7E7E] bg-[#F5FBFF]"
                  >
                    News & Events <BsChevronDown />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="p-2">
            <p className="text-sm font-normal opacity-60">
              landing page /Section section
            </p>
            <div className="flex justify-between py-4">
              <button className="w-[100px] mr-2 rounded-lg p-1 cursor-pointer h-fit bg-[#F9F9F9]">
                slide 1
              </button>
              <button className="w-[100px] p-1 mr-2 cursor-pointer rounded-lg h-fit bg-[#F9F9F9]">
                slide 2
              </button>
              <button className="w-[100px] p-1 mr-2 cursor-pointer rounded-lg h-fit bg-[#F9F9F9]">
                slide 3
              </button>
              <button className="flex items-center mr-2 cursor-pointer rounded-lg gap-4 justify-center w-[100px] p-1 h-fit bg-[#F9F9F9]">
                <img src="/images/add-button.svg" alt="" /> add
              </button>
            </div>
            <div className="flex flex-col">
              <label>Headline</label>
              <input
                type="text"
                placeholder="Bringout Brilliance in every child  "
                className=" bg-[#F5F5F5] relative h-[100px] border-transparent"
              />
              <label>call to action</label>
              <input
                type="text"
                placeholder="Learn more"
                className=" bg-[#F5F5F5] relative h-[40px] border-transparent"
              />
              <label>Image</label>
              <input
                type="text"
                className=" bg-[#F5F5F5] relative h-[100px] w-[300px] border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default DashbaordContent;
