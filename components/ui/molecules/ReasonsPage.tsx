/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

SwiperCore.use([Autoplay, Navigation, Pagination]);

interface CardData {
  title: string;
  content: string;
  imageSrc: string;
}

export default function ReasonsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData: CardData[] = [
    {
      title: "Internationally Accredited ",
      content:
        "We are the only IB world school, Cognia accredited, Round square school, and Label France education in Rwanda ",
      imageSrc: "/images/ch3.jpg",
    },
    {
      title: "Student Leadership ",
      content:
        "Strong student leadership through our school wide assemblies, active student council, and perfect body.",
      imageSrc: "/images/ch2.png",
    },
    {
      title: "Our Arts",
      content:
        "We have a rich arts program with:African Dance, Crafts,  Percussion Music, Kinyarwada for Beginners,School Choir",
      imageSrc: "/images/ch1.png",
    },
    {
      title: "Our Language",
      content:
        "We offer English,French, Kinyarwanda, German, and Mandarin languages",
      imageSrc: "/images/studentimage.jpg",
    },
    {
      title: "Our Sports Teams",
      content:
        "Table Tennis, Basketball, Badminton,Aerobics, Football, Traditional Dance, Karate, Volleyball or Swimming",
      imageSrc: "/images/studentimage1.jpg",
    },
    {
      title: "Learners Life",
      content:
        "Our rich after school life offers various activities and clubs that allow students to explore interests and develop talents",
      imageSrc: "/images/studentimage2.jpg",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };
  const swiperRef = useRef<any>(null);
  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const breakpoints = {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    
  };
  return (
    <div className="flex py-12 justify-center">
      <div className="w-3/4">
        <h1 className="text-center text-primary">Seven reasons to join GHA</h1>
        <div className="flex">
          <h4
            className="swiper-button-prev flex items-center"
            onClick={handlePrevClick}
          >
            <BsChevronDoubleLeft className="rounded-full p-1 w-8 h-8 bg-primary text-white" />
          </h4>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={ {
              el: ".swiper-pagination",
              clickable: true,
            }}
            initialSlide={currentIndex}
            loop={true}
            autoplay={{ delay: 5000 }}
            navigation={false}
            style={{ height: "400px" }}
            breakpoints={breakpoints}
          >
            {cardsData.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`overflow-hidden rounded-lg shadow-lg bottom-4 h-full group w-50 sm:w-auto`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${card.imageSrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="inset-0 flex flex-col items-center h-full px-4 justify-center text-white"
                  >
                    {hoveredIndex === index ? (
                      <div className="border border-white px-2 py-14 rounded-lg">
                        <h2 className="text-[25px] font-semibold text-center mb-2">
                          {card.title}
                        </h2>
                        <p className="text-sm text-center ">{card.content}</p>
                      </div>
                    ) : (
                      <h2 className="text-2xl font-semibold text-center">
                        {card.title}
                      </h2>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <h4
            className="swiper-button-next flex items-center"
            onClick={handleNextClick}
          >
            <BsChevronDoubleRight className="rounded-full p-1 w-8 h-8 bg-primary text-white" />
          </h4>
        </div>
      </div>
    </div>
  );
}
