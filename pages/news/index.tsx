import Layout from "@/components/Layout";
import Heading1 from "@/components/ui/atoms/Heading1";
import CalendarCard from "@/components/ui/atoms/calendarCard";
import NewsCard from "@/components/ui/molecules/NewsCard";
import Image from "next/image";
import React, { useState } from "react";
import { BiCalendar, BiSolidOffer } from "react-icons/bi";
import News_tab from "./news_tab";
import Event_tab from "./event_tab";
import Career_tab from "./career_tab";
import { TbTimelineEventText } from "react-icons/tb";
import { ImNewspaper } from "react-icons/im";

export default function News() {
  const [activeTab, setActiveTab] = useState("Events");

  // Create a function to handle tab click
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-[80%] my-12">
          <div className="flex justify-center">
            <div className="text-center">
              <p className="text-lg text-gray-400 font-normal font-['Outfit']">
                Latest
              </p>
              <h1 className="text-primary sm:text-2xl"> News and Events </h1>
            </div>
          </div>
          <div className="flex justify-between my-8 md:gap-8 gap-1 sticky top-0 bg-white w-full py-4">
            <button
              className={`${
                activeTab === "Events"
                  ? "text-white bg-[#018C79] hover:text-white hover:bg-primary"
                  : "text-black bg-green hover:text-white hover:bg-primary"
              } flex items-center rounded-xl justify-center cursor-pointer`}
              onClick={() => handleTabClick("Events")}
            >
              <TbTimelineEventText
                className={`${
                  activeTab === "Events" ? "text-[yellow]" : "text-black"
                }`}
              />{" "}
              &nbsp; Events
            </button>
            <button
              className={`${
                activeTab === "News"
                  ? "text-white bg-[#018C79] hover:text-white hover:bg-primary"
                  : "text-black bg-green hover:text-white hover:bg-primary"
              } flex items-center rounded-xl justify-center cursor-pointer`}
              onClick={() => handleTabClick("News")}
            >
              <ImNewspaper
                className={`${
                  activeTab === "News" ? "text-[yellow]" : "text-black"
                }`}
              />{" "}
              &nbsp; News
            </button>
            <button
              className={`${
                activeTab === "Careers"
                  ? "text-white bg-[#018C79] hover:text-white hover:bg-primary"
                  : "text-black bg-green hover:text-white hover:bg-primary"
              } flex items-center rounded-xl justify-center cursor-pointer`}
              onClick={() => handleTabClick("Careers")}
            >
              <BiSolidOffer
                className={`${
                  activeTab === "Careers" ? "text-[yellow]" : "text-black"
                }`}
              /><h5>Careers</h5>
            </button>
          </div>

          {activeTab === "Events" && (
            <div>
              <Event_tab />
            </div>
          )}
          {activeTab === "News" && (
            <div>
              <News_tab />
            </div>
          )}
          {activeTab === "Careers" && (
            <div>
              <Career_tab />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
