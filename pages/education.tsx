/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Heading1 from "@/components/ui/atoms/Heading1";
import DecoratedList from "@/components/ui/atoms/decoratedList";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Education() {
  
  return (
    <Layout>
      <main className="mt-4 mb-12">
        <div
          className="w-full h-[471.55px] bg-no-repeat bg-cover"

        >
          <div
            className="w-full h-[471.55px] gap-1 flex flex-col  items-center justify-end "
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(/images/education.JPG)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex justify-center">
              <div className="w-[55px] grid place-items-center">
                <div className="w-[18px] h-[7px] my-2 bg-[yellow]" />
                <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
              </div>
            </div>
            <h1 className="text-primary capitalize">ACADEMICS</h1>
          </div>
        </div>
        <section className="flex justify-center ">
          <div className="w-[80%] grid grid-rows-1">
            <div className="mt-12 grid md:grid-cols-4 grid-cols-2 gap-4">
              <Link href="/primary">
                {" "}
                <img src="/images/ibpr.png" alt="" className="cursor-pointer" />
              </Link>
              <Link href="/middleyears">
                <img
                  src="/images/ibmid.png"
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
              <Link href="/diplomaprogram">
                <img
                  src="/images/ibdip.png"
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
              <Link href="/diplomaprogram">
                {" "}
                <img
                  src="/images/ibcaree.png"
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex md:flex-row flex-col mt-12 justify-center md:items-center items-start ">
              <div className="flex flex-col gap-4 items-start justify-start">
                <h1 className="text-primary font-bold font-['Outfit']">
                  Overview
                </h1>
                <hr className="w-[75px] h-1.5 bg-primary mb-4" />
                <div className="md:columns-2 columns-1 gap-12">
                  <p className="text-justify sm:text-base py-4 font-normal font-['Outfit']">
                    At Green Hills Academy, we offer an international education
                    from Nursery through Grade 12. We develop our learners into
                    principled, lifelong learners and internationally-minded
                    global citizens who contribute to creating a more peaceful
                    and sustainable world. We also instill in our learners the
                    ability to think critically and independently, act
                    empathically, ethically and courageously, and manage their
                    own learning and lives.
                  </p>
                  <p className="text-justify py-4 sm:text-base font-normal font-['Outfit']">
                    Our educational program is academically challenging,
                    inquiry-based and learner-centered. In addition to providing
                    an excellent academic program, we help our learners develop
                    essential 21st century skills such as research, critical
                    thinking, communication, collaboration and social skills. We
                    connect learning to real life and help learners develop
                    problem solving and self management skills.
                  </p>
                  <p className="text-justify py-4 sm:text-base font-normal font-['Outfit']">
                    Our International Baccalaureate Primary Years, Middle Years
                    and Diploma Programmes offer challenging and engaging
                    learning experiences. Upon graduation from Green Hills
                    Academy with an International Baccalaureate Diploma, our
                    learners gain admission to and excel in excellent
                    universities around the world.
                  </p>
                  <p className="text-justify py-4 sm:text-base font-normal font-['Outfit']">
                    <span className="pb-4 font-bold">
                      English and French/English Programs and Other Languages
                    </span>
                    <br />
                    We offer an English program and a French/English dual
                    language immersion program from Nursery through Grade 8. In
                    the English program all subjects are taught in English,
                    except other languages. In the French/English (50/50)
                    program, we teach core subjects in English and French. In
                    our French/English program, learners develop proficiency in
                    English and French. We also offer German, Mandarin and
                    Kinyarwanda. We are committed to helping our learners
                    develop language proficiency in more than one language.{" "}
                  </p>
                </div>
              </div>
              {/* <div
              className="w-1/2 h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(/images/ytr.png)`,
                backgroundRepeat: "no-repeat",
              }}
            /> */}
            </div>
            <div className="w-full mt-28 mb-16 gap-12 md:flex-row flex-col flex items-center justify-center ">
              <div className="w-1/2 h-auto relative flex justify-center items-center">
                <Image
                  src="/images/educationback.png"
                  className="md:w-[323px] w-[220px] md:h-[273px] h-[186px] z-20"
                  width={332}
                  height={322}
                  alt=""
                />
                <Image
                  src="/images/Mask1.png"
                  className="md:bottom-28 md:left-28 bottom-28 left-[-78px] absolute md:w-[212px] w-[150px] md:h-[277px] h-[195px] z-40"
                  width={332}
                  height={322}
                  alt=""
                />
                <Image
                  src="/images/Mask2.png"
                  className="md:bottom-48 md:right-16 bottom-44 right-[-34px] absolute md:w-[212px] w-[150px] md:h-[131px] h-[92px] z-40"
                  width={332}
                  height={322}
                  alt=""
                />
                <Image
                  src="/images/Mask3.png"
                  className="md:top-48 md:left-28 top-28 left-[-78px] absolute md:w-[212px] w-[150px] md:h-[131px] h-[92px] z-40"
                  width={332}
                  height={322}
                  alt=""
                />
                <Image
                  src="/images/Mask4.png"
                  className="md:top-32 md:right-16 top-12 right-[-34px] absolute md:w-[212px] w-[150px] md:h-[277px] h-[195px] z-40"
                  width={332}
                  height={322}
                  alt=""
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col md:mt-0 mt-16 items-start justify-start">
                <h1 className="text-primary font-bold font-['Outfit']">
                  Learner Profile
                </h1>
                <hr className="w-[75px] h-1.5 bg-primary mb-4" />
                <p className="w-full h-auto text-justify">
                  <span className="text-zinc-800 text-xl font-medium font-['Outfit']">
                    Informed by the IB mission to develop inquiring,
                    knowledgeable and caring young people who help to create a
                    better and more peaceful world through intercultural
                    understanding and respect, the IB programmes foster a
                    distinctive set of attributes. These qualities—embodied in
                    the IB learner profile—prepare IB learners to make
                    exceptional contributions at school and in their communities
                    outside of the classroom.
                  </span>
                </p>
                <div className="flex flex-col gap-6 mt-4 items-start justify-start">
                  <DecoratedList details="An inquirer who actively enjoys learning." />
                  <DecoratedList details="Knowledgeable and able to develop understanding across a broad and balanced range of disciplines." />
                  <DecoratedList details="An inquirer who actively enjoys learning." />
                  <DecoratedList details="Knowledgeable and able to develop understanding across a broad and balanced range of disciplines." />
                  <DecoratedList details="An inquirer who actively enjoys learning." />
                  <DecoratedList details="Knowledgeable and able to develop understanding across a broad and balanced range of disciplines." />
                </div>
              </div>
            </div>
            <div className="w-full mb-28 gap-12 flex md:flex-row flex-col items-center justify-between ">
              <div className="md:w-1/2 w-full flex flex-col gap-6 items-start justify-start">
                <DecoratedList details="An inquirer who actively enjoys learning." />
                <DecoratedList details="Knowledgeable and able to develop understanding across a broad and balanced range of disciplines." />
                <DecoratedList details="An inquirer who actively enjoys learning." />
                <DecoratedList details="Knowledgeable and able to develop understanding across a broad and balanced range of disciplines." />
                <DecoratedList details="An inquirer who actively enjoys learning." />
                <DecoratedList details="Knowledgeable and able to develop understanding across a broad and balanced range of disciplines." />
              </div>
              <div className="md:w-1/2 w-full h-full flex justify-center">
                <div className="md:w-1/2 w-full bg-primary rounded-[36px]">
                  <div
                    className="md:h-full h-[432px] w-full -ml-4 -mt-2 rounded-[36px] bg-cover bg-center"
                    style={{
                      backgroundImage: `url(/images/profile.JPG)`,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:ml-[3%] ">
              <h1 className="text-primary font-bold font-['Outfit']">
                School Hours
              </h1>
              <hr className="w-[75px] h-1.5 bg-primary mb-4" />
            </div>
            <div className="md:ml-[3%] mt-7 md:mr-[3%] grid md:grid-cols-3 grid-rows-1 gap-0 border-b-[1px] border-b-[#B3B3B3]">
              <div className="px-2 w-8 h-56 border-[1px] border-[#B3B3B3] border-b-0 border-r-0 flex gap-4 flex-col items-start justify-center">
                <div className=" text-primary text-3xl font-bold font-['Outfit']">
                  Monday
                </div>
                <div className="flex flex-row justify-start w-80">
                  <div className=" text-zinc-400 md:text-base w-32 font-medium font-['Outfit']">
                    7:30 AM - 3:30 PM
                  </div>
                  <div className=" text-zinc-400 md:text-base font-medium font-['Outfit']">
                    3:45 PM - 4:45 PM
                  </div>
                </div>
                <div className="flex flex-row justify-start w-80 ">
                  <div className=" text-neutral-700 md:text-base w-48 font-medium font-['Outfit']">
                    Classess
                  </div>
                  <div className=" text-neutral-700 md:text-base font-medium font-['Outfit']">
                    After School Programs
                  </div>
                </div>
                <div className="w-80 mt-3 text-zinc-400 md:text-base font-medium font-['Outfit']">
                  5:00 PM - 7:00 PM
                </div>
                <div className="w-80 mt-1 text-neutral-700 md:text-base font-medium font-['Outfit']">
                  Academic Support and Enrichment Program
                </div>
              </div>
              <div className="px-2 w-8 h-56 border-[1px] border-[#B3B3B3] border-b-0 border-r-0 flex gap-4 flex-col items-start justify-center">
                <div className=" text-primary text-3xl font-bold font-['Outfit']">
                  Tuesday
                </div>
                <div className="flex flex-row justify-start w-96">
                  <div className=" text-zinc-400 text-base w-48 font-medium font-['Outfit']">
                    7:30 AM - 3:30 PM
                  </div>
                  <div className=" text-zinc-400 text-base font-medium font-['Outfit']">
                    3:45 PM - 4:45 PM
                  </div>
                </div>
                <div className="flex flex-row justify-start w-96 ">
                  <div className=" text-neutral-700 text-base w-48 font-medium font-['Outfit']">
                    Classess
                  </div>
                  <div className=" text-neutral-700 text-base font-medium font-['Outfit']">
                    After School Programs
                  </div>
                </div>
                <div className="w-96 mt-3 text-zinc-400 text-base font-medium font-['Outfit']">
                  5:00 PM - 7:00 PM
                </div>
                <div className="w-96 mt-1 text-neutral-700 text-base font-medium font-['Outfit']">
                  Academic Support and Enrichment Program
                </div>
              </div>
              <div className="px-2 w-8 h-56 border-[1px] border-[#B3B3B3] border-b-0 border-r-0 flex gap-4 flex-col items-start justify-center">
                <div className=" text-primary text-3xl font-bold font-['Outfit']">
                  Wednesday
                </div>
                <div className="flex flex-row justify-start w-96">
                  <div className=" text-zinc-400 text-base w-48 font-medium font-['Outfit']">
                    7:30 AM - 3:30 PM
                  </div>
                  <div className=" text-zinc-400 text-base font-medium font-['Outfit']">
                    3:45 PM - 4:45 PM
                  </div>
                </div>
                <div className="flex flex-row justify-start w-96 ">
                  <div className=" text-neutral-700 text-base w-48 font-medium font-['Outfit']">
                    Classess
                  </div>
                  <div className=" text-neutral-700 text-base font-medium font-['Outfit']">
                    After School Programs
                  </div>
                </div>
                <div className="w-96 mt-3 text-zinc-400 text-base font-medium font-['Outfit']">
                  5:00 PM - 7:00 PM
                </div>
                <div className="w-96 mt-1 text-neutral-700 text-base font-medium font-['Outfit']">
                  Academic Support and Enrichment Program
                </div>
              </div>
            </div>
            <div className="md:ml-[3%] mt-7 md:mr-[3%] grid md:grid-cols-3 grid-rows-1 gap-0 border-b-[1px] border-b-[#B3B3B3]">
              <div className="px-2 w-8 h-56 border-[1px] border-[#B3B3B3] border-b-0 border-r-0 flex gap-4 flex-col items-start justify-center">
                <div className=" text-primary text-3xl font-bold font-['Outfit']">
                  Thursday
                </div>
                <div className="flex flex-row justify-start w-96">
                  <div className=" text-zinc-400 text-base w-48 font-medium font-['Outfit']">
                    7:30 AM - 3:30 PM
                  </div>
                  <div className=" text-zinc-400 text-base font-medium font-['Outfit']">
                    3:45 PM - 4:45 PM
                  </div>
                </div>
                <div className="flex flex-row justify-start w-96 ">
                  <div className=" text-neutral-700 text-base w-48 font-medium font-['Outfit']">
                    Classess
                  </div>
                  <div className=" text-neutral-700 text-base font-medium font-['Outfit']">
                    After School Programs
                  </div>
                </div>
                <div className="w-96 mt-3 text-zinc-400 text-base font-medium font-['Outfit']">
                  5:00 PM - 7:00 PM
                </div>
                <div className="w-96 mt-1 text-neutral-700 text-base font-medium font-['Outfit']">
                  Academic Support and Enrichment Program
                </div>
              </div>
              <div className="px-2 w-8 h-56 border-[1px] border-[#B3B3B3] border-b-0 border-r-0 flex gap-4 flex-col items-start justify-center">
                <div className=" text-primary text-3xl font-bold font-['Outfit']">
                  Friday
                </div>
                <div className="flex flex-row justify-start w-96">
                  <div className=" text-zinc-400 text-base w-48 font-medium font-['Outfit']">
                    7:30 AM - 3:30 PM
                  </div>
                  <div className=" text-zinc-400 text-base font-medium font-['Outfit']">
                    3:45 PM - 4:45 PM
                  </div>
                </div>
                <div className="flex flex-row justify-start w-96 ">
                  <div className=" text-neutral-700 text-base w-48 font-medium font-['Outfit']">
                    Classess
                  </div>
                  <div className=" text-neutral-700 text-base font-medium font-['Outfit']">
                    After School Programs
                  </div>
                </div>
                <div className="w-96 mt-3 text-zinc-400 text-base font-medium font-['Outfit']">
                  5:00 PM - 7:00 PM
                </div>
                <div className="w-96 mt-1 text-neutral-700 text-base font-medium font-['Outfit']">
                  Academic Support and Enrichment Program
                </div>
              </div>
            </div>
            <div className=" flex justify-center my-4">
              <p className="text-gray-600 w-3/4 text-center">
                **The early release time on Wednesdays and Fridays allows the
                school to deliver regular professional development and engage in
                collaborative teacher planning.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-14 h-px border-2 border-primary" />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
