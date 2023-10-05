/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import SwiperCore from "swiper";

SwiperCore.use([Autoplay]);

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
      <div className="md:w-3/4 sm:w-[90%]">
        <div className="flex justify-center">
          <div className="w-[55px] grid place-items-center">
            <div className="w-[18px] h-[7px] my-2 bg-[yellow]" />
            <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
          </div>
        </div>
        <div className="">
          <h1 className="text-white text-center mb-8">News & Events</h1>
        </div>
        <Swiper
          pagination={{
            clickable: true,
            el: ".newsSwiper-pagination",
          }}
          modules={[Pagination, Autoplay]}
          className="NewsSwiper"
          loop={true}
          autoplay={{ delay: 3000 }}
          onSlideChange={(swiper) => {
            const bullets = document.querySelectorAll(
              ".swiper-pagination-bullet"
            );
            bullets.forEach((bullet: Element, index: number) => {
              (bullet as HTMLElement).style.width = "30px";
              (bullet as HTMLElement).style.height = "6px";
              (bullet as HTMLElement).style.backgroundColor =
                "rgba(255, 255, 255, 0.5)";
              (bullet as HTMLElement).style.margin = "0 5px";
              (bullet as HTMLElement).style.borderRadius = "2px";
            });
            const activeBullet = bullets[swiper.realIndex];
            (activeBullet as HTMLElement).style.backgroundColor = "white";
            (activeBullet as HTMLElement).style.width = "50px";
          }}
        >
          {newsAndEvents.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex sm:flex-wrap items-center md:space-x-4">
              <div className="md:hidden sm:w-full h-[600px]">
                  <img
                    src={item.imageSrc}
                    alt={`News & Event ${index + 1}`}
                    className="w-[100%] h-[100%] rounded-2xl"
                  />
                </div>
                <div className="w-1/3 sm:w-full text-justify text-white p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <span className="text-sm pb-2">{item.date}</span>
                  <p className="text-white text-lg py-4">{item.description}</p>
                  <button
                    onClick={() => {
                      window.location.href = item.link;
                    }}
                    className="bg-white mt-4 h-[47px] w-[180px] text-primary rounded-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out"
                  >
                    Read More →
                  </button>
                </div>
                <div className="md:w-3/4 sm:hidden h-[600px]">
                  <img
                    src={item.imageSrc}
                    alt={`News & Event ${index + 1}`}
                    className="w-[100%] h-[100%] rounded-2xl"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
      width: 30px !important;
    }
  `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSlider;
