import React from 'react'
import { BsFillPeopleFill, BsStack  } from "react-icons/bs";

const CourseCard = ({key, cardData, currentCard, setCurrentCard}) => {
  return (
    <div className="">
      <div className='flex bg-richblack-700 lg:shadow-[15px_15px_0px_0px_rgba(255,232,61)] text-richblack-600 flex-col gap-5 w-[22rem] h-[20rem]'>
        <div className='p-5'>
            <h1 className='pb-2 text-xl text-richblack-25 font-bold'>{cardData.heading}</h1>
            <p className='pb-28 text-sm text-richblack-300 '>{cardData.description}</p>
        </div>
        <div className='flex px-5 py-3 flex-row justify-between border-t-2 border-dashed border-richblack-200'>
            <div className='flex items-center gap-2 text-richblack-100'><BsFillPeopleFill />{cardData.level}</div>
            <div className='flex items-center gap-2 text-richblack-100'><BsStack />{cardData.lessionNumber} Lesson</div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
