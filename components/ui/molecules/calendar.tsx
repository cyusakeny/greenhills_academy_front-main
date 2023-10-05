import React from 'react'
import CalendarCard from '@/components/ui/atoms/calendarCard'
export default function Calendar () {
  return (
    <div className='w-full pb-[22px] mt-12 place-content-center grid grid-rows-1 gap-8'>
      <div className='w-[248px] h-[45px] px-2 py-5 bg-primary rounded-2xl justify-center gap-1 items-center flex'>
        <div className="text-white text-base font-bold ">
          2023-2024 MAJOR EVENTS
        </div>
      </div>
      <div className="text-justify text-primary text-xl font-extrabold">
        Upcoming Events
      </div>

      <div className='justify-self-center grid md:grid-cols-2  grid-row-1 gap-4'>
        <CalendarCard />
        <CalendarCard />
        <CalendarCard />
      </div>
    </div>
  )
}
