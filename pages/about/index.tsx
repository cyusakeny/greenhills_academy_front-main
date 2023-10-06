import React, { useState } from "react";
import Nav from "@/components/ui/molecules/nav";
import Footer from "@/components/ui/molecules/footer";
import AboutDetails from "@/components/ui/molecules/aboutDetails";
import Calendar from "@/components/ui/molecules/calendar";
import LearnersLife from "@/components/ui/molecules/learnerLife";
import Layout from "@/components/Layout";
import GeneralTabContent from "./general_tab";
import LearnersLifeTabContent from "./learners_tab";
import BoardingTabContent from "./boarding_tab";
import FacilitiesTabContent from "./facilities_tab";
import GalleryTabContent from "./gallery_tab";
import CalendarTabContent from "./calendar_tab";

export default function About() {
  const [isGeneral, setIsGeneral] = useState(true);
  const [isLearnerLife, setIsLearnerLife] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [selectedTab, setSelectedTab] = useState("General");

  const handleTabClick = (tabName: any) => {
    setSelectedTab(tabName);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "General":
        return <GeneralTabContent />;
      case "Learners life":
        return <LearnersLifeTabContent />;
      case "Boarding":
        return <BoardingTabContent />;
      case "Facilities":
        return <FacilitiesTabContent />;
      case "Gallery":
        return <GalleryTabContent />;
      case "Calendar":
        return <CalendarTabContent />;
      default:
        return null;
    }
  };
  const toggleGeneral = () => {
    setIsGeneral(true);
    setIsCalendar(false);
    setIsLearnerLife(false);
  };
  const toggleLearnerLife = () => {
    setIsGeneral(false);
    setIsCalendar(false);
    setIsLearnerLife(true);
  };
  const toggleCalendar = () => {
    setIsGeneral(false);
    setIsCalendar(true);
    setIsLearnerLife(false);
  };
  const getSelectedComponent = () => {
    if (isGeneral) {
      return <AboutDetails />;
    }
    if (isCalendar) {
      return <Calendar />;
    }
    if (isLearnerLife) {
      return <LearnersLife />;
    }
  };
  return (
    <Layout>
      <main>
        <div className="">
          <div className="flex justify-center">
            <div className="text-center w-3/4 my-12">
              <div className="flex justify-center">
                <div className="w-[55px] grid place-items-center">
                  <div className="w-[18px] h-[7px] my-2 bg-primary" />
                  <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
                </div>
              </div>
              <div className="flex justify-center">
                <h1 className="text-primary capitalize sm:text-2xl">
                  {" "}
                  Green hills academy at glimpse
                </h1>
              </div>
              {/* <div className="flex justify-center">
                <div className=" w-1/2">
                  <p className="h-auto text-center text-black md:text-[22px] text-[14px] font-semibold justify-self-center">
                    For more than 30 years cardano ethereum cosmos. Decred
                    algorand avalanche zcash siacoin zcash.
                  </p>{" "}
                  <p className="text-center my-4 text-gray-700 text-lg font-normal font-['Outfit']">
                    Binance bitcoin holo bancor polygon filecoin. Quant
                    decentraland elrond aave dash stacks ankr. Avalanche IOTA
                    uniswap
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <GeneralTabContent />
        </div>
      </main>
    </Layout>
  );
}


