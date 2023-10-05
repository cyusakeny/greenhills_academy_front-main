/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";

const schoolData = [
  {
    title: "Nursery School",
    icon: "/images/nursary.JPG",
    text: "Information about the nursery school goes here.",
    link: "/nursery",
    hoverColor: "#FFA500",
  },
  {
    title: "Primary School",
    icon: "/images/primay.JPG",
    text: "Information about the primary school goes here.",
    link: "/primary",
    hoverColor: "#FFA500",
  },
  {
    title: "Middle School",
    icon: "/images/middle.JPG",
    text: "Information about the middle school goes here.",
    link: "/middleyears",
    hoverColor: "#003A71",
  },
  {
    title: "High School",
    icon: "/images/high.JPG",
    text: "Information about the high school goes here.",
    link: "/diplomaprogram",
    hoverColor: "#7E3908",
  },
];

export default function SchoolSection() {
  return (
      <section className="flex justify-center">
        <div className="w-[90%] bg-primary p-8 rounded-2xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {schoolData.map((school, index) => (
            <div
              className="pb-4 text-center bg-green rounded-xl shadow"
              key={index}
            >
              <div
                style={{
                  backgroundImage: `url(${school.icon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-40 w-full rounded-xl"
              />
              <h3 className="text-[24px] font-bold mb-2 text-primary">
                {school.title}
              </h3>
              {/* <p className="text-[16px] text-center text-gray-700 mb-4">{text}</p> */}
              <Link
                href={school.link}
                className="font-bold inline-block py-2 px-4 rounded-full text-primary hover:border hover:border-primary"
              >
                Know More →
              </Link>
            </div>
          ))}
        </div>
        <div className="flex mt-12 justify-center">
          <hr className="w-1/4 h-1 bg-[yellow]"/>
        </div>
        </div>
       
      </section>
  );
}
