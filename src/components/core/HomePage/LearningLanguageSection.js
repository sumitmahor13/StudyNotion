import React from 'react'
import { Link } from 'react-router-dom'
import KnowYourProgress from "../../..//assets/Images/Know_your_progress.svg"
import CompareWithOthers from "../../../assets/Images/Compare_with_others.svg"
import PlaneYourLesson from "../../../assets/Images/Plan_your_lessons.svg"

const LearningLanguageSection = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col text-richblack-900 mt-24 pb-16'>
      <div className='text-4xl font-bold mx-auto '>
        Your swiss knife for
        <span className='bg-gradient-to-r from-blue-100 to-blue-500 bg-clip-text text-transparent'> learning any language</span>
      </div>

      <div className='mx-auto text-md mt-3 text-start lg:text-center w-[100%] lg:w-[58%]'>
        Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
      </div>

      <div className='flex flex-col lg:flex-row bg-pure-greys-5 justify-center items-center'>
        <img className='object-contain mt-10 lg:-mr-32' src={KnowYourProgress} alt='Know Your Progrss'/>
        <img className='object-contain' src={CompareWithOthers} alt='Compare With Others'/>
        <img className='object-contain lg:-ml-36' src={PlaneYourLesson} alt='Plane Your Lesson'/>
      </div>

      <Link to={"/signup"} className='mx-auto'>
        <button className='bg-yellow-50 text-center text-sm px-6 py-3 rounded-md font-bold hover:scale-95 transition-all duration-300 shadow-sm'>Learn More</button>
      </Link>
    </div>
  )
}

export default LearningLanguageSection
