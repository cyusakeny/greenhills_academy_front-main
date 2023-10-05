/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
const Footer = () => {
  // const sponsorshipImages = Array.from(
  //   { length: 6 },
  //   (_, index) => `/images/spons${index + 1}.png`
  // );
  const sponsorshipImages = [
    "/images/logos-ib.png",
    "/images/keylink/aisa.png",
    "/images/keylink/acc.png",
    "/images/keylink/fl.jpg",
    "/images/keylink/logo_0.png",
    "/images/keylink/roundlogo.png",
    "/images/keylink/schlogo.png",
  ];
  return (
    <footer className="w-full bg-green flex text-xl justify-center mt-56">
      <div className="w-[80%] bg-white py-12 -mt-40 z-40 shadow shadow-primary shadow-inner rounded-[36px] my-16">
        <div className="flex sm:flex-wrap w-full place-items-center">
          <div className="w-1/4 sm:w-full sm:justify-center md:justify-center items-center flex">
            <img className="md:h-[150px] sm:h-[90px]" src="/images/logo.png" alt={""} />
          </div>
          <div className="sm:flex sm:justify-center md:w-3/4">
          <div className="sm:w-3/4">
            <div className="flex justify-between sm:flex-wrap items-center">
              <div className="grid gap-4">
                <Link href="/" className="text-dark">
                  Home
                  </Link>
                  <Link href="/news" className="text-dark">
                  About Us
                </Link>
                <Link href="/education" className="text-dark">
                  Education
                </Link>
              </div>
              <div className="grid gap-4">
                <Link href="/news">News & Events</Link>
                <Link href="/admissions">Admissions</Link>
                <Link href="/education">Alumin</Link>
              </div>
              <div className="grid md:gap-4 sm:w-full">
                <Link href={""} className="text-black">
                  PO BX 6419, Kigali KG 278 St, Nyarutarama Kigali
                  <br />
                  (behind the MTN Center)
                </Link>
                <Link href={"tel:+250735832348"}>+250 735 832 348</Link>
                <Link
                  href={"mailto:info@greenhillsacademy.rw"}
                  className="text-black"
                >
                  info@greenhillsacademy.rw
                </Link>
            </div>
            </div>
          </div>
          </div>
          <div className="w-1/4 sm:w-full justify-center items-center flex">
            <img className="h-[150px] sm:h-[90px]" src="/images/ib.png" alt={""} />
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-3/4 ">
            <div className="grid grid-cols-7 bg-white py-4 my-4 md:gap-8">
              {sponsorshipImages.map((imageUrl, index) => (
                <div
                  key={index}
                  className="h-16 bg-contain bg-center"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${imageUrl})`,
                  }}
                ></div>
              ))}
            </div>
            <hr />
            <div className="flex justify-center">
            <Link href={"/"} className="text-black text-center pt-4 font-normal">
              @Greenhillsacademy 2023
            </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
