/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCalendar } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import Event from "../atoms/types";
interface NewsCardProps {
  newsData: Event;
}

const NewsCard: React.FC<NewsCardProps> = ({ newsData }) => {
  const { title, date, description, imageUrl, slug } = newsData;

  // Split description into paragraphs based on line breaks
  const paragraphs = description.split(/\n\s*\n/);

  // Extract the first 30 words from the first paragraph
  const truncatedDescription = paragraphs[0]
    .split(" ")
    .slice(0, 30)
    .join(" ");

  return (
    <div className="grid grid-cols-1 w-full gap-8">
      <div className="w-full gap-8 flex pb-2">
        <div
          className="w-1/2"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="w-1/2">
          <div className="mt-4 flex-col justify-start items-start gap-1 inline-flex">
            <p className="text-sm">Alumni day</p>
            <p className="font-bold">{title}</p>
          </div>
          <div className="text-sm mt-2 text-gray-600 flex flex-row justify-start gap-1 items-center">
            <BiCalendar />
            <p className="text-sm">{date}</p>
          </div>
          <p className="mt-2 text-base font-normal text-justify">
            {truncatedDescription}...
          </p>

          <div className="">
              <button onClick={() => {
                window.location.href = `/news/news/${slug}`;
              }} className="text-white grid place-items-center bg-primary rounded-lg justify-center">
                <div className="flex space-x-4">
                  <span>View more</span>{" "}
                  <BsArrowRight className="text-[yellow] mt-1" />
                </div>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
