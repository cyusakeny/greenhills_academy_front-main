import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocationPin, MdMail, MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <Layout>
      <main className="flex justify-center">
        <section className="w-3/4 py-12">
          <div className="flex justify-center">
            <div className=" ">
              <h1 className="capitalize text-center text-primary">
                reach out to us
              </h1>
              <div className="flex sm:flex-wrap justify-between md:gap-8 my-4 text-lg">
                <div className="flex gap-2 md:my-4">
                  <MdMail className="mt-1 text-primary text-lg" />
                  <Link href={"mailto:info@greenhillsacademy.rw"}>info@greenhillsacademy.rw</Link>
                </div>
                <div className="flex md:my-4">
                  <hr className="h-6 w-0.5 bg-black" />
                </div>
                <div className="flex gap-2 md:my-4">
                  <MdPhone className="mt-1 text-primary text-lg" />
                  <Link href={"tel:+250735832348"}> +250 735 832 348 </Link>
                </div>
                <div className="flex sm:hidden my-4">
                  <hr className="h-6 w-0.5 bg-black" />
                </div>
                <div className="flex gap-2 sm:w-full sm:justify-center md:my-4">
                  <MdLocationPin className="mt-1 text-primary text-lg" />
                  <Link href={""}>
                    PO BX 6419, Kigali KG 278 St, Nyarutarama Kigali
                  </Link>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex sm:flex-wrap w-3/4 my-12">
              <div className="md:w-1/2">
                <h2 className="text-primary md:mb-12 font-bold uppercase font-['Outfit']">
                  our schedule
                </h2>
                <div className="mb-4">
                  <p className="font-bold">Sunday</p>
                  <p className="">Closed</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold">Saturday</p>
                  <p className="">Closed</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold">Monday - Friday</p>
                  <p className="">7:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-primary md:mb-6 font-bold uppercase font-['Outfit']">
                  query form
                </h2>
                <div className="mb-4">
                  <p className="pb-1">Name</p>
                  <input type="name" placeholder="Enter your name" />
                </div>
                <div className="my-4">
                  <p className="pb-1">Email</p>
                  <input type="email" placeholder="example@gmail.com" />
                </div>
                <div className="my-4">
                  <p className="pb-1">Message</p>
                  <textarea placeholder="Your message for us" rows={4} />
                </div>
                <div className="my-8">
                  <button
                    type="submit"
                    className="capitalize bg-primary text-white w-full rounded-xl text-lg"
                  >
                    Submit now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
