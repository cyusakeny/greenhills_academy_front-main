import CalendarCard from "@/components/ui/atoms/calendarCard";
import React from "react";

const CalendarTabContent = () => {
  return (
    <div>
      <div className="flex justify-center my-8">
        <div
          className="w-3/4 h-[293px] grid place-items-center"
          style={{ backgroundImage: 'url("/images/learnerlife.png")' }}
        >
          <h5 className="h-full grid place-items-center text-white text-[23px] font-semibold">
            Calendar
          </h5>
        </div>
      </div>
      <div className="flex justify-center">
      <div className="w-3/4 pb-[22px] my-12 gap-8">
        <div className="text-justify text-primary pb-4 text-xl font-extrabold">
          Upcoming Events
        </div>

        <div className="justify-self-center grid md:grid-cols-2  grid-row-1 gap-4">
          <CalendarCard />
          <CalendarCard />
          <CalendarCard />
        </div>
      </div>
      </div>
    </div>
  );
};

export default CalendarTabContent;
