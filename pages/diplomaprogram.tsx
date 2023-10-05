/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DiplomaProgram() {
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
                <div className="w-[18px] h-[7px] my-2 bg-[#09b1db]" />
                <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
              </div>
            </div>
            <h1 className="text-primary capitalize">Diploma Years Programme</h1>
            <h3 className="text-center text-white font-normal font-['Outfit']">
              International Baccalaureate Diploma Years Programme
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
            <div className="md:my-16 my-4 justify-self-center h-auto gap-4 flex flex-col  md:flex-row justify-start items-center gap-[53px] inline-flex">
              <div className="md:w-1/2 w-full">
                <h2 className="text-primary sm:text-base uppercase">Overview</h2>
                <div className="w-20 h-px border-2 mt-2 border-[#09b1db]"></div>
                <p className="text-justify py-4 text-base font-normal font-['Outfit']">
                  Green Hills Academy offers a balanced, holistic education that
                  provides a strong academic foundation for all learners while
                  allowing them to explore specialist areas according to their
                  interests, strengths, ability and university aspirations. To
                  achieve this, the High School offers the International
                  Baccalaureate Middle Years Programme (MYP) in Grades 9 and 10
                  and the International Baccalaureate Diploma Program (DP) in
                  Grades 11 and 12, which are described below.
                  <br />
                  <br />
                  In addition to our rich, rigorous academic programs, High
                  School learners engage in inquiry- and project-based learning,
                  extracurricular activities, experiential learning, sports and
                  outdoor activities that enrich their learning and ensure that
                  they develop knowledge and skills to prepare them to be global
                  citizens equipped to solve real-life problems.
                  <br />
                  <br />
                  Learn more about IB here .
                </p>
              </div>
              <div
                className="md:w-1/2 md:h-full w-full h-[432px] bg-cover bg-center"
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
                <h2 className="text-primary uppercase sm:text-base">Curriculum</h2>
                <div className="w-20 h-px border-2 mt-2 border-[#09b1db]"></div>
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
                      <span className="font-bold text-lg">-</span>Design
                    </li>
                  </ul>
                  As children grow they will be supported to develop skills in
                  four specific areas.
                  <ul className="list-outside ... mt-4">
                    <li>
                      <span className="font-bold text-lg">-</span> Literacy
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Mathematics
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Understanding
                      the world
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Expressive
                      arts and design
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="w-full my-16 bg-primary flex justify-center items-center py-4">
              <div className="md:w-1/2 w-full gap-6 bg-transparent flex flex-col justify-center items-center">
                <h2 className="text-center sm:text-base text-[yellow] font-bold font-['Outfit']">
                  Useful Documents
                </h2>
                <h4 className="w-full text-center text-base text-white font-normal font-['Outfit']">
                  Early Years Foundation Stage, GHA Diploma : A Guide for
                  Parents
                </h4>
                <div className="w-48 h-14 px-8 py-4 bg-white justify-center items-center gap-2.5 inline-flex cursor-pointer">
                  <div className="w-24 h-6 text-center text-base text-primary font-semibold font-['Outfit']">
                    Download
                  </div>
                </div>
              </div>
            </div>
            <div className="md:my-16 my-4 justify-self-center h-auto gap-4 flex flex-col  md:flex-row justify-start items-center gap-[53px] inline-flex">
              <div className="md:w-1/2 w-full">
                <h2 className="text-primary uppercase sm:text-base">
                  {" "}
                  Grades 11 and 12 – International Baccalaureate Diploma
                  Programme
                </h2>
                <div className="w-20 h-px border-2 mt-1 border-[#09b1db]"></div>
                <p className="text-justify py-4 text-base font-normal font-['Outfit']">
                  The International Baccalaureate Diploma Programme (DP) is a
                  two-year programme of study designed to lead to a Diploma or a
                  Certificate, both of which are accepted as university entrance
                  qualifications throughout the world. While the IBDP is a
                  challenging programme, it is open to learners of a wide range
                  of abilities. The DP is respected by leading universities
                  across the globe. Through the DP, GHA develops learners who:
                  <div className="mt-10">
                    <ul className="ml-4 list-disc">
                      <li className="">
                        {" "}
                        <span className="">
                          Have excellent breadth and depth of knowledge
                        </span>
                      </li>
                      <li className="">
                        {" "}
                        <span className="">
                          Flourish physically, intellectually, emotionally and
                          ethically
                        </span>
                      </li>
                      <li className="">
                        <span className="">Study at least two languages</span>
                      </li>
                      <li className="">
                        <span className="">
                          Excel in traditional academic subjects
                        </span>
                      </li>
                      <li className="">
                        <span className="">
                          Explore the nature of knowledge through the
                          programme’s unique theory of knowledge course{" "}
                        </span>
                      </li>
                      <li className="">
                        <span className="">
                          Sharing the planet: Inquiry into rights and
                          responsibilities in the struggle to share finite
                          resources with other people and other living things;
                          access to equal opportunities; and peace and conflict
                          resolution.
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
