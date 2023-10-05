/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import React, { useState } from "react";
import { BsChevronRight, BsChevronDown, BsChevronUp } from "react-icons/bs";

const GalleryTabContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const expandData = [
    {
      title: "Rwanda Culture Day",
      content: [
        "/images/admin1.png",
        "/images/class.png",
        "/images/culture.png",
        "/images/director.png",
      ],
    },
    {
      title: "Section 2",
      content: [
        "/images/admin1.png",
        "/images/class.png",
        "/images/culture.png",
        "/images/director.png",
      ],
    },
  ];

  return (
    <Layout>
      <main className="w-full mt-4">
        <div className="flex justify-center">
          <div
            className="w-[80%] h-[471.55px] gap-1 flex flex-col  items-center justify-start "
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/learnerlife.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-full grid place-items-center ">
              <div>
                <h1 className="text-primary font-semibold">GALLERY</h1>
                <div className="flex justify-center">
                  <hr className="w-[75px] h-1.5 bg-[yellow] mb-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
    <div className="flex justify-center my-4">
      <div className="w-3/4 p-4 border rounded-xl">
        {expandData.map((item, index) => (
          <div key={index} className="my-4">
            <div
              className={`flex items-center justify-between p-4 ${
                activeIndex === index ? "bg-primary text-white" : " bg-emerald-50"
              } cursor-pointer`}
              onClick={() => handleAccordionClick(index)}
            >
              <h2 className="text-lg font-medium">{item.title}</h2>
              {activeIndex === index ? (
                <BsChevronUp className="w-6 h-6 text-[yellow]" />
              ) : (
                <BsChevronRight className="w-6 h-6" />
              )}
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-white bg-opacity-50">
                <div className="grid grid-cols-4 gap-4">
                  {item.content.map((imageSrc, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={imageSrc}
                      alt={`Image ${imageIndex}`}
                      className="w-full h-auto"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </main>
    </Layout>
  );
};

export default GalleryTabContent;
