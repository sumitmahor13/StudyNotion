import React, { useState } from 'react'

import {Chart, registerables} from "chart.js"
import {Pie} from "react-chartjs-2"

Chart.register(...registerables);

const InstructorChart = ({courses}) => {

    const [currChart, setCurrChart] = useState("students");

    //functio to genertae random colors
    const getRandomColors = (numColors) => {
        const colors = [];
        for(let i=0; i<numColors; i++) {
            const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random()*256)},
            ${Math.floor(Math.random()*256)})`
            colors.push(color);
        }
        return colors;
    }

    //create data for chart displaying student info

    const chartDataStudents = {
        labels: courses.map((course)=> course.courseName),
        datasets: [
            {
                data: courses.map((course)=> course.totalStudentsEnrolled),
                backgroundColor: getRandomColors(courses.length),
            }
        ]
    }


    //create data for chart displaying iincome info
    const chartIncomeData = {
        labels:courses.map((course)=> course.courseName),
        datasets: [
            {
                data: courses.map((course)=> course.totalAmountGenerated),
                backgroundColor: getRandomColors(courses.length),
            }
        ]
    }


    //create options
    const options = {

    };


  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:w-[65%] lg:gap-20 rounded-md bg-richblack-800 p-6">
      <div className="space-x-4 flex flex-col gap-5 font-semibold">
      <p className="text-lg font-bold text-richblack-5">Visualize</p>
        {/* Button to switch to the "students" chart */}
        <div className='flex flex-row lg:flex-col gap-2'>
          <button
            onClick={() => setCurrChart("students")}
            className={`rounded-sm p-1 px-3 transition-all duration-200 ${
              currChart === "students"
                ? "bg-richblack-700 text-yellow-50"
                : "text-yellow-400"
            }`}
          >
            Students
          </button>
          {/* Button to switch to the "income" chart */}
          <button
            onClick={() => setCurrChart("income")}
            className={`rounded-sm p-1 px-3 transition-all duration-200 ${
              currChart === "income"
                ? "bg-richblack-700 text-yellow-50"
                : "text-yellow-400"
            }`}
          >
            Income
          </button>

        </div>
      </div>
      <div className=" my-5 lg:my-0 mx-auto aspect-square h-full w-full">
        {/* Render the Pie chart based on the selected chart */}
        <Pie
          data={currChart === "students" ? chartDataStudents : chartIncomeData}
          options={options}
        />
      </div>
    </div>
  )
}

export default InstructorChart
