/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Slant as Hamburger } from "hamburger-react";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <section className="bg-white w-full flex justify-center p-2">
        <section
          className={`text-white ${
            router.pathname === "/" ? "w-[100%]" : "w-[100%]"
          } flex sm:flex-wrap items-center sm:justify-center md:justify-between text-lg font-normal font-['Outfit']`}
        >
          <div className="flex items-center md:space-x-8 md:w-2/3 mb-4 md:mb-0">
            <div className="">
              <Link href={"/"} passHref>
                <img
                  src="/images/logo.png"
                  alt="Logo Top"
                  className="h-[140px]"
                />
              </Link>
            </div>
            <div className="">
              <Link href={"/"} passHref>
                <img
                  src="/images/ibblue.png"
                  alt="Logo Top"
                  className="h-[120px]"
                />
              </Link>
            </div>
          </div>
          <div className="flex sm:hidden items-end sm:w-full space-x-[11px]">
            <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
              <Link href={""}>
                <FaFacebook className="w-5 h-5 text-white hover:text-[yellow]" />
              </Link>
            </div>
            <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
              <Link href={""}>
                <FaTwitter className="w-5 h-5 text-white hover:text-[yellow]" />
              </Link>
            </div>
            <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
              <Link href={""}>
                <FaInstagram className="w-5 h-5 text-white hover:text-[yellow]" />
              </Link>
            </div>
            <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
              <Link href={""}>
                <FaYoutube className="w-5 h-5 text-white hover:text-[yellow]" />
              </Link>
            </div>
            <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
              <Link href={""}>
                <FaPhoneAlt className="w-5 h-5 text-white hover:text-[yellow]" />
              </Link>
            </div>
          </div>
        </section>
      </section>

      <section className="flex justify-center">
        <div
          className={`bg-primary text-white ${
            router.pathname === "/" ? "w-[100%]" : "w-[100%]"
          } flex justify-between text-lg font-normal font-['Outfit'] p-4`}
        >
          <div className="flex sm:hidden items-center md:space-x-8">
            <div className="hover:border-[yellow] hover:border-b-2 text-white">
              <Link href="/" className="">
                Home
              </Link>
            </div>
            <div className="hover:border-[yellow] hover:border-b-2 text-white">
              <Link href="/about" className="">
                About&nbsp;us
              </Link>
            </div>
            <div className="hover:border-[yellow] hover:border-b-2 text-white">
              <Link href="/education" className="">
                Education
              </Link>
            </div>
            <div className="hover:border-[yellow] hover:border-b-2 text-white">
              <Link href="/admissions" className="">
                Admissions
              </Link>
            </div>
            <div className="hover:border-[yellow] hover:border-b-2 text-white">
              <Link href="/news" className="">
                News&nbsp;&&nbsp;Events
              </Link>
            </div>
            <div className="hover:border-[yellow] hover:border-b-2 text-white">
              <Link href="/contact" className="">
                Contact&nbsp;Us
              </Link>
            </div>

            <div className="bg-primary border hover:border-[yellow] rounded-full p-2">
              <Link
                href="/apply"
                className="text-white px-4 py-2 rounded-full"
                style={{ borderRadius: "50%" }}
              >
                Apply
              </Link>
            </div>
          </div>
          <div className="flex">
            <div
              className={`${
                !isMenuOpen ? "flex items-center space-x-4" : "hidden"
              }`}
            >
              <div className="text-white hidden md:inline cursor-pointer hover:text-gray-200">
                <FaSearch />
              </div>
              <span className="hidden md:inline">
                <input
                  type="text"
                  placeholder="SEARCH...."
                  className="h-full text-black w-20 text-lg font-medium font-['Outfit'] bg-transparent border-0 outline-none"
                />
              </span>
            </div>
            <div className="items-center flex">
              <div className="border-r border-dark h-5 hidden md:block" />
            </div>

            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={handleMenuToggle}
            >
              <div className="">
                <Hamburger
                  toggled={isMenuOpen}
                  toggle={handleMenuToggle}
                  size={24}
                />
              </div>
              <span className="inline font-[600]">MENU</span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex md:justify-end sm:bg-white text-lg font-normal font-['Outfit']">
        {isMenuOpen && (
          <div className="bg-white mt-1 bg-white absolute z-50 md:w-1/4">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="flex-col md:w-[452px] shadow-xl justify-start items-start gap-1 flex">
                <div className="w-full h-[72px] bg-[#018C79] w-full text-white px-6 py-2 flex justify-between">
                  <div className="w-[90%]">
                    <input
                      type="text"
                      placeholder="SEARCH...."
                      className="w-[100%] h-full text-white text-lg font-medium font-['Outfit'] bg-transparent border-0 outline-none"
                    />
                  </div>
                  <div className="flex w-[10%] items-center">
                    <button className="text-white hover:text-[yellow] text-center">
                      <Link href={""}>
                        <FaSearch className="w-6 h-6" />
                      </Link>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    window.location.href = "/";
                  }}
                  className={`w-full text-start px-6 h-[72px]  ${
                    router.pathname === "/"
                      ? "bg-primary text-white"
                      : "bg-[#EAFBF3]"
                  } hover:bg-primary text-lg font-medium font-['Outfit']`}
                >
                  HOME
                </button>
                <button
                  className="w-full text-start px-6 h-[72px] bg-[#EAFBF3] text-lg font-medium font-['Outfit']"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className=" flex justify-between">
                    ABOUT
                    {isDropdownOpen ? <BsChevronDown /> : <BsChevronRight />}
                  </div>
                </button>
                <Transition
                  show={isDropdownOpen}
                  enter="transition-opacity duration-300 ease-out"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-300 ease-out"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  {(ref) => (
                    <div
                      ref={ref}
                      className="z-10 absolute right-0 mt-2 py-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow"
                    >
                      <ul className="py-2 text-sm text-gray-700">
                        <li>
                          <Link
                            href="/about"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            General
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about/learners_tab"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Learners life
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about/boarding_tab"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Boarding
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about/facilities_tab"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Facilities
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Gallery
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </Transition>
                <button
                  onClick={() => {
                    // Handle the click event and navigate to the specified link
                    window.location.href = "/admissions";
                  }}
                  className={`w-full text-start px-6 h-[72px]  ${
                    router.pathname === "/admissions"
                      ? "bg-primary text-white"
                      : "bg-[#EAFBF3]"
                  } hover:bg-primary text-lg font-medium font-['Outfit']`}
                >
                  ADMISSION
                </button>
                <button
                  onClick={() => {
                    // Handle the click event and navigate to the specified link
                    window.location.href = "/admission";
                  }}
                  className={`w-full text-start px-6 h-[72px]  ${
                    router.pathname === "/student"
                      ? "bg-primary text-white"
                      : "bg-[#EAFBF3]"
                  } hover:bg-primary text-lg font-medium font-['Outfit']`}
                >
                  STUDENT EXPERIENCE
                </button>
                <button
                  onClick={() => {
                    // Handle the click event and navigate to the specified link
                    window.location.href = "/alumni";
                  }}
                  className={`w-full text-start px-6 h-[72px]  ${
                    router.pathname === "/alumni"
                      ? "bg-primary text-white"
                      : "bg-[#EAFBF3]"
                  } hover:bg-primary text-lg font-medium font-['Outfit']`}
                >
                  ALUMNI
                </button>
                <button
                  onClick={() => {
                    // Handle the click event and navigate to the specified link
                    window.location.href = "/news";
                  }}
                  className={`w-full text-start px-6 h-[72px]  ${
                    router.pathname === "/news"
                      ? "bg-primary text-white"
                      : "bg-[#EAFBF3]"
                  } hover:bg-primary text-lg font-medium font-['Outfit']`}
                >
                  NEWS AND EVENTS
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/calendar";
                  }}
                  className={`w-full text-start px-6 h-[72px]  ${
                    router.pathname === "/calendar"
                      ? "bg-primary text-white"
                      : "bg-[#EAFBF3]"
                  } hover:bg-primary text-lg font-medium font-['Outfit']`}
                >
                  CALENDAR
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                  className={`w-full text-start px-6 h-[72px]  ${
                    router.pathname === "/contact"
                      ? "bg-primary text-white"
                      : "bg-[#EAFBF3]"
                  } hover:bg-primary text-lg font-medium font-['Outfit']`}
                >
                  CONTACT US
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/gallery";
                  }}
                  className={`w-full text-start px-6 h-[72px]  ${
                    router.pathname === "/gallery"
                      ? "bg-primary text-white"
                      : "bg-[#EAFBF3]"
                  } hover:bg-primary text-lg font-medium font-['Outfit']`}
                >
                  GALLERY
                </button>
                <div className="bg-[#EAFBF3] flex items-center w-full pt-4 px-4 pb-8">
                  <div className="flex sm:w-full space-x-[11px]">
                    <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
                      <Link href={""}>
                        <FaFacebook className="w-5 h-5 text-white hover:text-[yellow]" />
                      </Link>
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
                      <Link href={""}>
                        <FaTwitter className="w-5 h-5 text-white hover:text-[yellow]" />
                      </Link>
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
                      <Link href={""}>
                        <FaInstagram className="w-5 h-5 text-white hover:text-[yellow]" />
                      </Link>
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
                      <Link href={""}>
                        <FaYoutube className="w-5 h-5 text-white hover:text-[yellow]" />
                      </Link>
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center relative bg-primary rounded-full">
                      <Link href={""}>
                        <FaPhoneAlt className="w-5 h-5 text-white hover:text-[yellow]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </nav>
  );
}
