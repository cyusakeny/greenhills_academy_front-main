import Link from "next/link";
import React from "react";

export const ProgressBars = () => {
  const grades = [
    {
      number: 1,
      students: 500,
      percentage: 67,
      sup: "st",
    },
    {
      number: 2,
      students: 500,
      percentage: 12,
      sup: "sd",
    },
    {
      number: 3,
      students: 500,
      percentage: 53,
      sup: "nd",
    },
    {
      number: 4,
      students: 500,
      percentage: 70,
      sup: "th",
    },
  ];

  return (
    <div className="shadow p-4 ml-4 mt-2 ">
      <div className="flex justify-between mt-1 mb-2">
        <div className="flex ">
          <p>Admissions</p>
          <div className="bg-[#018C79] rounded-full text-xl h-4 w-4 flex justify-center items-center">
            <p className="text-sm">10</p>
          </div>
        </div>

        <Link href="" className="text-[#018C79]">
          View All
        </Link>
      </div>
      <div>
        {grades.map((grade: any, index: number) => (
          <div key={index} className="flex justify-center  items-center">
            <div className="flex items-center gap-2 p-1 px-2 rounded-md bg-[#E5F4FF]">
              <p>
                {grade.number}
                <sup>{grade.sup}</sup>
              </p>
              <p className="text-gray-500 text-sm">grade</p>
            </div>
            <div className="flex flex-col">
              <p className="text-md  mb-[-20px] ml-[15px]">
                {grade.students}{" "}
                <span className="text-sm text-gray-500">students</span>
              </p>
              <div className="h-[8px] text-sm  w-[200px] bg-slate-300 rounded-lg m-4">
                <div
                  className="h-[100%] bg-[#018C79] rounded-lg items-start "
                  style={{ width: `${grade.percentage}%` }}
                >
                  <span> </span>
                </div>
              </div>
            </div>
            <p className="text-sm">{grade.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};
