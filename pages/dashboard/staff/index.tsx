import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Staff from "./staff";

function School() {
  return (
    <div>
      <DashboardLayout head="event page/event section" style="text-base opacity-50">
        <Staff />
      </DashboardLayout>
    </div>
  );
}

export default School;