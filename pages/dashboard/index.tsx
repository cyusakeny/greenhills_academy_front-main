import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import DashbaordContent from "./content/dashboard_content";


export default function Dashbaord() {
  return (
    <>
      <div className="w-[100vw]">
        <DashboardLayout>
          <DashbaordContent />
        </DashboardLayout>
      </div>
    </>
  );
}
