import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Customize from "./customize";

function School() {
  return (
    <div>
      <DashboardLayout head="landing page/reasons" style="text-base opacity-50">
        <Customize />
      </DashboardLayout>
    </div>
  );
}

export default School;