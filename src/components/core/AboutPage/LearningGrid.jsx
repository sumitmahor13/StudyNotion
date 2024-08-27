import React from 'react'
import { Link } from 'react-router-dom';

const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];

const LearningGrid = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 w-11/12 lg:w-10/12 max-w-maxContent mx-auto my-20'>
      {
        LearningGridArray.map((card, index) => {
            return(
                <div key={index} className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                                             ${card.order % 2 === 1 ? "bg-richblack-700" : "bg-richblack-800"}
                                             ${card.order === 3 && "lg:col-start-2"}
                                             ${card.order < 0 && "bg-transparent"}`} >
                    {
                        card.order < 0 ? 
                        (
                            <div className='lg:w-[90%] flex flex-col pb-5 gap-2'>
                                <h1 className='text-4xl font-bold'>World-Class Learning for</h1>
                                <h1 className=' text-4xl font-bold bg-gradient-to-r from-blue-100 to-blue-500 bg-clip-text text-transparent'>Anyone, Anywhere</h1>
                                <p>Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.</p>
                                <Link to={"/signup"}>
                                    <button className='bg-yellow-50 text-center text-sm px-6 py-3 rounded-md font-bold hover:scale-95 transition-all duration-300 text-richblack-900 shadow-sm shadow-richblack-600'>Learn More</button>
                                </Link>
                            </div>
                        ): 
                        (
                            <div className='flex flex-col gap-8 p-10 h-[280px]'>
                                <h1 className='text-richblack-5 text-lg'>{card.heading}</h1>
                                <p className='text-richblack-300 font-medium'>{card.description}</p>
                            </div>
                        )
                    }
                </div>
            )
        })
      }
    </div>
  )
}

export default LearningGrid
