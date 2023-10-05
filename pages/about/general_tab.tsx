/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Stats from "@/components/ui/molecules/statsCard";
import {
  BsChevronRight,
  BsChevronDown,
  BsChevronUp,
  BsArrowRight,
  BsEye,
} from "react-icons/bs";
import { BiVideo } from "react-icons/bi";
import Link from "next/link";

const GeneralTabContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const expandData = [
    {
      title: "Accreditation",
      content:
        "Green Hills Academy nurtures a community of caring, inquisitive and principled  learners who pursue excellence and contribute to an equitable world. Green Hills Academy nurtures a community of caring, inquisitive and principled  learners who pursue excellence and contribute to an equitable world.",
    },
    {
      title: "Green Hills Alumni",
      content:
        "Green Hills Academy nurtures a community of caring, inquisitive and principled  learners who pursue excellence and contribute to an equitable world.",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="w-3/4 grid grid-cols-4 gap-8 h-[30vh]">
         
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/4.JPG)`,
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/1.JPG)`,
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/3.JPG)`,
              backgroundRepeat: "no-repeat",
            }}
          />
           <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/2.JPG)`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
      <div className="flex h-full justify-center">
        <div className="md:w-3/4 w-full gap-4 md:flex-row flex-col flex items-center my-16 gap-[53px] inline-flex">
          <div className="flex flex-col gap-4 md:w-1/2 w-3/4">
            <h2 className="text-primary font-semibold uppercase">
              {" "}
              Who We Are
            </h2>
            <hr className="w-[75px] h-1.5 bg-primary mb-4" />

            <p className="text-xl pt-4 text-justify text-black text-base font-normal ">
              Green Hills Academy is authorized by the International
              Baccalaureate (IB) organisation to offer the Primary Years
              Programme for learners in Nursery 1 to Grade 5, the Middle Years
              Programme for learners in Grades 6 to 10 and the Diploma Programme
              for learners in Grades 11 and 12 . IB World School shares a common
              philosophy and commitment to providing a high quality,
              challenging, international education that prepares learners for
              further study in university and fulfilling lives. For further
              information about the IB and its programmes, visit{" "}
              <a
                href="www.ibo.org"
                target="_blank"
                className="text-primary underline"
              >
                www.ibo.org.
              </a>
            </p>
            <div className="w-[230px]  py-2 mt-6 bg-primary text-white rounded-xl  flex items-center justify-center space-x-2 hover:text-[yellow]">
              <button className="text-white rounded-xl text-2xl w-full  flex flex-row justify-center items-center space-x-2 hover:text-[yellow]">
                <BiVideo className="text-[yellow] " />
                <span>Stream&nbsp;video</span>{" "}
              </button>
            </div>
          </div>
          <div className="w-1/2 flex items-center">
            <div className="flex md:flex-row flex-col md:gap-0 gap-7 items-end">
              <img className="h-[100%]" src="/images/5.JPG" alt="" />
             
            </div>
          </div>
        </div>
      </div>
      {/* <Stats /> */}
      <div className="flex justify-center">
        <div className="w-3/4 my-16 justify-self-center h-auto gap-4 flex flex-col-reverse  md:flex-row justify-start items-center gap-[53px] inline-flex">
          <div
            className="w-1/2 h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/ytr.png)`,
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="flex items-center md:w-1/2 w-full h-full">
            <div className="grid gap-2">
              <h2 className="text-primary uppercase">
                {" "}
                Welcome to Green Hills Academy
              </h2>
              <hr className="w-[75px] h-1.5 bg-primary mb-4" />
              <p className="mt-4 my-2 text-xl font-bold ">Peter B. Fayroian</p>
              <p className="text-zinc-600 text-xl font-normal ">
                Head of School(He/Him/His)
              </p>
              <p className="text-xl pt-4 text-justify font-normal">
                It is a great pleasure to welcome you to Green Hills Academy
                (GHA), the only International Baccalaureate World School and
                LabelFrancÉducation school in Rwanda. At GHA, learners excel
                academically and personally in a safe, caring and vibrant
                learning community. We create energizing, engaging and
                empowering learning experiences that foster a love for learning
                and prepare learners for the future in a continuously changing
                world. Preparing learners for the uncertainties of our future
                world is a challenge that we embrace at GHA by developing
                critical thinking skills, creativity, emotional intelligence,
                self-confidence, resilience and collaboration to solve real
                world problems.
              </p>
              <p className="text-xl pt-4 text-justify font-normal">
                At GHA, academic achievement and personal growth go hand in hand
                to ensure development of the whole child. We provide our
                learners with engaging and challenging learning opportunities
                while encouraging them to do their personal best in every area
                of life. Learners and Educators set goals, and Educator track
                learners’ academic progress to help them achieve goals. We
                inspire learners to reach their full potential, identify and
                develop interests and talents, and become independent and
                self-reliant individuals. We help learners develop excellent
                social skills, understanding and management of emotions, and
                healthy friendships. Our active High School Prefects and Learner
                Council at all grade levels foster learner agency, leadership
                and voice. In addition, learners have many opportunities in
                classes and extracurricular activities to develop artistic,
                cultural, sporting, creative and leadership skills that will
                serve them well during their time at GHA and beyond.
              </p>
              {showMore && (
                <>
                  <p className="text-xl pt-4 text-justify font-normal">
                    With talented Educators from 15 countries and wonderful
                    learners from over 60 countries, GHA’s rich diversity
                    prepares learners for the diverse societies and economies
                    they will join when they enter the workplace. Our learners
                    learn to understand and respect multiple viewpoints, express
                    empathy and compassion for others, and become ethical young
                    people with global understanding and perspective.
                  </p>
                  <p className="text-xl pt-4 text-justify font-normal">
                    Recognizing the significant value of being multilingual, we
                    offer a bilingual French-English program from Nursery
                    through Middle School in addition to our English program
                    from Nursery through Twelfth Grade. We also offer additional
                    language study in Kinyarwanda, German, French and Mandarin.
                  </p>
                  <p className="text-xl pt-4 text-justify font-normal">
                    Widely recognized as one of the best high school programs of
                    study, our International Baccalaureate Diploma Programme
                    (IBDP) prepares learners for admission to excellent
                    universities of choice worldwide. IBDP learners develop a
                    superior breadth and depth of knowledge, essential skills
                    for success and leadership in the 21st century, and
                    attitudes and values based on a sense of shared
                    responsibility for each other. After studying in excellent
                    universities, our learners go on to become leaders in their
                    areas of work and contribute to building a more peaceful and
                    sustainable global society.
                  </p>
                  <p className="text-xl pt-4 text-justify font-normal">
                    While we are proud of the exemplary education we offer and
                    the innumerable successes of our learners, faculty and
                    staff, we are keenly aware that our success is contingent
                    upon the ongoing growth and development of our faculty and
                    staff. To provide an exceptional learning experience for
                    learners, the faculty and staff of a school must
                    continuously learn and grow. Thus, we are constantly engaged
                    in developing our professional practice through training,
                    self reflection, peer feedback and mentoring.
                  </p>
                  <p className="text-xl pt-4 text-justify font-normal">
                    In conclusion, our vibrant learning community’s home is a
                    lush, beautifully landscaped 26-acre campus with
                    purpose-built facilities that include classrooms flooded
                    with natural light, a beautiful pool, spacious gymnasium,
                    science labs, libraries, band room and more. In this
                    gorgeous environment, we live and learn together.
                  </p>
                </>
              )}
              <span className="text-primary cursor-pointer  font-medium font-['Outfit']">
                <a onClick={toggleShowMore} className="md:text-xl text-2xl">
                  {showMore ? "Read less" : "Read more"}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full flex sm:flex-col h-[400px] bg-fixed bg-cover bg-no-repeat bg-center flex justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/images/learners.JPG)",
        }}
      >
        <div className="md:w-2/3 w-full place-items-center grid place-content-center  md:grid-cols-4 grid-cols-2 gap-4">
          <div className="">
            <div className="flex justify-center">
              <img
                src="/icons/learner.svg"
                alt=""
                className="w-[60px] h-[60px]"
              />
            </div>
            <h2 className="text-center  text-[white] font-black">
              Learners life
            </h2>
            <button className="hover:text-[yellow] text-white grid mt-4 place-items-center bg-primary rounded-lg justify-center">
              <Link href="/about/learners_tab" className="flex space-x-4">
                <span>View more</span>
                <BsEye className="text-[yellow] mt-1" />
              </Link>
            </button>
          </div>
          <div className="">
            <div className="flex justify-center">
              <img
                src="/icons/international.svg"
                alt=""
                className="w-[60px] h-[60px]"
              />
            </div>
            <h2 className="text-center text-[white] font-black">Boarding</h2>
            <button className="hover:text-[yellow] text-white grid mt-4 place-items-center bg-primary rounded-lg justify-center">
              <Link href="/about/boarding_tab" className="flex space-x-4">
                <span>View more</span>
                <BsEye className="text-[yellow] mt-1" />
              </Link>
            </button>
          </div>

          <div className="">
            <div className="flex justify-center">
              {" "}
              <img
                src="/icons/diploma.svg"
                alt=""
                className="w-[60px] h-[60px]"
              />
            </div>
            <h2 className="text-center  text-[white] font-black">Facilities</h2>
            <button className="hover:text-[yellow] text-white grid mt-4 place-items-center bg-primary rounded-lg justify-center">
              <Link href="/about/facilities_tab" className="flex space-x-4">
                <span>View more</span>
                <BsEye className="text-[yellow] mt-1" />
              </Link>
            </button>
          </div>
          <div className="">
            <div className="flex justify-center">
              <img
                src="/icons/shield.svg"
                alt=""
                className="w-[60px] h-[60px]"
              />
            </div>
            <h2 className="text-center text-white font-black">
              Accreditations
            </h2>
            <button className="hover:text-[yellow] text-white grid mt-4 place-items-center bg-primary rounded-lg justify-center">
              <Link href="/about/accreditations" className="flex space-x-4">
                <span>View more</span>
                <BsEye className="text-[yellow] mt-1" />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-auto  justify-center">
        <div className="md:w-3/4 w-[91%]  py-16  flex md:flex-row flex-col items-center gap-[53px] ">
          <div className="flex flex-col gap-4 md:w-1/2 w-[91%]">
            <h2 className="text-primary font-semibold uppercase">
              Green Hills Alumni
            </h2>
            <hr className="w-[75px] h-1.5 bg-primary mb-4" />

            <p className="text-xl pt-4 text-justify text-black text-base font-normal ">
              Green Hills Academy alumni have gone on to go to notable
              universities all of over the world; in Rwanda, USA, UK, Canada,
              Holland, China, Germany, Switzerland, Poland, Kenya, Philippines.
              To name a few universities: Harvard University, MIT, Stanford
              University, Dartmouth College, Cornell University, NYU, McGill
              University, University of Rwanda, African Leadership University,
              Kaiserslautern University. Beyond universities our alumni have
              gone to achieve in many fields of endeavours including Tech,
              media, law, entrepreneurs, medicine, the Arts and roles in the
              public service. GHA Alumni we would love to connect with you!
              Please send us an email on marketing@greenhillsacademy.rw and
              update us on what you’re up to today!
            </p>
          </div>
          <div
            className="w-1/2  md:h-full h-[341px] bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/alumni.JPG)`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralTabContent;
