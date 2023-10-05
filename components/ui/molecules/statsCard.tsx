/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";


const Stats = () => {
  const [learnerCount, setLearnerCount] = useState<number>(0);
  const [nationalityCount, setNationalityCount] = useState<number>(0);
  const [courseCount, setCourseCount] = useState<number>(0);
  const [educatorCount, setEducatorCount] = useState<number>(0);

  useEffect(() => {
    // Define the final values for each statistic
    const finalLearnerCount = 2000;
    const finalNationalityCount = 60;
    const finalCourseCount = 80;
    const finalEducatorCount = 180;

    // Create a function to increment the counts
    const incrementCounts = () => {
      if (learnerCount < finalLearnerCount) {
        setLearnerCount(learnerCount + 10);
      }
      if (nationalityCount < finalNationalityCount) {
        setNationalityCount(nationalityCount + 10);
      }
      if (courseCount < finalCourseCount) {
        setCourseCount(courseCount + 10);
      }
      if (educatorCount < finalEducatorCount) {
        setEducatorCount(educatorCount + 10);
      }
    };

    // Use a timer to increment counts at intervals (adjust interval as needed)
    const timer = setInterval(incrementCounts, 10);

    // Clear the timer when counts reach their final values
    return () => clearInterval(timer);
  }, [learnerCount, nationalityCount, courseCount, educatorCount]);

  return (
    <div
      className="w-full sm:h-[200px] h-[400px] bg-fixed bg-cover bg-no-repeat bg-center flex justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(/images/admin1.png)",
      }}
    >
      <div className="w-2/3 place-items-center grid grid-cols-4 gap-4">
        <div className="">
          <div className="flex justify-center">
            <img
              src="/icons/learner.svg"
              alt=""
              className="sm:w-[30px] sm:h-[30px] w-[60px] h-[60px]"
            />
          </div>
          <h1 className="text-center  text-[yellow] font-black">
            {learnerCount}
          </h1>
          <p className="sm:text-xs text-white text-center">Learners</p>
        </div>
        <div className="">
          <div className="flex justify-center">
            <img
              src="/icons/international.svg"
              alt=""
              className="sm:w-[30px] sm:h-[30px] w-[60px] h-[60px]"
            />
          </div>
            <h1 className="text-center text-[yellow] font-black">
              {nationalityCount}+
            </h1>
            <p className="sm:text-xs text-white text-center">Nationalities</p>
        </div>

        <div className="">
          <div className="flex justify-center">
            {" "}
            <img
              src="/icons/diploma.svg"
              alt=""
              className="sm:w-[30px] sm:h-[30px] w-[60px] h-[60px]"
            />
          </div>
            <h1 className="text-center  text-[yellow] font-black">
              {courseCount}+
            </h1>
            <p className="sm:text-xs text-white text-center">Courses</p>
        </div>
        <div className="">
          <div className="flex justify-center">
            <img src="/icons/shield.svg" alt="" className="sm:w-[30px] sm:h-[30px] w-[60px] h-[60px]" />
          </div>
            <h1 className="text-center text-[yellow] font-black">
              {educatorCount}
            </h1>
            <p className="sm:text-xs text-white text-center">Educators</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
