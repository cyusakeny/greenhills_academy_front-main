import React from "react";
import Nav from "@/components/ui/molecules/nav";
import SchoolSection from "@/components/ui/molecules/sectionCard";
import Stats from "@/components/ui/molecules/statsCard";
import { useRef } from "react";
import Slider from "@/components/ui/molecules/SlidePage";
import NewsAndEvents from "@/components/ui/molecules/newsAndEvents";
import Footer from "@/components/ui/molecules/footer";
import SocialMediaNews from "@/components/ui/molecules/socialMediaNews";
import Mission from "@/components/ui/molecules/mission";
import Reasons from "@/components/ui/molecules/ReasonsPage";
import RowSection from "../components/ui/molecules/box";
import Box from "../components/ui/molecules/box";

export default function HomePage() {
  // const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <main
    >
      <Slider />
      <div className="md:flex md:items-center md:justify-center py-8">
        <div className="md:w-3/4">
          <SchoolSection />
        </div>
      </div>
      <div className="my-12">
        <Mission />
      </div>
      <div className="bg-green">
        <Reasons />

        <Stats />
      </div>

      <NewsAndEvents />
      {/* <section className="py-4">
        <div id="scroll-container" className="flex">
          <div
            id="scroll-text"
            style={{ fontSize: 70, fontFamily: "fantasy" }}
            className="flex space-x-16 cursor-default text-gray-600 hover:text-green-800 font-bold hover:not-italic italic tracking-wide"
          >
            <img
              src={"/images/admin1.png"}
              alt={"dstv rwanda"}
              className="h-24"
            />
            <img
              src={"/images/admin1.png"}
              alt={"dstv rwanda"}
              className="h-24"
            />
            <img
              src={"/images/admin1.png"}
              alt={"dstv rwanda"}
              className="h-24"
            />
            <img
              src={"/images/admin1.png"}
              alt={"dstv rwanda"}
              className="h-24"
            />
            <img
              src={"/images/admin1.png"}
              alt={"dstv rwanda"}
              className="h-24"
            />
            <img
              src={"/images/admin1.png"}
              alt={"dstv rwanda"}
              className="h-24"
            />
          </div>
        </div>
      </section> */}
      <Box>
        <div className="flex py-12 justify-center flex-grow">
          {" "}
          {/* Center the SocialMediaNews component */}
          <div className="">
            <SocialMediaNews />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="py-12 flex-col justify-center items-center gap-6 inline-flex">
            <h4 className="text-black font-semibold font-['Outfit']">
              Let’s stay in touch
            </h4>
            <div className="justify-start items-start inline-flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-5 py-4 bg-neutral-100 text-lg rounded-tl-2xl rounded-bl-2xl justify-center items-center gap-2.5 flex w-[280px] text-neutral-500 text-lg font-normal font-['Outfit']"
              />
              <button
                onClick={() => {}}
                className="px-8 py-4 bg-primary rounded-tr-2xl rounded-br-2xl justify-center items-center gap-2.5 flex w-[150px] text-center text-white text-lg font-normal font-['Outfit']"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Box>
    </main>
  );
}
