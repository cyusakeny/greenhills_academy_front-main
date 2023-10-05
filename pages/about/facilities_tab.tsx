/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";

const FacilitiesTabContent = () => {
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
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
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
                <h1 className="text-primary font-semibold">Facilities</h1>
                <div className="flex justify-center">
                  <hr className="w-[75px] h-1.5 bg-[yellow] mb-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="flex w-3/4 mt-12 md:uppercase  items-center justify-evenly md:justify-between md:p-4 sm:py-4 border-b-2 rounded-xl bg-green">
            <li className="md:mr-4 sm:hidden">
              <a
                className={`text-gray-600 md:p-4  sm:py-4 hover:text-primary font-[Outfit] relative ${
                  activeTab === "about" ? "font-bold" : "font-bold"
                }`}
                href="#about"
                onClick={() => handleTabClick("about")}
              >
                Extracurricular Activities
                {activeTab === "about" && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary font-[Outfit]"></span>
                )}
              </a>
            </li>
            <li className="md:mr-4 md:hidden">
              <a
                className={`text-gray-600 md:p-4 sm:py-4 hover:text-primary sm:text-[10px] font-[Outfit] relative ${
                  activeTab === "about" ? "font-bold" : "font-bold"
                }`}
                href="#about"
                onClick={() => handleTabClick("about")}
              >
                Extra-curricular
                {activeTab === "about" && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary font-[Outfit]"></span>
                )}
              </a>
            </li>
            <li className="md:mr-4">
              <a
                className={`text-gray-600 md:p-4 sm:py-4 hover:text-primary sm:text-[10px] font-[Outfit] relative ${
                  activeTab === "faq" ? "font-bold" : "font-bold"
                }`}
                href="#faq"
                onClick={() => handleTabClick("faq")}
              >
                Creative Offers
                {activeTab === "faq" && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary font-[Outfit]"></span>
                )}
              </a>
            </li>
            <li className="md:mr-4 sm:hidden">
              <a
                className={`text-gray-600 md:p-4 sm:py-4 hover:text-primary font-[Outfit] relative ${
                  activeTab === "awards" ? "font-bold" : "font-bold"
                }`}
                href="#award"
                onClick={() => handleTabClick("awards")}
              >
                Learners Clubs
                {activeTab === "awards" && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary font-[Outfit]"></span>
                )}
              </a>
            </li>
            <li className="md:mr-4 sm:hidden">
              <a
                className={`text-gray-600 md:p-4 sm:py-4 hover:text-primary font-[Outfit] relative ${
                  activeTab === "message" ? "font-bold" : "font-bold"
                }`}
                href="#message"
                onClick={() => handleTabClick("message")}
              >
                A Message from High School Learners
                {activeTab === "message" && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary font-[Outfit]"></span>
                )}
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full flex  justify-center">
          {activeTab === "about" && (
            <div className="w-3/4 my-28 md:gap-12  gap-0 flex md:flex-row flex-col items-center my-16 justify-between ">
              <div className="md:w-1/2 w-full flex flex-col gap-6 mt-4 items-start my-16 justify-start">
                <h2 className="text-primary font-bold font-['Outfit']">
                  Extracurricular Activities
                </h2>
                <hr className="w-[75px]  h-1.5 bg-primary mb-4" />
                <p className="text-justify sm:text-base py-4 font-normal font-['Outfit']">
                  With more than 35 clubs and other extracurricular activities
                  to choose from, Green Hills Academy learners know that school
                  isn’t just about what happens in the classroom. With more than
                  35 clubs and other extracurricular activities to choose from,
                  Green Hills Academy learners know that school isn’t just about
                  what happens in the classroom. Our Green Hills Academy
                  Nursery, Primary, Middle and High School educators and
                  Principals oversee a wide range of after-school
                  extracurricular activities ( ECAs) for learners in pre-K –
                  Grade 12. Some activities, such as our High School Model UN
                  Program, demand a substantial commitment of time. Others are
                  much less-labor intensive, and are extremely fun and
                  exhilarating activities for our learners to take part in. And
                  all of these ECAs give our learners the opportunity to learn
                  new skills, follow special interests, and meet learners from
                  other grades. They also give our learners, faculty members and
                  educators from the Kigali community, who come in to offer
                  several of these activities, the chance to collaborate on a
                  unique basis that enriches our community in myriad ways
                </p>
              </div>

              <div
                className="md:w-1/2 w-full md:h-full h-[432px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/educationgrp.png)`,
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          )}
          {activeTab === "faq" && (
            <div className="w-3/4  my-28 md:flex-row flex-col gap-12 flex items-center my-16 justify-between ">
              <div className="md:w-1/2 w-full flex flex-col gap-6 mt-4 items-start my-16 justify-start">
                <h2 className="text-primary font-bold font-['Outfit']">
                  Creative Offers
                </h2>
                <hr className="w-[75px]  h-1.5 bg-primary mb-4" />
                <p className="text-justify sm:text-base py-4 font-normal font-['Outfit']">
                  In Nursery School, we offer such creative and exciting ECAs as
                  Kinyarwanda Traditional Music and Dance, Story-Telling and
                  Bookmaking, Swimming, Hip-Hop, Expressive Arts, Ballet and
                  Judo. Learners in our Primary School can enjoy, and choose
                  from, such incredible offerings as African Dance, Arts and
                  Crafts, Football, Gymnastics, Hip-Hop Dance, Traditional Dance
                  and Drumming, Kinyarwada for Beginners, Percussion Music,
                  Reading, School Choir, Swimming, and Tae Kwon Do.
                </p>
                <p className="text-justify sm:text-base py-4 font-normal font-['Outfit']">
                  Our Middle School learners can experience a wide variety of
                  stimulating after-school activities, as well: Traditional
                  Dance, Swimming, Spanish for Beginners, Cooking, Chess, Social
                  Mixed Football, Girls or Boys Football, Athletics, Tai Chi,
                  Art, Drama, French Drama, Basketball, Chess, Social Media,
                  Debate.
                </p>
              </div>
              <div
                className="md:w-1/2 w-full md:h-full h-[432px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/educationgrp.png)`,
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          )}
          {activeTab === "awards" && (
            <div className="w-3/4 my-28 gap-12 flex items-center my-16 justify-between ">
              <div className="w-1/2 flex flex-col gap-6 mt-4 items-start my-16 justify-start">
                <h2 className="text-primary font-bold font-['Outfit']">
                  Learners Clubs
                </h2>
                <hr className="w-[75px] h-1.5 bg-primary mb-4" />
                <p className="text-justify py-4 font-normal font-['Outfit']">
                  Our High School learners enjoy a host of possibilities to
                  connect with like-minded peers in our learner clubs and
                  organizations. For those high school learners who enjoy
                  ‘intellectual exercise’, they may join Model UN, the Chess
                  Club, the Book Club, the Science Club, Beginning Band, Debate,
                  Interact, Drama, Yearbook or Cooking. And those High School
                  learners who enjoy physical exercise may take part in
                  Badminton, Modern Dance, Aerobics, Table Tennis, Football,
                  Traditional Dance, Karate, Volleyball or Swimming.
                </p>
                <p className="text-justify py-4 font-normal font-['Outfit']">
                  We encourage all of our GHA learners to participate in one or
                  more of these extracurricular activities, something that
                  demonstrates just how much our school believes in
                  self-reliance, knowledge of oneself and a capacity for
                  leadership. These ECAs also allow our learners to learn that
                  the activities are another opportunity to “let their lives
                  speak.”
                </p>
              </div>

              <div
                className="w-1/2 h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/educationgrp.png)`,
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          )}
          {activeTab === "message" && (
            <div className="w-3/4 my-28 gap-12 flex items-center my-16 justify-between ">
              <div className="w-1/2 flex flex-col gap-6 mt-4 items-start my-16 justify-start">
                <h2 className="text-primary font-bold font-['Outfit']">
                  A Message from High School Learners
                </h2>
                <hr className="w-[75px] h-1.5 bg-primary mb-4" />
                <p className="text-justify py-4 font-normal font-['Outfit']">
                  All Green Hills Academy learners and staff members, together,
                  form a tight knit community, with individuals advising and
                  helping one another. It’s not a rare sight to find learners
                  conversing with educators, and other school staff during break
                  or lunch. It is also vibrant, with a variety of personalities
                  and nationalities represented, and a number of activities to
                  choose from.
                </p>
                <p className="text-justify py-4 font-normal font-['Outfit']">
                  Has your opinion ever been challenged? Welcome to the Theory
                  of Knowledge class, which is part of the International
                  Baccalaureate programme. With a wide variety of individuals
                  and opinions, one must adapt and be open- minded to the new
                  opinions. Your views and beliefs are constantly attacked,
                  which teaches you to defend them and become reflective of your
                  own and other’s opinions. Through various courses learners are
                  able to use their learning to solve real life experiences,
                  preparing them to steadily integrate into the community once
                  they graduate.
                </p>
                <p className="text-justify py-4 font-normal font-['Outfit']">
                  The Green Hills Academy meals are generally large and
                  satisfying. The welcoming kitchen staff offers a vegetarian
                  option, therefore all learners are catered for. We have break
                  and lunch, daily, except for Wednesday and Friday, where
                  lessons go up to half day. Break consists of cookies, cake or
                  mandazi, an African delicacy, with a cup of tea and juice.
                  While lunch offers diverse platters including spaghetti
                  bolognaise, accompanied by legumes and fruits.
                </p>
                <p className="text-justify py-4 font-normal font-['Outfit']">
                  Extracurricular activities include sports, cooking, music,
                  Model United Nations and debate. Sports not only enhance
                  competition and teamwork, it also aids learners to deal with
                  the daily stress of school assignments. The school band
                  performs annually across Rwanda allowing learners to nurture
                  their performance skills. Model United Nations and debate
                  allows learners to intelligently and eloquently, argue and
                  defend their perspectives. The two extracurricular activities
                  produce international-minded individuals ready to discuss
                  global issues.
                </p>
                <p className="text-justify py-4 font-normal font-['Outfit']">
                  Written by two Grade 12 learners, Jesse and Raissa{" "}
                </p>
              </div>
              <div
                className="w-1/2 h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/educationgrp.png)`,
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default FacilitiesTabContent;
