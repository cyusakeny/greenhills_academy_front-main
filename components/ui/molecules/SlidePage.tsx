import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Heading1 from "@/components/ui/atoms/Heading1";
import SwiperCore from "swiper";
import Box from "./box";
import Bounce_arrow from "../atoms/bounce_arrow";

SwiperCore.use([Autoplay]);

const slides = [
  {
    imageSrc: "/images/gha2.jpg",
    title: "Green Hills Academy",
    description: "Bringing out BRILLIANCE in every child",
    buttonText: "View More",
  },
  {
    imageSrc: "/images/studentimage2.jpg",
    title: "News and Events ",
    description: "ENROLLMENT:Discover 6th Grade Event",
    buttonText: "View More",
  },
  {
    imageSrc: "/images/studentimage.jpg",
    title: "Mission & Core Values",
    description: " Inquisitive and Principled Learners",
    buttonText: "View More",
  },
];

export default function SlidePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 200;

      if (scrollY > scrollThreshold) {
        setIsArrowVisible(false);
      } else {
        setIsArrowVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <Swiper
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `
                <div class="custom-pagination-bullet ${className} ${
              index === currentIndex ? "swiper-pagination-bullet-active" : ""
            }"></div>
              `;
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        initialSlide={currentIndex}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full sm:w-full flex items-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${slide.imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "78vh",
              }}
            >
              <div className="flex w-full justify-center">
                <div className="text-center">
                  <p className="text-white sm:text-xs md:text-xl font-['Outfit']">
                    {slide.title}
                  </p>

                  <h1>
                    <div className="text-white">
                      {slide.description}
                    </div>
                  </h1>

                  <button className="mt-8 sm:mt-[50px] text-white text-center bg-[#018C79] rounded-xl text-lg font-semibold font-['Outfit']">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
              {isArrowVisible && <Bounce_arrow />}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="">
        <div className="mb-4 sm:mb-[-120px] swiper-pagination custom-swiper-pagination">
          <style>
            {`
              .swiper-pagination-bullet {
                width: 12px;
                height: 12px;
                background-color: rgba(1, 140, 121) !important;
                opacity: 0.5;
              }

              .swiper-pagination-bullet-active {
                width: 18px;
                height: 18px;
                background-color: white !important;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
}
