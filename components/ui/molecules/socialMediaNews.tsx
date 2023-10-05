/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SocialMediaType } from "@/utils/enums/socialMediaTypes";
import SocialMediaCard from "../atoms/socialMediaCard";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const socialMediaData = [
  {
    socialMediaType: SocialMediaType.FaceBook,
    title: "Facebook Post 1",
    postImage: "/images/gh1.png",
    postDescription: "This is a Facebook post description.",
    likeCount: 100,
    commentCount: 20,
  },
  {
    socialMediaType: SocialMediaType.Instagram,
    title: "Instagram Post 1",
    postImage: "/images/culture.png",
    postDescription:
      "Amp chainlink siacoin amp waves gala TRON. Decred TRON hive flow quant decentraland flow siacoin.Crypto enjin bancor uniswap binance decred velas livepeer quant. Stacks kadena elrond IOTA..",
    likeCount: 200,
    commentCount: 30,
  },
  {
    socialMediaType: SocialMediaType.FaceBook,
    title: "Twitter Tweet 1",
    postImage: "/images/lab.png",
    postDescription: "This is a Twitter tweet description.",
    likeCount: 50,
    commentCount: 10,
  },
  {
    socialMediaType: SocialMediaType.Instagram,
    title: "Facebook Post 2",
    postImage: "/images/class.png",
    postDescription: "This is another Facebook post description.",
    likeCount: 150,
    commentCount: 25,
  },
  {
    socialMediaType: SocialMediaType.Instagram,
    title: "Instagram Post 2",
    postImage: "/images/culture.png",
    postDescription: "This is another Instagram post description.",
    likeCount: 300,
    commentCount: 40,
  },
  {
    socialMediaType: SocialMediaType.FaceBook,
    title: "Twitter Tweet 2",
    postImage: "/images/studentimage.jpg",
    postDescription: "This is another Twitter tweet description.",
    likeCount: 70,
    commentCount: 15,
  },
];

const SocialMediaContainer = () => {
  return (
    <div>
      <div className="w-full flex-col justify-start items-center gap-2 inline-flex">
        <div className="flex justify-center">
              <div className="w-[55px] grid place-items-center">
                <div className="w-[18px] h-[7px] my-2 bg-primary" />
                <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
              </div>
            </div>
        <h1 className="text-center text-primary font-bold">
          CONNECT WITH GREENHILLS
        </h1>
        <div className="text-primary text-lg font-semibold">
          #Greenhillsacademy
        </div>
        <div className="flex flex-row space-x-[11px] mt-4">
          <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
            <FaFacebook className="w-5 h-5 text-white" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
            <FaTwitter className="w-5 h-5 text-white" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
            <FaInstagram className="w-5 h-5 text-white" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
            <FaYoutube className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaContainer;
