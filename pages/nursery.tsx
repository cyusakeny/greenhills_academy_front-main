/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Nursery() {
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
                <div className="w-[18px] h-[7px] my-2 bg-amber-500" />
                <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
              </div>
            </div>
            <h1 className="text-primary capitalize">Nursery Years Programme</h1>
            <h3 className="text-center text-white font-normal font-['Outfit']">
              International Baccalaureate Nursery Years Programme
            </h3>
          </div>
        </div>
        <section className="flex justify-center">
          <div className="w-[80%] grid grid-rows-1">
            <div className="mt-12 grid grid-cols-4 gap-4">
              <Link href="/Nursery">
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
            <div className="my-16 justify-self-center h-auto gap-4 flex flex-col-reverse  md:flex-row justify-start items-center gap-[53px] inline-flex">
              <div className="w-1/2">
                <h2 className="text-primary uppercase">Overview</h2>
                <div className="w-20 h-px border-2 mt-2 border-amber-500"></div>
                <p className="text-justify py-4 font-normal font-['Outfit']">
                  In our Nursery School, we offer an inquiry-based,
                  learner-centered, holistic education in a dynamic, friendly
                  and inclusive learning environment. In our challenging and
                  engaging Nursery Years Programme, our learners acquire
                  knowledge, develop skills and contribute to making the world a
                  better place. We are committed to guiding our learners to
                  persevere, to have the courage to make mistakes and to
                  recognise setbacks as learning opportunities. Our talented and
                  experienced educators encourage our learners to be curious
                  about the world and to use their creative energies both in the
                  classroom and beyond. We have high expectations for all of our
                  learners and help them to achieve their personal best. By
                  having a growth mindset, our learners seek out challenges and
                  become champions of their own learning.
                  <br />
                  <br />
                  We help learners develop academically, socially and
                  emotionally. We also encourage our learners to develop
                  independence and take responsibility for their own learning.
                  We help our learners gain an understanding of the world and
                  how to function comfortably within it. Our learners develop
                  personal values and a foundation upon which
                  international-mindedness develops and flourishes.
                  <br />
                  <br />
                  Learn more about IB here .
                </p>
              </div>
              <div
                className="w-1/2 h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/ytr.png)`,
                  backgroundRepeat: "no-repeat",
                }}
              />{" "}
            </div>
            <div className="my-16 justify-self-center h-auto gap-4 flex flex-col-reverse  md:flex-row justify-start items-center gap-[53px] inline-flex">
              <div className="w-1/2 flex flex-col ">
                <Image
                  src="/images/mission1.png"
                  className="md:w-[324px] md:h-[361px] w-48 h-36 z-20"
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
                <h2 className="text-primary uppercase">Curriculum</h2>
                <div className="w-20 h-px border-2 mt-2 border-amber-500"></div>
                <p className="text-justify py-4 font-normal font-['Outfit']">
                  <span>
                    Our curriculum is based on the premise that learners are
                    agents of their own learning and partners in the learning
                    process. It prioritizes learners and their relationships to
                    build a strong learning community. Our Nursery learners use
                    their initiative to take responsibility and ownership of
                    their learning. By learning through inquiry and reflecting
                    on their own learning, they develop knowledge, conceptual
                    understandings, skills and the attributes of the IB Learner
                    profile.
                    <br />
                    <br />
                    We focus on the development of the whole child as an
                    inquirer, both in the classroom and beyond. The early years
                    in the PYP are transformative experiences for learners and
                    deliver excellent outcomes by providing an education that is
                    engaging, relevant, challenging and significant. <br />
                    <br />
                    The subject areas in the PYP are:
                    <br />
                  </span>
                  <ul className="list-outside ... mb-4">
                    <li>
                      <span className="font-bold text-lg">-</span> Language
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Mathematics
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Science
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Social
                      studies
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Arts
                    </li>
                    <li>
                      <span className="font-bold text-lg">-</span> Personal,
                      social and physical education
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
              <div className="w-1/2 gap-6 bg-transparent flex flex-col justify-center items-center">
                <h2 className="text-center text-[yellow] font-bold font-['Outfit']">
                  Useful Documents
                </h2>
                <h4 className="w-full text-center text-white font-normal font-['Outfit']">
                  Early Years Foundation Stage, GHA Nursery : A Guide for
                  Parents
                </h4>
                <div className="w-48 h-14 px-8 py-4 bg-white justify-center items-center gap-2.5 inline-flex cursor-pointer">
                  <div className="w-24 h-6 text-center text-primary font-semibold font-['Outfit']">
                    Download
                  </div>
                </div>
              </div>
            </div>
            <div className="my-16 justify-self-center h-auto gap-4 flex flex-col-reverse  md:flex-row justify-start items-center gap-[53px] inline-flex">
              <div className="w-1/2">
                <h2 className="text-primary uppercase">
                  {" "}
                  Transdisciplinary Themes
                </h2>
                <div className="w-20 h-px border-2 mt-1 border-amber-500"></div>
                <p className="text-justify py-4 font-normal font-['Outfit']">
                  Guided by six transdisciplinary themes of global significance,
                  learners broaden their learning by developing their conceptual
                  understandings, strengthening their knowledge and skills
                  across, between, and beyond subject areas. In Nursery School,
                  learners are engaged in four of the following six
                  transdisciplinary themes:
                  <div className="mt-10">
                    <ul className="ml-4 list-disc">
                      <li className="">
                        {" "}
                        <span className="">
                          Who we are: Inquiry into the nature of the self;
                          beliefs and values; person, physical, mental, social
                          and spiritual health; and human relationships.
                        </span>
                      </li>
                      <li className="">
                        {" "}
                        <span className="">
                          Where we are in place and time: Inquiry into
                          orientation in place and time; personal histories; the
                          discoveries and explorations of humankind; and the
                          interconnectedness of individuals and civilizations.
                        </span>
                      </li>
                      <li className="">
                        <span className="">
                          How we express ourselves: Inquiry into the ways in
                          which we discover and express ideas, feelings, nature,
                          culture, beliefs and values.
                        </span>
                      </li>
                      <li className="">
                        <span className="">
                          How the world works: Inquiry into the natural world
                          and its laws, the interaction between the natural
                          world and human societies; the impact of scientific
                          and technological advances on society and on the
                          environment.
                        </span>
                      </li>
                      <li className="">
                        <span className="">
                          How we organize ourselves: Inquiry into the
                          interconnectedness of human-made systems and
                          communities; the structure and function of
                          organizations; and their impact on humankind and the
                          environment.{" "}
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
                className="w-1/2 h-full bg-cover bg-center"
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
