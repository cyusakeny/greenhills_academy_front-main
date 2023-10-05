/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Stats from "@/components/ui/molecules/statsCard";
import { BsChevronRight, BsChevronDown, BsChevronUp } from "react-icons/bs";
export default function AboutDetails() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const expandData = [
    {
      title: "Accreditation",
      content:
        "Green Hills Academy nurtures a community of caring, inquisitive and principled  learners who pursue excellence and contribute to an equitable world.",
    },
    {
      title: "Green Hills Alumni",
      content:
        "Green Hills Academy nurtures a community of caring, inquisitive and principled  learners who pursue excellence and contribute to an equitable world.",
    },
  ];
  return (
    <div className="w-full grid grid-rows-1">
      <div className="flex mt-12 mb-12 item-start md:flex-row flex-col gap-12 justify-self-center">
        <Image
          src="/images/classabout.png"
          className=" md:w-[458.67px] w-[158.67px] md:h-[222.94px] h-[82.94px]"
          height={1}
          width={454}
          alt=""
        />

        <Image
          src="/images/lababout.png"
          className="md:w-[458.67px] w-[158.67px] md:h-[222.94px] h-[82.94px]"
          height={1}
          width={477}
          alt=""
        />
      </div>
      <Stats />
      <div className="w-3/4 mt-16 justify-self-center h-auto gap-4 flex flex-col-reverse  md:flex-row justify-start items-center gap-[53px] inline-flex">
        <div className=" ">
          <Image
            src="/images/master.png"
            className=" w-[200px] md:w-[1200px] md:h-[280px] h-[180px]"
            height={111}
            width={720}
            alt=""
          />
        </div>
        <div className="flex flex-col ">
          <div className="w-full h-auto text-emerald-600 text-xl font-bold ">
            THANK YOU FOR TAKING THE TIME TO GET TO KNOW GREENHILLS SCHOOL.
          </div>
          <div className="w-full h-auto text-justify text-black text-base font-normal ">
            Hive loopring golem dash neo helium. ECash ipsum vechain elrond
            revain avalanche fantom chiliz. Decred chiliz litecoin revain kava
            ox decred amp terra elrond. Revain terra revain siacoin terraUSD
            TRON bancor polygon polkadot. Solana kusama revain decred secret
            chainlink litecoin. Livepeer elrond polygon nexo celo aave binance
            aave aave.
            <br />
          </div>
          <div className="text-black text-base font-bold ">
            Peter B. Fayroian
          </div>
          <div className="text-zinc-600 text-base font-normal ">
            Head of School(He/Him/His)
          </div>
        </div>
      </div>
      <div className="w-full mt-12 h-[408px] justify-center  gap-16 items-center flex flex-row bg-emerald-50">
        <div className="h-[153px] flex-col justify-start items-start gap-2 inline-flex">
          <div className="text-primary text-xl font-bold ">OUR MISSION</div>
          <div className="w-[322px] text-justify text-neutral-700 text-base font-normal ">
            Green Hills Academy nurtures a community of caring, inquisitive and
            principled learners who pursue excellence and contribute to an
            equitable world.
          </div>
        </div>
        <div className="flex flex-row items-end gap-4">
          <Image
            className="w-[198px] h-[269px]"
            height={1}
            width={200}
            src="/images/children1.png"
            alt=""
          />
          <Image
            className="w-[120px] h-[134px]"
            height={1}
            width={200}
            src="/images/children2.png"
            alt=""
          />
          <Image
            className="w-[156px] h-[210px]"
            height={1}
            width={200}
            src="/images/children3.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-[408px] bg-white gap-12 flex flex-row justify-center items-center">
        <div>
          <Image
            className="w-[284px] h-[191px]"
            height={1}
            width={300}
            src="/images/video.png"
            alt=""
          />
        </div>
        <div className="w-[30%] h-[342px] flex-col justify-start items-start gap-2 inline-flex">
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="w-[75px] h-[0px] border-4 border-emerald-600"></div>
            <div className="text-emerald-600 text-xl font-bold uppercase">
              Core Values
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-4 h-4 bg-emerald-600" />
              <div className="text-justify text-emerald-600 text-lg font-bold ">
                Integrity:
              </div>
            </div>
            <div className="w-fit text-justify text-zinc-600 text-lg font-normal">
              Responsible, respectful and guided by strong moral principles
              Intellectual{" "}
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-4 h-4 bg-emerald-600" />
              <div className="text-justify text-emerald-600 text-lg font-bold">
                Curiosity:
              </div>
            </div>
            <div className="w-fit text-justify text-zinc-600 text-lg font-normal ">
              Critical thinker, creative, innovative and reflective{" "}
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-4 h-4 bg-emerald-600" />
              <div className="text-justify text-emerald-600 text-lg font-bold ">
                Inclusivity:
              </div>
            </div>
            <div className="w-fit text-justify text-zinc-600 text-lg font-normal ">
              Caring, collaborative, respectful and welcoming of diversity
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex bg-emerald-50 justify-center">
        <div className="w-1/2 flex justify-between p-8">
          <div
            className="w-[300px] h-[200px] bg-cover md:mt-12"
            style={{
              backgroundImage: "url(/images/classabout.png)",
              backgroundSize: "fill",
              backgroundPosition: "center",
            }}
          />
          <div className="w-1/2">
            <h3 className="text-primary font-bold text-[20px] uppercase">
              Building Trust: Accreditations, Child Protection and Green Hills
              Alumni
            </h3>
            <div className="">
              {expandData.map((item, index) => (
                <div key={index} className="my-4">
                  <div
                    className={`flex items-center justify-between p-4 ${
                      activeIndex === index
                        ? "bg-primary text-white"
                        : "bg-white"
                    } cursor-pointer`}
                    onClick={() => handleAccordionClick(index)}
                  >
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    {activeIndex === index ? (
                      <BsChevronUp className="w-6 h-6" />
                    ) : (
                      <BsChevronRight className="w-6 h-6" />
                    )}
                  </div>
                  {activeIndex === index && (
                    <p className="p-4 text-black text-lg bg-white bg-opacity-50">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
