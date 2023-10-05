/* eslint-disable @next/next/no-img-element */
import CalendarCard from "@/components/ui/atoms/calendarCard";
import EventCard from "@/components/ui/molecules/EventCard";
import NewsCard from "@/components/ui/molecules/NewsCard";
import Link from "next/link";
import React from "react";
import { BiCalendar } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import Event from "../../components/ui/atoms/typesEvent";

const Event_tab = () => {
  const eventData: Event[] = [
    {
      title: "Rwanda Culture Day",
      date: "Dec 12 2023",
      description: `On Friday 28th August, 2020, the Nursery Principal, Ms. Carmel Faulkner held a virtual Parents Night with current and prospective nursery parents. At Green Hills Academy, we recognize parents are their child’s first, continuous and most important educator. We also understand that balancing home schooling, work and family commitments during the COVID closure is a huge challenge. Our nursery ‘at home learning’ aims to provide practical`,
      imageUrl: "/images/virtual.png",
      moreImages: ["/images/virtual.png", "/images/virtual.png"],
      slug: "deploy_virtual",
    },
    {
      title: "Multiculture Day",
      date: "Dec 12 2023",
      description: `On Friday 28th August, 2020, the Nursery Principal, Ms. Carmel Faulkner held a virtual Parents Night with current and prospective nursery parents. At Green Hills Academy, we recognize parents are their child’s first, continuous and most important educator. We also understand that balancing home schooling, work and family commitments during the COVID closure is a huge challenge. Our nursery ‘at home learning’ aims to provide practical`,
      imageUrl: "/images/parental.png",
      moreImages: ["/images/virtual.png", "/images/virtual.png"],
      slug: "parental_night",
    },
    {
      title: "Gasabo",
      date: "Dec 12 2023",
      description: `On Friday 28th August, 2020, the Nursery Principal, Ms. Carmel Faulkner held a virtual Parents Night with current and prospective nursery parents. At Green Hills Academy, we recognize parents are their child’s first, continuous and most important educator. We also understand that balancing home schooling, work and family commitments during the COVID closure is a huge challenge. Our nursery ‘at home learning’ aims to provide practical`,
      imageUrl: "/images/firstlady.png",
      moreImages: ["/images/virtual.png", "/images/virtual.png"],
      slug: "what_it_takes",
    },
    {
      title: "Christmas Concert",
      date: "Dec 12 2023",
      description: `On Friday 28th August, 2020, the Nursery Principal, Ms. Carmel Faulkner held a virtual Parents Night with current and prospective nursery parents. At Green Hills Academy, we recognize parents are their child’s first, continuous and most important educator. We also understand that balancing home schooling, work and family commitments during the COVID closure is a huge challenge. Our nursery ‘at home learning’ aims to provide practical`,
      imageUrl: "/images/ghatraining.png",
      moreImages: ["/images/virtual.png", "/images/virtual.png"],
      slug: "gha_training",
    },
    {
      title: "Graduation",
      date: "Dec 12 2023",
      description: `On Friday 28th August, 2020, the Nursery Principal, Ms. Carmel Faulkner held a virtual Parents Night with current and prospective nursery parents. At Green Hills Academy, we recognize parents are their child’s first, continuous and most important educator. We also understand that balancing home schooling, work and family commitments during the COVID closure is a huge challenge. Our nursery ‘at home learning’ aims to provide practical`,
      imageUrl: "/images/ghatraining.png",
      moreImages: ["/images/virtual.png", "/images/virtual.png"],
      slug: "gha_training",
    },
  ];

  const eventDataSubset = eventData.slice(1);
  const firstEvent = eventData[0];
  const paragraphs = firstEvent.description.split(/\n\s*\n/);
  const truncatedDescription = paragraphs[0].split(" ").slice(0, 30).join(" ");
  return (
    <div className="w-full">
      <div className="w-full mt-16 justify-self-center h-auto flex md:flex-row flex-col items-center gap-16 justify-center">
        <img
          src={firstEvent.imageUrl}
          alt={firstEvent.title}
          className="w-[424px] h-[314px] rounded-[36px]"
        />
        <div className="md:w-1/2 flex-col justify-start items-start gap-4 inline-flex">
          <div className="flex-col justify-start items-start gap-2 flex">
            <h2 className="font-bold">{firstEvent.title}</h2>
            <div className="text-sm mt-2 text-gray-600 flex flex-row justify-start gap-1 items-center">
              <BiCalendar />
              <p className="text-sm">{firstEvent.date}</p>
            </div>
          </div>
          <p className="w-full text-lg text-black font-['Outfit'] text-justify">
            {truncatedDescription}...
          </p>
          <button
            onClick={() => {
              window.location.href = `/news/event_page/${firstEvent.slug}`;
            }}
            className="text-white grid place-items-center bg-primary rounded-lg justify-center"
          >
            <div className="flex space-x-4">
              <span>Read more</span>{" "}
              <BsArrowRight className="text-[yellow] mt-1" />
            </div>
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-1 sm:my-4 md:my-16 gap-8">
          {eventDataSubset.map((event, index) => (
            <EventCard key={index} eventData={event} />
          ))}
        </div>
      </div>
      <div className="pb-[22px] mt-12 grid grid-rows-1 gap-8">
        <h1 className="text-primary">Upcoming Events Calendar</h1>
        <hr className="w-[75px] h-1.5 bg-primary mb-4" />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <CalendarCard />
          <CalendarCard />
          <CalendarCard />
          <CalendarCard />
        </div>
      </div>
    </div>
  );
};

export default Event_tab;
