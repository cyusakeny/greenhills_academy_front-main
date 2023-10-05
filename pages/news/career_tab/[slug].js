import React from "react";
import Layout from "../../../components/Layout";
import { VscBriefcase, VscTypeHierarchy } from "react-icons/vsc";
import { AiOutlineClockCircle, AiOutlineExperiment } from "react-icons/ai";
import { BiSolidStarHalf, BiTimer } from "react-icons/bi";
import { BsCashCoin, BsFillBuildingFill } from "react-icons/bs";
import { GiLevelEndFlag } from "react-icons/gi";
import { useRouter } from "next/router";
import Error from "next/error";

const CareerApply = ({ job }) => {
  const router = useRouter();
  if (!job) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout>
      <main className="w-full flex justify-center">
        <section className="w-3/4">
          <div
            className="w-full h-[400px] flex items-center mt-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/studentimage.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="flex justify-between mt-4">
            <div>
              <h3 className="text-primary font-bold">{job.title}</h3>
              <div className="flex space-x-4 my-2">
                <div className="flex text-sm text-gray-400 space-x-1.5">
                  <VscBriefcase className="text-sm mt-0.5 font-bold" />{" "}
                  <span>{job.type}</span>
                </div>
                <div className="flex text-sm text-gray-400 space-x-1.5">
                  <AiOutlineClockCircle className="text-sm mt-0.5 font-bold" />{" "}
                  <span>{job.posted}</span>
                </div>
              </div>
            </div>
            <button className="bg-primary rounded-lg text-white ">
              <div className="flex justify-center space-x-2">
                <span>Apply now</span>{" "}
                <BiSolidStarHalf className="mt-1 text-[yellow]" />
              </div>
            </button>
          </div>
          <hr />
          <div className="flex justify-center">
            <div className="border bg-primary text-white shadow-lg rounded-xl my-12 w-3/4 border-gray-200 p-4">
              <h4 className="font-bold">Employment Information</h4>
              <hr />
              <div className="my-4 grid md:grid-cols-3 gap-x-8 gap-y-4">
                <div className="flex space-x-8">
                  <div className="flex space-x-2 text-white">
                    <BsFillBuildingFill className="mt-1 text-sm grid place-items-center text-[yellow]" />
                    <p className="text-sm grid place-items-center">Industry:</p>
                  </div>
                  <p className="font-semibold text-lg text-white">
                    Content Writer/ Finance
                  </p>
                </div>
                <div className="flex space-x-8 text-white">
                  <div className="flex space-x-2 text-white">
                    <GiLevelEndFlag className="mt-1 text-sm grid place-items-center text-[yellow]" />
                    <p className="text-sm grid place-items-center">
                      Job level:
                    </p>
                  </div>
                  <p className="font-semibold text-lg text-white">
                    Experienced
                  </p>
                </div>{" "}
                <div className="flex space-x-8">
                  <div className="flex space-x-2 text-white">
                    <BsCashCoin className="mt-1 text-sm grid place-items-center text-[yellow]" />
                    <p className="text-sm grid place-items-center">Salary:</p>
                  </div>
                  <p className="font-semibold text-lg text-white">$500</p>
                </div>{" "}
                <div className="flex space-x-8">
                  <div className="flex space-x-2 text-white">
                    <VscTypeHierarchy className="mt-1 text-sm grid place-items-center text-[yellow]" />
                    <p className="text-sm grid place-items-center">Job type:</p>
                  </div>
                  <p className="font-semibold text-lg text-white">Full Time</p>
                </div>
                <div className="flex space-x-8">
                  <div className="flex space-x-2 text-white">
                    <AiOutlineExperiment className="mt-1 text-sm grid place-items-center text-[yellow]" />
                    <p className="text-sm grid place-items-center">
                      Experience:
                    </p>
                  </div>
                  <p className="font-semibold text-lg text-white">2-4 Years</p>
                </div>
                <div className="flex space-x-8">
                  <div className="flex space-x-2 text-white">
                    <BiTimer className="mt-1 text-sm grid place-items-center text-[yellow]" />
                    <p className="text-sm grid place-items-center">
                      Published:
                    </p>
                  </div>
                  <p className="font-semibold text-lg text-white">22/09/2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 p-4">
            <h4 className="font-bold">Job Description</h4>
            <hr />
            <p className="text-justify">{job.description}</p>
            <div className="flex justify-start py-4">
              <button className="bg-primary rounded-lg text-white ">
                <div className="flex justify-center space-x-2">
                  <span>Apply now</span>{" "}
                  <BiSolidStarHalf className="mt-1 text-[yellow]" />
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CareerApply;

export async function getServerSideProps({ params }) {
  const { slug } = params;

  // Find the job object that matches the current slug
  const job = jobData.find((job) => job.slug === slug);

  return {
    props: {
      job,
    },
  };
}

const jobData = [
  {
    slug: "figma-designer",
    title: "Figma Designer",
    type: "Full Time",
    posted: "Posted 12 months ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur...Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur...",
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    type: "Part Time",
    posted: "Posted 6 months ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur...Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur...",
  },
  {
    slug: "marketing-manager",
    title: "Marketing Manager",
    type: "Part Time",
    posted: "Posted 6 months ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur...Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur...",
  },
];
