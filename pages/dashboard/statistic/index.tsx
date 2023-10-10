import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Content from "./stats";

function School() {
  return (
    <div>
      <DashboardLayout head="" style="text-base opacity-50">
        <Content />
      </DashboardLayout>
    </div>
  );
}

export default School;