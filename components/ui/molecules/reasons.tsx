/* eslint-disable @next/next/no-img-element */
import React from "react";

const reasonsData = [
  {
    icon: "/icons/international.svg",
    text: "Quality Education",
  },
  {
    icon: "/icons/arts.svg",
    text: "Experienced Teachers",
  },
  {
    icon: "/icons/learnerLife.svg",
    text: "Modern Facilities",
  },
  {
    icon: "/icons/leadership.svg",
    text: "Community Support",
  },
  {
    icon: "/icons/away.svg",
    text: "Extracurricular Activities",
  },
  {
    icon: "/icons/languages.svg",
    text: "Personalized Learning",
  },
];

export default function Reasons() {
  return (
    <div className="flex bg-green justify-center mt-12">
      <div className="flex w-3/4 sm:flex-wrap md:space-x-8 p-8">
        <div className="md:w-1/4 pr-8">
          <img src="/icons/reasonLine.svg" alt="Line SVG" className="mb-4" />
          <h4 className="text-primary font-semibold">Reasons</h4>
          <h4 className="text-dark w-[350px] font-bold">
            To join us to joins Green Hills Academy!
          </h4>
        </div>
        <div className="flex md:w-3/4 grid grid-cols-3 gap-4 w-full">
          {reasonsData.map((reason, index) => (
            <div key={index} className="flex items-center space-x-4 mb-4">
              <img
                src={reason.icon}
                alt={`Reason ${index + 1}`}
                className="w-[60px] h-[60px]"
              />
              <h4 className="text-dark w-[172px]">{reason.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
