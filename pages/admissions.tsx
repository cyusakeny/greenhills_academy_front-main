/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";

export default function Admissions() {
  return (
    <Layout>
      <main className="mt-4">
        <div className="w-full relative  h-[471.55px] bg-no-repeat bg-cover">
          <div
            className="w-full h-[471.55px] gap-1 flex flex-col pb-4 items-center justify-end "
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(/images/admission.JPG)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="md:w-[45%] w-3/4 text-center text-white  text-2xl font-normal font-['Outfit']">
              Wish to learn more? We&apos;ll send you a package of information
              as soon as you complete the form Linked below
            </div>
            <button className="mt-4 text-center w-fit h-auto p-3 font-['Outfit'] bg-primary text-2xl text-[yellow] rounded-xl">
              Apply now
            </button>
          </div>
        </div>
        <section className="flex justify-center">
          <div className="w-[80%] grid grid-rows-1 ">
            <div className="flex w-full mt-20 justify-center md:items-center items-start">
              <div className="flex justify-between md:flex-row flex-col md:items-center items-start">
                <div className="flex md:w-1/2 w-full flex-col">
                  <div
                    style={{
                      backgroundImage: `url(/images/9.JPG)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className=" md:w-1/3 w-36 md:h-[350px] h-48 z-20"
                  />
                  <div className="md:w-1/2 w-32 z-40 md:ml-28 ml-20 -mt-44 md:px-6 px-2 py-6 bg-primary">
                    <h3 className="md:text-justify text-[yellow] font-bold font-['Outfit']">
                      30+ Years
                    </h3>
                    <p className="md:text-justify text-white font-normal font-['Outfit']">
                      Years of Experience
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url(/images/adm.JPG)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="md:w-1/2 w-44 md:h-60 h-32 mt-4 md:ml-12 ml-10"
                  />
                </div>
                <div className="flex md:w-1/2 sm:my-8 w-full flex-col md:gap-8 gap-3 justify-center items-start ">
                  <h1 className="text-primary sm:text-base font-bold font-['Outfit']">
                    Enrollment Portal
                  </h1>
                  <hr className="w-[75px] h-1.5 bg-primary mb-4" />
                  <p className="w-full text-justify text-zinc-800 font-normal font-['Outfit']">
                    Families interested in joining the Green Hills community
                    should contact the Admissions Director to discuss
                    availability of space. If there is space, parents are
                    encouraged to schedule a tour of the campus if they have not
                    previously visited. GHA has an open admissions process and
                    accepts learners throughout the school year if space is
                    available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center">
          <div className="w-[80%] grid grid-rows-1 ">
            <div className="flex justify-center items-start md:my-16 my-4">
              <div className="flex md:gap-8 gap-2 flex-col items-start md:my-16 my-4">
                <h1 className="text-primary sm:text-base font-bold font-['Outfit']">
                  Mission Driven Admissions
                </h1>
                <hr className="w-[75px] h-1.5 bg-primary mb-4" />
                <p className="w-full h-auto text-justify text-zinc-800 font-normal font-['Outfit']">
                  At Green Hills Academy, our mission is to help learners become
                  principled, lifelong learners equipped with the knowledge and
                  skills to excel. In service to our mission, we provide an
                  innovative, inclusive international education for learners
                  from Nursery through Grade 12.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center">
          <div className="w-[80%] grid grid-rows-1 ">
            <div className="flex justify-center items-center">
              <div className="flex md:flex-row flex-col-reverse sm:gap-8 justify-between items-center">
                <div className="flex md:w-1/2 w-full flex items-end h-full">
                  <div className="bg-cover bg-center md:w-1/2 w-36 md:h-[100%] h-44 z-20">
                    <img
                      src="/images/driven.JPG"
                      alt=""
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-cover bg-center md:w-1/2 md:h-44 w-32 h-28 -ml-12">
                    <img
                      src="/images/driven2.JPG"
                      alt=""
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 w-full flex md:gap-8 gap-2 flex-col items-start">
                  <h2 className="text-primary sm:text-base font-bold font-['Outfit']">
                    Inclusion
                  </h2>
                  <p className="w-full text-justify text-zinc-800 font-normal font-['Outfit']">
                    GHA welcomes learners with a diverse range of cultural and
                    educational backgrounds, talents and abilities. The diverse
                    backgrounds of our learners enrich our school community and
                    contribute to a dynamic learning environment in which all
                    learners are celebrated, and challenged and supported to do
                    their personal best.As a welcoming and inclusive community,
                    we expect families to engage fully with the School,
                    supporting both its educational philosophy and community
                    activities. We also value transparent communications and
                    constructive, respectful, personal and professional
                    interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center">
          <div className="w-[80%]">
            <div className="flex justify-center items-center my-16">
              <div className="flex h-full sm:flex-wrap md:space-x-16 md:my-16 my-4">
                <div className="md:w-1/2 w-full flex md:gap-8 gap-2 flex-col items-start ">
                  <h2 className="text-primary sm:text-base font-bold font-['Outfit']">
                    Everyone challenged
                  </h2>
                  <p className="w-full text-justify text-zinc-800 font-normal font-['Outfit']">
                    GHA is committed to personalized learning in order to
                    sustain high levels of motivation and optimize our
                    learners&apos; growth and achievement in all areas of
                    development. We personalize learning to help learners
                    realize their full potential, identify and develop interests
                    and talents, and become internationally-minded global
                    citizens.
                  </p>
                </div>
                <div className="md:w-1/2 w-full md:h-full flex justify-center">
                  <div className="w-full h-full">
                    <img
                      src="/images/book.JPG"
                      alt=""
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mt-12 bg-primary flex justify-center items-center py-8">
          <div className="md:w-1/2 w-full gap-6 bg-transparent flex flex-col justify-center items-center">
            <h2 className="text-center  text-[yellow] font-bold font-['Outfit']">
              Apply Now
            </h2>
            <div className="w-full h-auto text-center text-white font-normal font-['Outfit']">
              Wish to learn more? We&apos;ll send you a package of information
              as soon as you complete the form Linked below
            </div>
            <div className="w-48 h-14 px-8 py-4 bg-white justify-center items-center gap-2.5 inline-flex cursor-pointer">
              <div className="w-24 h-6 text-center text-primary font-semibold font-['Outfit']">
                Fill the form
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center">
          <div className="w-[80%]">
            <div className="flex justify-center items-center md:my-16 my-4">
              <div className="flex h-full sm:flex-col-reverse md:space-x-16 items-center md:my-16 my-4">
                <div className="md:w-1/2 w-full md:h-full flex justify-center">
                  <img
                    src="/images/Graduation-1-768x723.jpg"
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="flex  md:w-1/2 w-full flex-col gap-8 justify-center items-start">
                  <h2 className="text-primary sm:text-base font-bold font-['Outfit']">
                    Everyone successful
                  </h2>
                  <p className="w-full text-justify text-zinc-800 font-normal font-['Outfit']">
                    GHA, while inclusive, is also rigorous and challenging. We
                    expect high levels of motivation and perseverance from every
                    learner. When learners’ records suggest that they may not
                    have the disposition to be successful at GHA, we counsel
                    families to choose a different school.
                  </p>
                  <p className="w-full text-justify text-zinc-800 font-normal font-['Outfit']">
                    For more information or to make an appointment with our
                    Admissions Director, please contact Lucie Umulisa at{" "}
                    <Link
                      href="mailto:admissions@greenhillsacademy.rw"
                      className="text-primary underline"
                    >
                      admissions@greenhillsacademy.rw
                    </Link>{" "}
                    or{" "}
                    <Link
                      href="tel:+250787227601"
                      className="text-primary underline"
                    >
                      +250787227601
                    </Link>
                    . She will be happy to answer all of your questions and give
                    you a tour of our beautiful and expansive campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
