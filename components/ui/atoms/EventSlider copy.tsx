/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Bounce_arrow from "./bounce_arrow";

interface NewsAndEvent {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  date: string;
}

interface NewsAndEventSliderProps {
  newsAndEvents: NewsAndEvent[];
}

const EventSlider: React.FC<NewsAndEventSliderProps> = ({ newsAndEvents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex justify-center h-full w-full bg-primary p-4">
      <div className="w-3/4">
        <div className="flex items-center justify-center mb-4">
          <img src="/icons/newsLine.svg" alt="" />
        </div>
        <div className="">
          <h1 className="text-white text-center mb-8">News & Events</h1>
        </div>
        <div className="relative" style={{ minHeight: "100%" }}>
          <Swiper
            pagination={{
              clickable: true,
              el: ".newsSwiper-pagination",
              renderBullet: function (index, className) {
                const isActive = index === currentIndex; // Assuming you have a variable currentIndex

                const bulletStyles = `
               width: ${isActive ? "26px" : "20px"};
               height: 6px;
               background-color: ${
                 isActive ? "white" : "rgba(255, 255, 255, 0.5)"
               };
               margin: 0 5px;
               border-radius: 2px;
             `;

                return `
               <span
                 class="${className}"
                 style="${bulletStyles}"
               ></span>
             `;
              },
            }}
            modules={[Pagination, Autoplay]}
            className="NewsSwiper"
            initialSlide={currentIndex}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            loop={true}
            autoplay={{ delay: 5000 }}
          >
            {newsAndEvents.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center space-x-8 md:space-x-4">
                  <div className="md:w-2/4 text-white p-4">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <span className="text-sm pb-2">{item.date}</span>
                    <p className="text-white text-lg py-4">
                      {item.description}
                    </p>
                    <button
                      onClick={() => {
                        window.location.href = item.link;
                      }}
                      className="bg-white mt-4 h-[47px] w-[178px] text-primary rounded-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out"
                    >
                      Read More →
                    </button>
                  </div>
                  <div className="md:w-3/4 h-full">
                    <img
                      src={item.imageSrc}
                      alt={`News & Event ${index + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
          <Bounce_arrow/>
          <div className="text-center mt-4">
            <div
              className="newsSwiper-pagination"
              style={{ textAlign: "center" }}
            >
              <style>
                {`
                  .newsSwiper-pagination .swiper-pagination-bullet {
                    width: 20px !important;
                    height: 6px !important;
                    background-color: rgba(255, 255, 255, 0.5) !important;
                    margin: 0 5px !important;
                    border-radius: 2px !important;
                  }

                  .newsSwiper-pagination .swiper-pagination-bullet-active {
                    background-color: white !important;
                    width: 26px !important;
                  }
                `}
              </style>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSlider;
