import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const initialData = {
    labels: labels,
    datasets: [
      {
        label: "Users",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "#5CA7EF",
        borderRadius: 4
      },
    ],
  };

  const months = ["Monthly", ...labels];

  const filterData = (selectedMonth: any) => {
    const monthIndex = months.indexOf(selectedMonth);
    return {
      labels: [selectedMonth],
      datasets: initialData.datasets.map((dataset) => ({
        ...dataset,
        data: [dataset.data[monthIndex]],
      })),
    };
  };

  const [selectedMonth, setSelectedMonth] = useState("Monthly");

  const filteredData =
    selectedMonth === "Monthly" ? initialData : filterData(selectedMonth);

 

  return (
    <div className="w-[500px] mt-4 ml-10 shadow mr-10  h-[300px] p-10">
      <div className="flex  justify-between">
        <p>Users Perfomance</p> 
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="bg-gray-200 rounded-md text-[#287BCB] outline-none cursor-pointer"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
        <Bar  className="cursor-pointer h-[400px]" data={filteredData} />
    </div>
  );
};

export default BarChart;
