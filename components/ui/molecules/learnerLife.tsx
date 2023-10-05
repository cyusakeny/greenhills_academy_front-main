import React, { useState } from "react";
import Image from "next/image";
import {
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
} from "react-icons/bs";
export default function LearnersLife() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const expandData = [
    {
      title: "Extracurricular Activities",
      content:
        "Green Hills Academy nurtures a community of caring, inquisitive and principled  learners who pursue excellence and contribute to an equitable world.",
    },
    {
      title: "Creative Officers",
      content:
        "With more than 35 clubs and other extracurricular activities to choose from, Green Hills Academy learners know that school isn’t just about what happens in the classroom. With more than 35 clubs and other extracurricular activities to choose from, Green Hills Academy learners know that school isn’t just about what happens in the classroom. Our Green Hills Academy Nursery, Primary, Middle and High School educators and Principals oversee a wide range of after-school extracurricular activities ( ECAs) for learners in pre-K – Grade 12. Some activities, such as our High School Model UN Program, demand a substantial commitment of time. Others are much less-labor intensive, and are extremely fun and exhilarating activities for our learners to take part in. And all of these ECAs give our learners the opportunity to learn new skills, follow special interests, and meet learners from other grades. They also give our learners, faculty members and educators from the Kigali community, who come in to offer several of these activities, the chance to collaborate on a unique basis that enriches our community in myriad ways. ",
    },
    {
      title: "Learners Clubs",
      content:
        "With more than 35 clubs and other extracurricular activities to choose from, Green Hills Academy learners know that school isn’t just about what happens in the classroom. With more than 35 clubs and other extracurricular activities to choose from, Green Hills Academy learners know that school isn’t just about what happens in the classroom. Our Green Hills Academy Nursery, Primary, Middle and High School educators and Principals oversee a wide range of after-school extracurricular activities ( ECAs) for learners in pre-K – Grade 12. Some activities, such as our High School Model UN Program, demand a substantial commitment of time. Others are much less-labor intensive, and are extremely fun and exhilarating activities for our learners to take part in. And all of these ECAs give our learners the opportunity to learn new skills, follow special interests, and meet learners from other grades. They also give our learners, faculty members and educators from the Kigali community, who come in to offer several of these activities, the chance to collaborate on a unique basis that enriches our community in myriad ways. ",
    },
    {
      title: "A message from high school learners",
      content:
        "With more than 35 clubs and other extracurricular activities to choose from, Green Hills Academy learners know that school isn’t just about what happens in the classroom. With more than 35 clubs and other extracurricular activities to choose from, Green Hills Academy learners know that school isn’t just about what happens in the classroom. Our Green Hills Academy Nursery, Primary, Middle and High School educators and Principals oversee a wide range of after-school extracurricular activities ( ECAs) for learners in pre-K – Grade 12. Some activities, such as our High School Model UN Program, demand a substantial commitment of time. Others are much less-labor intensive, and are extremely fun and exhilarating activities for our learners to take part in. And all of these ECAs give our learners the opportunity to learn new skills, follow special interests, and meet learners from other grades. They also give our learners, faculty members and educators from the Kigali community, who come in to offer several of these activities, the chance to collaborate on a unique basis that enriches our community in myriad ways. ",
    },
  ];

  const divStyle = {
    backgroundImage: 'url("/images/learnerlife.png")',
  };
  return (
    <div className="mt-12 w-full  grid grid-rows-1 gap-6">
      <div
        className=" mx-[12%] relative h-[293px] bg-no-repeat"
        style={divStyle}
      >
        <div>
          <div
            className=" absolute w-full h-[293px] flex justify-center items-center text-center text-white text-[23px] font-semibold"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            Learners Life
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
      <div className="w-3/4 ">
        {expandData.map((item, index) => (
          <div key={index} className="my-4 flex gap-8 w-full">
            <div
              className={`w-1/4 flex items-center justify-between px-4 py-2 ${
                activeIndex === index ? "bg-primary text-white" : "bg-[#EAFBF3]"
              } cursor-pointer`}
              onClick={() => handleAccordionClick(index)}
            >
              <h2 className="text-lg font-medium">{item.title}</h2>
              {activeIndex === index ? (
                <BsChevronLeft className="w-6 h-6" />
              ) : (
                <BsChevronDown className="w-6 h-6" />
              )}
            </div>
            {activeIndex === index && (
              <p className="w-3/4 p-4 text-justify text-stone-500 text-base font-normal bg-white bg-opacity-50">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
