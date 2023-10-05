import Layout from "@/components/Layout";
import React, { useState } from "react";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";

const LearnersLifeTabContent = () => {
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
                <h1 className="text-primary font-semibold"> Learners Life</h1>
                <div className="flex justify-center">
                  <hr className="w-[75px] h-1.5 bg-[yellow] mb-4" />
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="w-full flex  justify-center">
        <div className="w-3/4 ">
          {expandData.map((item, index) => (
            <div key={index} className="my-4 flex md:flex-row flex-col gap-8 w-full">
              <div
                className={` md:w-1/4 w-full flex items-center  justify-between px-4 py-2 ${
                  activeIndex === index
                    ? "bg-primary text-white"
                    : "bg-[#EAFBF3]"
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
                <p className="md:w-3/4 w-full p-4 text-justify text-stone-500 text-base font-normal bg-white bg-opacity-50">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
    </Layout>
  );
};

export default LearnersLifeTabContent;
