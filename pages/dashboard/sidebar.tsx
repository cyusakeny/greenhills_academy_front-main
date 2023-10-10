import React, { useState } from "react";

export const SideBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleMenuItemClick = (item: any) => {
    if (activeItem === item) {
      setActiveItem(null);
    } else {
      setActiveItem(item);
    }
  };

  const isItemActive = (item:any) => {
    return activeItem === item;
  };

  return (
    <div className="bg-white h-screen w-[300px] flex flex-col">
      <div className="mb-[30px] p-4 w-full mx-auto flex justify-center items-center">
        <img src="/images/logo.png" alt="" className="w-[100px]" />
      </div>
      <div className="p-10 gap-8 font-light relative text-[#4A4754] text-[15px] h-screen text-sm w-full">
        <div
          className={`flex gap-4 mb-10 ${
            isItemActive("home") ? "cursor-pointer" : ""
          }`}
          onClick={() => handleMenuItemClick("home")}
          onMouseEnter={() => handleMenuItemClick("home")}
          onMouseLeave={() => handleMenuItemClick(null)}
        >
          <img src="/images/home.svg" alt="" />
          <p className="">Home</p>
          {isItemActive("home") && (
            <div className="h-10 w-1 bg-primary absolute left-0 right-0"></div>
          )}
        </div>
        <div
          className={`flex gap-4 mb-10 ${
            isItemActive("news") ? "cursor-pointer" : ""
          }`}
          onClick={() => handleMenuItemClick("news")}
          onMouseEnter={() => handleMenuItemClick("news")}
          onMouseLeave={() => handleMenuItemClick(null)}
        >
          <img src="/images/news.svg" alt="" />
          <p>News and events</p>
          {isItemActive("news") && (
            <div className="h-10 w-1 bg-primary absolute left-0 right-0"></div>
          )}
        </div>
        <div
          className={`flex gap-4 mb-10 ${
            isItemActive("admission") ? "cursor-pointer" : ""
          }`}
          onClick={() => handleMenuItemClick("admission")}
          onMouseEnter={() => handleMenuItemClick("admission")}
          onMouseLeave={() => handleMenuItemClick(null)}
        >
          <img src="/images/admission.svg" alt="" />
          <p>Admission</p>
          {isItemActive("admission") && (
            <div className="h-10 w-1 bg-primary absolute left-0 right-0"></div>
          )}
        </div>
        <div
          className={`flex gap-4 mb-10 ${
            isItemActive("customization") ? "cursor-pointer" : ""
          }`}
          onClick={() => handleMenuItemClick("customization")}
          onMouseEnter={() => handleMenuItemClick("customization")}
          onMouseLeave={() => handleMenuItemClick(null)}
        >
          <img src="/images/news.svg" alt="" />
          <p>Customization</p>
          {isItemActive("customization") && (
            <div className="h-10 w-1 bg-primary absolute left-0 right-0"></div>
          )}
        </div>
        <div
          className={`flex gap-4 justify-between mb-10 ${
            isItemActive("schedule") ? "cursor-pointer" : ""
          }`}
          onClick={() => handleMenuItemClick("schedule")}
          onMouseEnter={() => handleMenuItemClick("schedule")}
          onMouseLeave={() => handleMenuItemClick(null)}
        >
          <p className="flex gap-4">
            <img src="/images/calendar.svg" alt="" />
            <p>Schedule</p>
            {isItemActive("schedule") && (
              <div className="h-10 w-1 bg-primary absolute left-0 right-0"></div>
            )}
          </p>
          <div className="bg-[#D7DE27] rounded-full text-xl h-6 w-6 flex justify-center items-center">
            <p className="text-sm">10</p>
          </div>
        </div>
        <div
          className={`flex gap-4 justify-between mb-10 ${
            isItemActive("profile") ? "cursor-pointer" : ""
          }`}
          onClick={() => handleMenuItemClick("profile")}
          onMouseEnter={() => handleMenuItemClick("profile")}
          onMouseLeave={() => handleMenuItemClick(null)}
        >
          <p className="flex gap-4">
            <img src="/images/person.svg" alt="" />
            <p>Profile</p>
            {isItemActive("profile") && (
              <div className="h-10 w-1 bg-primary absolute left-0 right-0"></div>
            )}
          </p>
          <div className="bg-[#018C79] rounded-full text-xl h-6 w-6 flex justify-center items-center">
            <p className="text-sm">10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
