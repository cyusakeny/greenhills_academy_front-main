"use client"
import React from "react";
import { useState } from "react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import dynamic from "next/dynamic";
const TopBar = () => {
  const [isclick, setclick] = useState<boolean>(false);
  const handleClick = () => {
    setclick(true);
  };
  return (
    <div className="w-[80vw] bg-white p-2 flex justify-between h-fit">
      <div>
        <p>Hi, Aime</p>
        <p className="text-sm font-normal opacity-60">
          To day is Monday 15 August 2023
        </p>
      </div>
      <div className="bg-[#F9F9F9] h-fit flex rounded-lg">
        <img src="/images/search.svg" alt="" className="ml-2" />
        <input
          type="text"
          placeholder="Search something"
          className="bg-[#F9F9F9] border-transparent"
        />
      </div>
      <div className="flex w-[30%] justify-between  " onClick={handleClick}>
        <img src="/images/notification.svg" alt="" />
        <div className="flex gap-1">
          <div className="rounded-full w-[50px] h-[50px] bg-[#D9D9D9]"></div>
          <div>
            <p className="text-base">Byiringiro jean</p>
            <p className="text-sm font-normal opacity-60">
              byiringirojean@gmail.com
            </p>
          </div>
          {isclick ? <img src="/images/arrow-down.svg" alt="" /> :<BsChevronRight />}
          
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TopBar), {ssr: false});
