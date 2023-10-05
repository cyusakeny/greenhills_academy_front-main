import React from "react";
import Image from "next/image";
const CalendarCard = () => {
  return (
    <div className="w-full flex flex-row hover:shadow-xl shadow-[grey]">
      <div className="w-[20%] px-8 py-6 bg-primary flex-col justify-start items-center gap-4 inline-flex">
        <div className="text-justify text-[yellow] text-lg font-bold">NOV</div>
        <div className="text-justify text-[yellow] text-2xl font-bold">02</div>
        <div className="text-justify text-[yellow] text-lg font-bold">2023</div>
      </div>
      <div className="w-[80%] px-4 py-8 bg-emerald-50 flex-col justify-center items-start gap-6 inline-flex">
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="text-justify text-emerald-600 text-sm font-bold ">
            4:30 PM
          </div>
          <h4 className="text-black text-lg font-bold ">
            ENROLLMENT: Discover 6th Grade Event{" "}
          </h4>
        </div>
        <a href="" className="w-full">
          <div className="justify-between w-[90%] items-start inline-flex">
            <div className="text-justify text-emerald-600 text-[14px] font-bold">
              READ MORE
            </div>
            <Image
              src="/icons/calendararrow.svg"
              height={1}
              width={1}
              alt=""
              className="w-4 h-5"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default CalendarCard;
