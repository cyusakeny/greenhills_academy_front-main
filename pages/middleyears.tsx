/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MiddleYears() {
  const divStyle = {
    backgroundImage: 'url("/images/admin1.png")',
  };
  return (
    <Layout>
      <main className="mt-4 mb-12">
        <div
          className="w-full relative  h-[471.55px] bg-no-repeat bg-cover"
          style={divStyle}
        >
          <div
            className="w-full h-[471.55px] gap-1 flex flex-col pb-4 items-center justify-end "
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(/images/admin1.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex justify-center">
              <div className="w-[55px] grid place-items-center">
                <div className="w-[18px] h-[7px] my-2 bg-[red]" />
                <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
              </div>
            </div>
            <h1 className="text-primary capitalize">Middle Years Programme</h1>
            <h3 className="text-center text-white font-normal font-['Outfit']">
              International Baccalaureate Middle Years Programme
            </h3>
          </div>
        </div>
        <section className="flex justify-center">
          <div className="w-[80%] grid grid-rows-1">
            <div className="mt-12 grid grid-cols-4 gap-4">
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
            <div className="my-16 justify-self-center h-auto gap-4 flex flex-col  md:flex-row justify-start items-center gap-[53px] inline-flex">
              <div className="md:w-1/2 w-full">
                <h2 className="text-primary uppercase sm:text-base">Overview</h2>
                <div className="w-20 h-px border-2 mt-2 border-[red]"></div>
                <p className="text-justify py-4 text-base font-normal font-['Outfit']">
                  In Middle School, we offer a balanced, holistic education
                  based on the International Baccalaureate Middle Years
                  Programme (MYP) and best practices in international schools.
                  We personalize learning to develop young learners who are
                  confident, responsible, reflective, innovative and engaged.
                  <br />
                  <br />
                  The MYP emphasizes intellectual challenge and encourages
                  learners to make practical connections between their studies
                  and the real world, preparing them for success in further
                  study and in life. The MYP aims to develop active learners and
                  internationally-minded young people who can empathize with
                  others and pursue lives of purpose and meaning. The program
                  empowers learners to inquire into a wide range of issues and
                  ideas of significance locally, nationally and globally. The
                  result is young people who are creative, critical and
                  reflective thinkers.
                  <br />
                  <br />
                  Learn more about IB here .
                </p>
              </div>
              <div
                className="md:w-1/2  w-full md:h-full h-[432px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/ytr.png)`,
                  backgroundRepeat: "no-repeat",
                }}
              />{" "}
            </div>
            <div className="md:my-16 my-4 justify-self-center h-auto gap-4 flex flex-col-reverse  md:flex-row justify-start items-center gap-[53px] inline-flex">
              <div className="md:w-1/2 w-full flex flex-col ">
                <Image
                  src="/images/mission1.png"
                  className="md:w-[324px] md:h-[361px] w-36 h-36 z-20"
                  width={522}
                  height={322}
                  alt=""
                />
                <Image
                  src="/images/mission2.png"
                  className="md:w-[371px] md:h-56 w-32 h-28 md:ml-48 ml-28 md:-mt-16 -mt-10 z-10"
                  width={322}
                  height={322}
                  alt=""
                />
              </div>
              <div className="flex md:w-1/2 w-full flex-col justify-center items-start">
                <h2 className="text-primary sm:text-base uppercase">Curriculum</h2>
                <div className="w-20 h-px border-2 mt-2 border-[red]"></div>
                <p className="text-justify text-base py-4 font-normal font-['Outfit']">
                  <span>
                    The MYP comprises eight subject groups, offered in different
                    languages. At Green Hills Academy, we offer the eight
                    subjects in the languages indicated below:
                    <br />
                  </span>
                  <ul className="list-outside ... mb-4">
                    <li>
                      <span className="font-bold text-lg">-</span> Language and
                      literature
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Language
                      acquisition
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Individuals
                      and societies
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Mathematics
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Sciences
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Arts
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Physical and
                      health education
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Design
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="w-full md:my-16 my-4 bg-primary flex justify-center items-center py-4">
              <div className="md:w-1/2 w-full gap-6 bg-transparent flex flex-col justify-center items-center">
                <h2 className="text-center sm:text-base text-[yellow] font-bold font-['Outfit']">
                  Useful Documents
                </h2>
                <h4 className="w-full text-center text-base text-white font-normal font-['Outfit']">
                  Early Years Foundation Stage, GHA Middle : A Guide for Parents
                </h4>
                <div className="w-48 h-14 px-8 py-4 bg-white justify-center items-center gap-2.5 inline-flex cursor-pointer">
                  <div className="w-24 h-6 text-center text-base text-primary font-semibold font-['Outfit']">
                    Download
                  </div>
                </div>
              </div>
            </div>
            <div className="md:my-16 my-4 justify-self-center h-auto gap-4 flex flex-col-reverse  md:flex-row justify-start items-center gap-[53px] inline-flex">
              <div className="md:w-1/2 w-full">
                <h2 className="text-primary sm:text-base uppercase">
                  {" "}
                  Community Service Projects
                </h2>
                <div className="w-20 h-px border-2 mt-1 border-[red]"></div>
                <p className="text-justify text-base py-4 font-normal font-['Outfit']">
                  Learners in Middle School participate in community projects
                  that provide important opportunities to collaborate and engage
                  in service learning. The projects are learner-centred and
                  age-appropriate, enabling learners to engage in practical
                  explorations through a cycle of inquiry, action and
                  reflection.The aims of the community projects are to encourage
                  and enable learners to:
                  <div className="mt-10">
                    <ul className="ml-4 list-disc">
                      <li className="">
                        {" "}
                        <span className="">
                          Participate in a sustained, self-directed inquiry
                          within a global context
                        </span>
                      </li>
                      <li className="">
                        {" "}
                        <span className="">
                          Generate creative new insights and develop deeper
                          understandings through in-depth investigation
                        </span>
                      </li>
                      <li className="">
                        <span className="">
                          Demonstrate the skills, attitudes and knowledge
                          required to complete a project over an extended period
                          of time
                        </span>
                      </li>
                      <li className="">
                        <span className="">
                          Communicate effectively in a variety of situations
                        </span>
                      </li>
                      <li className="">
                        <span className="">
                          Demonstrate responsible action through, or as a result
                          of, learning.{" "}
                        </span>
                      </li>
                      <li className="">
                        <span className="">
                          Appreciate the process of learning and take pride in
                          their accomplishments
                        </span>
                      </li>
                    </ul>
                  </div>
                </p>
              </div>
              <div
                className="md:w-1/2 w-full md:h-full h-[432px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/mission1.png)`,
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
