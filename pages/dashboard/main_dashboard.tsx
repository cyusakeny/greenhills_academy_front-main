"use client";
import React from "react";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import DashbaordContent from "./dashboard_content";
import Layout from "@/components/Layout";

const MainDashboard: React.FC = () => {
  return (
    <div className="bg-[#F5FBFF] flex h-screen w-[100vw]">
      <SideBar />
      <div className="flex flex-col">
        <TopBar />
        <DashbaordContent />
      </div>
    </div>
  );
};

export default MainDashboard;
