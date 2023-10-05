import Link from "next/link";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import { VscBriefcase } from "react-icons/vsc";

const Career_tab = () => {
  const jobData = [
    {
      slug: "figma-designer",
      title: "Figma Designer",
      type: "Full Time",
      posted: "Posted 12 months ago",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur...",
    },
    {
      slug: "ui-ux-designer",
      title: "UI/UX Designer",
      type: "Part Time",
      posted: "Posted 6 months ago",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur...",
    },
    {
      slug: "marketing-manager",
      title: "Marketing Manager",
      type: "Full Time",
      posted: "Posted 6 months ago",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur...",
    },
  ];
  return (
    <div className="flex justify-center">

    <div className="my-4 w-full">
      <h2 className="font-bold text-primary underline-offset-8 text-center underline decoration-dotted">
      Available Vacancy 
      </h2>
      <p className="text-lg text-center py-4">
        Find The One That’s Right For You
      </p>
      <div className="my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {jobData.map((job, index) => (
          <div key={index} className="border bg-[#EAFBF3] rounded-xl shadow-lg p-2">
            <div
              className="w-full h-[300px] rounded-2xl"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(/images/studentimage.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex-col justify-start items-start gap-8 flex ml-4">
                <div className="grid place-items-center mt-4 text-white px-4 py-1 text-center bg-[yellow] bg-opacity-50 rounded-lg font-semibold font-['Outfit']">
                  <div className="flex">
                    {job.type}{" "}
                    <div className="animate-bounce w-2 h-2 h-full rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <h5 className="text-2xl font-bold text-primary">{job.title}</h5>
              <div className="flex space-x-4 my-2">
                <div className="flex text-sm text-gray-400 space-x-1.5">
                  <VscBriefcase className="text-sm mt-0.5 font-bold" />{" "}
                  <span>{job.type}</span>
                </div>
                <div className="flex text-sm text-gray-400 space-x-1.5">
                  <AiOutlineClockCircle className="text-sm mt-0.5 font-bold" />{" "}
                  <span>{job.posted}</span>
                </div>
              </div>
              <hr />
              <p className="text-justify text-lg my-2">{job.description}</p>
            </div>
            <div className="">
            <button
              onClick={() => {
                window.location.href = `/news/career_tab/${job.slug}`;
              }}
              className="bg-primary rounded-lg mb-4 text-white"
            >
              <div className="flex justify-center space-x-2">
                <span>Apply now</span>{" "}
                <BiSolidStarHalf className="mt-1 text-[yellow]" />
              </div>
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Career_tab;
