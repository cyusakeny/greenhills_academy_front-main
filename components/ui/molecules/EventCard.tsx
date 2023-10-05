/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiCalendar } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import Event from "../atoms/typesEvent";
interface EventCardProps {
  eventData: Event;
}

const EventCard: React.FC<EventCardProps> = ({ eventData }) => {
  const { title, date, description, imageUrl, slug, moreImages } = eventData;

  // Split description into paragraphs based on line breaks
  const paragraphs = description.split(/\n\s*\n/);

  // Extract the first 30 words from the first paragraph
  const truncatedDescription = paragraphs[0].split(" ").slice(0, 30).join(" ");
  return (
    <div className="w-full gap-8 pb-2">
      <div>
        <div
          className="w-full h-[200px] flex items-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="justify-end flex">
          <button
            onClick={() => {
              window.location.href = `/news/event_page/${slug}`;
            }}
            className="text-white -mt-4 grid place-items-center bg-primary rounded-lg justify-center"
          >
            <div className="flex space-x-4">
              <span>Read more</span>{" "}
              <BsArrowRight className="text-[yellow] mt-1" />
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className="mt-4 flex-col justify-start items-start gap-1 inline-flex">
          <p className="text-sm">Alumni day</p>
          <p className="font-bold ">{title}</p>
        </div>
        <div className="text-sm mt-2 text-gray-600 flex flex-row justify-start gap-1 items-center">
          <BiCalendar />
          <p className="text-sm">{date}</p>
        </div>
        <p className=" mt-2 text-base font-normal text-justify">
          {truncatedDescription}...
        </p>
      </div>
    </div>
  );
};

export default EventCard;
