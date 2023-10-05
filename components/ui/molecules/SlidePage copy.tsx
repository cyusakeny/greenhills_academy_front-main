import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Heading1 from "@/components/ui/atoms/Heading1";
import SwiperCore from "swiper";
import { BsArrowDown } from "react-icons/bs";
import Bounce_arrow from "../atoms/bounce_arrow";
import Box from "./box";

SwiperCore.use([Autoplay]);

const slides = [
  {
    imageSrc: "/images/gh1.png",
    title: "Green Hills Academy",
    description: "Bringing out BRILLIANCE in every child",
    buttonText: "Learn More →",
  },
  {
    imageSrc: "/images/studentimage2.jpg",
    title: "News and Events ",
    description: "ENROLLMENT:Discover 6th Grade Event",
    buttonText: "Learn More →",
  },
  {
    imageSrc: "/images/studentimage.jpg",
    title: "Mission & Core Values",
    description: " Inquisitive and Principled Learners",
    buttonText: "Learn More →",
  },
];

export default function SlidePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.realIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Change to 2000 for a 2-second interval

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <div className="">
        <Swiper
          pagination={{
            type: "custom",
            renderCustom: (swiper, current, total) => {
              let paginationHTML = "";
              for (let i = 0; i < total; i++) {
                paginationHTML += `
                  <div class="custom-pagination-bullet ${
                    current === i ? "custom-pagination-bullet-active" : ""
                  }"></div>
                `;
              }
              return paginationHTML;
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          initialSlide={currentIndex}
          onSlideChange={handleSlideChange}
          autoplay={{ delay: 5000 }} // Use Swiper's autoplay property
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full flex bg-cover bg-center items-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${slide.imageSrc})`,
                }}
              >
                <div className="flex-col justify-end items-start gap-8 h-[50%] flex ml-8 h-full">
                  <div className="text-white text-2xl font-semibold font-['Outfit']">
                    {slide.title}
                  </div>
                  <h1 className="text-white">{slide.description}</h1>

                  <button className="mt-8 w-[212.09px] text-white py-3 text-center bg-[#018C79] rounded-xl text-lg font-semibold font-['Outfit']">
                    {slide.buttonText}
                  </button>
                  <Bounce_arrow/>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="">
        <div className="swiper-pagination custom-swiper-pagination">
          <style>
            {`
              .swiper-pagination-bullet {
                width: 12px;
                height: 12px;
                background-color: #ddd;
                opacity: 0.5;
              }

              .swiper-pagination-bullet-active {
                width: 18px;
                height: 18px;
                background-color: #0073e6;
              }
            `}
          </style>
        </div>
      </div>
    </Box>
  );
}
