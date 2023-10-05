/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import Event from "../../../components/ui/atoms/typesEvent";
import { useRouter } from "next/router";
import Error from "next/error";

const ReadMore = ({ job }: { job: Event }) => {
  if (!job) {
    return <Error statusCode={404} />;
  }
  const paragraphs = job.description.split(/\n\s*\n/);
  return (
    <Layout title="ReadMore">
      <main className="flex justify-center">
        <div className="w-3/4 my-12">
          <div className="flex w-full bg-primary">
            <div className="flex md:w-1/2 w-full justify-center items-center">
              <h2 className="text-center text-white">{job.title}</h2>
            </div>
            <div className="md:w-1/2 w-full h-full">
              <img
                src={job.imageUrl}
                alt={job.title}
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center w-full px-4">
            <div className="w-3/4 px-4">
              <hr className="w-[75px] h-1.5 bg-primary my-4" />
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="my-4 font-normal text-justify">
                  {paragraph}
                </p>
              ))}
              <div className="grid grid-cols-4 gap-8">
                {job.moreImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Event ${index}`}
                    className="more-image"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default ReadMore;

interface Params {
  slug: string;
}
export async function getServerSideProps({ params }: { params: Params }) {
  const { slug } = params;
  const foundJob = eventData.find((job) => job.slug === slug);
  if (foundJob) {
    const job = {
      title: foundJob.title || "",
      date: foundJob.date || "",
      description: foundJob.description || "",
      imageUrl: foundJob.imageUrl || "",
      slug: foundJob.slug || "",
      moreImages: foundJob.moreImages || "",
    };

    return {
      props: {
        job,
      },
    };
  }

  // If no job is found, return a 404 page
  return {
    notFound: true,
  };
}

const eventData: Event[] = [
  {
    title: "Rwanda Culture Day",
    date: "Dec 12 2023",
    description: `On Friday 28th August, 2020, the Nursery Principal, Ms. Carmel Faulkner held a virtual Parents Night with current and prospective nursery parents. At Green Hills Academy, we recognize parents are their child’s first, continuous and most important educator. We also understand that balancing home schooling, work and family commitments during the COVID closure is a huge challenge. Our nursery ‘at home learning’ aims to provide practical`,
    imageUrl: "/images/virtual.png",
    moreImages: ["/images/virtual.png", "/images/virtual.png"],
    slug: "deploy_virtual",
  },
  {
    title: "Multiculture Day",
    date: "Dec 12 2023",
    description: `On Friday 28th August, 2020, the Nursery Principal, Ms. Carmel Faulkner held a virtual Parents Night with current and prospective nursery parents. At Green Hills Academy, we recognize parents are their child’s first, continuous and most important educator. We also understand that balancing home schooling, work and family commitments during the COVID closure is a huge challenge. Our nursery ‘at home learning’ aims to provide practical`,
    imageUrl: "/images/parental.png",
    moreImages: ["/images/virtual.png", "/images/virtual.png"],
    slug: "parental_night",
  },
  {
    title: "Gasabo",
    date: "Dec 12 2023",
    description: `On Friday 28th August, 2020, the Nursery Principal, Ms. Carmel Faulkner held a virtual Parents Night with current and prospective nursery parents. At Green Hills Academy, we recognize parents are their child’s first, continuous and most important educator. We also understand that balancing home schooling, work and family commitments during the COVID closure is a huge challenge. Our nursery ‘at home learning’ aims to provide practical`,
    imageUrl: "/images/firstlady.png",
    moreImages: ["/images/virtual.png", "/images/virtual.png"],
    slug: "what_it_takes",
  },
  {
    title: "Christmas Concert",
    date: "Dec 12 2023",
    description: `On Friday 28th August, 2020, the Nursery Principal, Ms. Carmel Faulkner held a virtual Parents Night with current and prospective nursery parents. At Green Hills Academy, we recognize parents are their child’s first, continuous and most important educator. We also understand that balancing home schooling, work and family commitments during the COVID closure is a huge challenge. Our nursery ‘at home learning’ aims to provide practical`,
    imageUrl: "/images/ghatraining.png",
    moreImages: ["/images/virtual.png", "/images/virtual.png"],
    slug: "gha_training",
  },
  {
    title: "Graduation",
    date: "Dec 12 2023",
    description: `On Friday 28th August, 2020, the Nursery Principal, Ms. Carmel Faulkner held a virtual Parents Night with current and prospective nursery parents. At Green Hills Academy, we recognize parents are their child’s first, continuous and most important educator. We also understand that balancing home schooling, work and family commitments during the COVID closure is a huge challenge. Our nursery ‘at home learning’ aims to provide practical`,
    imageUrl: "/images/ghatraining.png",
    moreImages: ["/images/virtual.png", "/images/virtual.png"],
    slug: "gha_training",
  },
];
