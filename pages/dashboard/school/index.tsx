import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Content from "./school";

function School() {
  return (
    <div>
      <DashboardLayout head="wep page">
        <Content />
      </DashboardLayout>
    </div>
  );
}

export default School;
