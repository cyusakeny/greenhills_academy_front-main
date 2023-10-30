import React from "react";
import {AiOutlineCheck} from "react-icons/ai"
import { BiCheck } from "react-icons/bi";

const Customize = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 items-center mb-[10px] ml-10">
        <div className="flex flex-start w-3/4">
          <button className="w-[20%] mr-2 rounded-lg p-1 cursor-pointer h-fit bg-[#F9F9F9]">
            Title
          </button>
          <button className="w-[20%] mr-2 rounded-lg p-1 cursor-pointer h-fit bg-[#F9F9F9]">
            Pagraphs
          </button>
        </div>
        <div className="w-3/4">
          <label>Title</label>
          <div className="flex  items-center">
            <input
              type="Reasons"
              placeholder="4:30 PM"
              className="  bg-[#F5F5F5] rounded-lg  h-[50px] border-transparent placeholder-mx-10"
            />
            <button className="ml-[-200px] hover:bg-transparent text-primary bg-transparent hover:text-[#737171] hover:transition-all 10ms eas">
              change
            </button>
          </div>
        </div>
        <div className="w-3/4">
          <label>Subtitle</label>
          <div className="flex  items-center">
            <input
              type="text"
              placeholder="To join green hills academy"
              className="  bg-[#F5F5F5] rounded-lg  h-[50px] border-transparent placeholder-mx-10"
            />
            <button className="ml-[-200px] hover:bg-transparent text-primary bg-transparent hover:text-[#737171] hover:transition-all 10ms eas">
              change
            </button>
          </div>
        </div>
        <div className="flex  justify-end w-3/4 mt-4">
          <button className="w-[20%] mr-2 rounded-lg p-2 cursor-pointer  h-fit ">
            Undo edit
          </button>
          <button className="w-[20%] mr-2 p-2 rounded-lg  flex gap-6  items-center cursor-pointer h-fit bg-gray-300">
          <AiOutlineCheck className="text-2xl" /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
