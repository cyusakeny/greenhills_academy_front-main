/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Mission() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex sm:flex-wrap w-3/4">
        <div className="flex flex-col">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/lab.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className=" h-[400px] rounded-[16px]"
          />
          <div className="w-full flex justify-center">
            <div className="w-[95%] -mt-28 bg-primary p-12 rounded-2xl">
              <div className="sm:flex-wrap md:space-x-12 justify-between p-6 flex">
              <div className="flex justify-center md:w-1/2 gap-1">
                  <div>
                  <h2 className="text-[yellow] font-semibold">Mission</h2>
                  <p className="text-white text-xl text-justify">
                    Green Hills Academy nurtures a community of caring,
                    inquisitive and principled learners whose pursue excellence
                    and contribute to an equitable world.
                  </p></div>
                </div>
                <div className="flex justify-center md:w-1/2 gap-1">
                  <div className="">
                    <h2 className="text-[yellow] font-semibold ">Core value</h2>
                    <div className="text-white text-xl text-justify">
                      <ol className="list-disc ml-6">
                        <li>Integrity </li>
                        <li>Intellectual</li>
                        <li>Curiosity</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
