"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ProgressBars } from "./progress";
const initialData = [
  {
    name: "John Doe",
    location: "New York",
    parentContact: "123-456-7890",
    grade: "A",
    yearOfEntry: 2020,
    status: "Active",
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    parentContact: "987-654-3210",
    grade: "B",
    yearOfEntry: 2019,
    status: "Active",
  },
  {
    name: "Alice Johnson",
    location: "Chicago",
    parentContact: "111-222-3333",
    grade: "A",
    yearOfEntry: 2021,
    status: "Inactive",
  },
  {
    name: "Bob Brown",
    location: "San Francisco",
    parentContact: "444-555-6666",
    grade: "C",
    yearOfEntry: 2018,
    status: "Active",
  },
];

const itemsPerPage = 6;

const PaginatedTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentItems = initialData.slice(firstItem, lastItem);

  return (
    <main>
      <div className="flex justify-between">
        <div className=" shadow w-full p-10 ml-10 mt-4">
          {" "}
          <div className="flex justify-between mt-1 mb-2">
            <div className="flex ">
              <p>Admissions</p>
              <div className="bg-[#018C79] rounded-full text-xl h-4 w-4 flex justify-center items-center">
                <p className="text-sm">10</p>
              </div>
            </div>

            <Link href="" className="text-[#018C79]">View All</Link>
          </div>
          <table className="table-auto h-fit w-[100%]">
            <thead className="w-full">
              <tr className="text-gray-500 text-sm">
                <th className="">Name</th>
                <th>Location</th>
                <th>Parent Contact</th>
                <th>Grade</th>
                <th>Year of Entry</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="p-2 w-full">
              {currentItems.slice(0, 4).map((item, index) => (
                <tr key={index} className=" w-full text-sm">
                  <td className="flex items-center gap-1 ">
                    <div className="bg-[#B2DEFF] p-4  rounded-full text-xl h-6 w-6 flex justify-center items-center">
                      <p className="uppercase">{item.name[0]}</p>
                    </div>
                    {item.name}
                  </td>
                  <td className="mt-4 tex-sm">{item.location}</td>
                  <td className="mt-4 tex-sm">{item.parentContact}</td>
                  <td className="mt-4 tex-sm">{item.grade}</td>
                  <td className="mt-4 tex-sm">{item.yearOfEntry}</td>
                  <td className="mt-4 text-[#B2DEFF] flex items-center text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#B2DEFF]"></span>
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <ProgressBars />
        </div>
      </div>
    </main>
  );
};

export default PaginatedTable;
