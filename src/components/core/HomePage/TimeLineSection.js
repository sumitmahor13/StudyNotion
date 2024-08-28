import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import TimeLineImage from "../../../assets/Images/TimelineImage.png"

const timeLine = [
    {
        logo: Logo1,
        heading:"Leadership",
        description:"Fully committed to the success company"
    },
    {
        logo: Logo2,
        heading:"Responsibility",
        description:"Students will always be our top priority"
    },
    {
        logo: Logo3,
        heading:"Flexibility",
        description:"The ability to switch is an important skills"
    },
    {
        logo: Logo4,
        heading:"Solve the problem",
        description:"Code your way to a solution"
    },
]

const TimeLineSection = () => {
  return (
    <div className='w-11/12 mx-auto bg-pure-greys-5 mt-10'>
        <div className='flex flex-col-reverse lg:flex-row items-center  '>
        <div className='w-[100%] lg:w-[45%] mt-10 lg:mt-0 flex flex-col gap-14'>
            {
                timeLine.map( (element, index) => {
                    return (
                        <div className='flex flex-row gap-6' key={index}>

                            <div className='w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full'>
                                <img src={element.logo} />
                            </div>

                            <div>
                                <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                <p className='text-base'>{element.description}</p>
                            </div>

                        </div>
                    )
                } )
            }
        </div>

            <div className='bg-white relative mb-10 shadow-[0px_0px_30px_6px_rgba(8,_112,_184,_0.7)]'>
                <img src={TimeLineImage} alt='TimeLine Image' className=' w-[40rem] h-fit relative shadow-white shadow-[10px_10px_0px_0px_rgba(255,255,255)] lg:shadow-[20px_20px_0px_0px_rgba(255,255,255)]'/>
                <div className='absolute h-10 gap-5 lg:gap-0  left-[5%] right-[5%] -bottom-10 bg-caribbeangreen-700 flex uppercase text-white py-10 px-5 lg:px-10'>  
                    <div className='flex mx-auto gap-3 lg:gap-10 items-center border-r border-caribbeangreen-300 lg:px-7'>
                        <p className=' text-md lg:text-3xl font-bold'>10</p>
                        <p className='text-caribbeangreen-300  text-xs lg:text-sm'>Years experiences</p>
                    </div>
                    <div className='flex mx-auto gap-3 lg:gap-10 items-center lg:px-7'>
                        <p className=' text-md lg:text-3xl font-bold'>250</p>
                        <p className='text-caribbeangreen-300 text-xs text-end lg:text-sm'>types of courses</p>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default TimeLineSection
