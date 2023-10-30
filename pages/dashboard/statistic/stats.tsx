import React, { useEffect, useState } from "react";
import { SiGoogledocs } from "react-icons/si";
import { MdGroups } from "react-icons/md";
import BarChart from "../../../components/ui/molecules/graph";
import "react-circular-progressbar/dist/styles.css";
import PaginatedTable from "../../../components/ui/molecules/table";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Link from "next/link";

const Content = () => {
  const userStats = [
    {
      Icon: <MdGroups className="text-yellow w-6 h-6" />,
      names: "Total students",
      number: 140,
    },
    {
      Icon: <SiGoogledocs className="text-yellow w-6 h-6" />,
      names: "Total staff",
      number: 140,
    },
    {
      Icon: <MdGroups className="text-[#B2DEFF] w-6 h-6" />,
      names: "Total parents",
      number: 222,
    },
  ];

  const [totalNumber, setTotalNumber] = useState(0);
  const maxNumber = userStats.reduce((acc, stats) => acc + stats.number, 0);
  const targetNumber = 1000;

  useEffect(() => {
    setTimeout(() => {
      if (totalNumber < maxNumber) {
        setTotalNumber(totalNumber + 1);
      }
    }, 0.1);
  }, [totalNumber]);

  const progressPercentage = (totalNumber / targetNumber) * 100;
  const pathColor = progressPercentage === 100 ? "#18BEA7" : "#18BEA7";

  const form = [
    {
      name: "Byiringiro Yvan",
      vaca: "USD avalanche horizen livepeer ",
      day: "Yesterday",
      time: "8:00 am",
    },
    {
      name: "Byiringiro Yvan",
      vaca: "USD avalanche horizen livepeer ",
      day: "Yesterday",
      time: "8:00 am",
    },
    {
      name: "Byiringiro Yvan",
      vaca: "USD avalanche horizen livepeer ",
      day: "Yesterday",
      time: "8:00 am",
    },
    {
      name: "Byiringiro Yvan",
      vaca: "USD avalanche horizen livepeer ",
      day: "Yesterday",
      time: "8:00 am",
    },
  ];

  return (
    <main>
      <div className="flex justify-between">
        <div className="flex items-center ml-10 mr-10 p-2 w-1/2 gap-10 shadow ">
          <div className="w-[70px] ml-8">
            <CircularProgressbarWithChildren
              value={progressPercentage}
              strokeWidth={14}
              styles={buildStyles({
                pathColor,
                trailColor: "#B2DEFF",
                strokeLinecap: "butt",
                textColor: pathColor,
                backgroundColor: "#B2DEFF",
              })}
            >
              <CircularProgressbar
                value={progressPercentage}
                text={`${totalNumber}`}
                strokeWidth={14}
                styles={buildStyles({
                  trailColor: "transparent",
                  pathTransitionDuration: 2000,
                  strokeLinecap: "butt",
                  textColor: "#018C79",
                })}
              />
            </CircularProgressbarWithChildren>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {userStats.map((stats) => (
              <div className="flex flex-col gap-2">
                {stats.Icon}
                <p className="text-sm text-gray-400">{stats.names}</p>
                <p>{stats.number}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" shadow p-2">
          <div className=" flex  gap-10 items-center">
            <p>Homepage Visual</p>
            <Link href="/" className="text-[#018C79]">
              View All
            </Link>
            <Link
              href="/"
              className="bg-[#DCEEEC] rounded-sm p-2 text-[#018C79]"
            >
              Customize
            </Link>
          </div>
          <div className="flex  p-4 gap-4">
            <div className="w-24 h-24 bg-[#F5FBFF] rounded-md"></div>
            <div>
              <p className="text-xl w-[60%]">
                Flow litecoin flow USD siacoin algorand maker
              </p>
              <p className="text-sm w-[60%] text-gray-400">
                Helium telcoin arweave USD XRP loopring ethereum neo ethereum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <BarChart />
        <div className="shadow p-6 mt-4">
          <div className="flex ">
            <p>Q forms</p>
            <div className="bg-[#018C79] rounded-full text-xl h-4 w-4 flex justify-center items-center">
            <p className="text-sm">10</p>
          </div>
          </div>
          {form.map((items, index) => (
            <div className="flex flex-col p-2 " key={index}>
              <div className="flex items-center gap-2 justify-center">
                <div className="bg-[#B2DEFF] p-4  rounded-full text-xl h-6 w-6 flex justify-center items-center">
                  <p className="uppercase">{items.name[0]}</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between gap-24">
                    <p className="text-sm">{items.name}</p>
                    <p className="text-sm text-gray-500">{items.day}</p>
                  </div>
                  <div className="flex justify-between gap-2">
                    <p className="text-sm text-gray-500">{items.vaca}</p>
                    <p className="text-sm text-gray-500">{items.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <PaginatedTable />
      </div>

    </main>
  );
};

export default Content;
