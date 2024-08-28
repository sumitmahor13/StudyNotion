import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import CTAButton from '../components/core/HomePage/Button';
import HighlightText from '../components/core/HomePage/HighlightText'
import BannerVideo from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimeLineSection from '../components/core/HomePage/TimeLineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorImage from "../assets/Images/Instructor.png"
import ExploreMore from '../components/core/HomePage/ExploreMore';
import Footer from '../components/common/Footer';
import ReviewSlider from "../components/common/ReviewSlider"

const Home = () => {
  return (
    <div>
      {/* section1 */}
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between'>

        <Link to={"/signup"}>
            <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[7px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                    <p>Become an Instructor</p>
                    <FaArrowRight />
                </div>
            </div>

        </Link>

        <div className='text-center text-4xl font-semibold mt-7'>
            Empower Your Future with
            <HighlightText text={"Coding Skills"} />
        </div>

        <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div>

        <div className='flex flex-row gap-7 mt-8'>
            <CTAButton active={true} linkto={"/signup"}> 
                Learn More
            </CTAButton>

            <CTAButton active={false} linkto={"/login"}> 
                Book a Demo
            </CTAButton>
        </div>

        <div className='bg-white my-16 shadow-[0px_0px_50px_10px_rgba(8,_112,_184,_0.7)] '>
                <video muted autoPlay loop className='shadow-[10px_10px_0px_0px_rgba(255,255,255)] lg:shadow-[20px_20px_0px_0px_rgba(255,255,255)]'>
                    <source src={BannerVideo} type='video/mp4'/>
                </video>
            </div>

        {/* Code Section 1 */}
        <div>
            <CodeBlocks 
                position={"flex flex-col lg:flex-row"}
                heading={
                    <div className='text-4xl lg:w-[100%] w-[200%] font-semibold'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                         with our online courses 
                    </div>
                }
                subheading = {
                    <p className='w-[200%] lg:w-[100%]'>
                        Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
                    </p>
                }
                ctabtn1={
                    {
                        btnText: "Try it Yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "Learn More",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeColor={"text-yellow-25"}
                codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                backgroundGradient={<div className="codeblock1 absolute"></div>}
            />
        </div>

        {/* Code Section 2 */}
        <div>
            <CodeBlocks 
                position={"flex flex-col lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl w-[180%] lg:w-[100%] font-semibold'>
                        Start
                        <HighlightText text={"coding in a seconds"}/>
                        
                    </div>
                }
                subheading = {
                    <p className='w-[200%] lg:w-[100%]'>
                        Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.
                    </p>
                }
                ctabtn1={
                    {
                        btnText: "Continue Lesson",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "Learn More",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeColor={"text-white"}
                codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                backgroundGradient={<div className="codeblock2 absolute"></div>}
            />
        </div>

            <ExploreMore />
      </div>

      {/* section2 */}

      <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[100px] lg:h-[310px] mb-10 lg:mb-0'>

                <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-0 lg:gap-20 mx-auto'>
                    <div className='h-[150px]'></div>
                    <div className='flex flex-row gap-5 lg:gap-7 text-white '>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3' >
                                Explore Full Catalog
                                <FaArrowRight />
                            </div>
                            
                        </CTAButton>
                        <CTAButton active={false} linkto={"/signup"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>
                    </div>

                </div>


            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

                <div className='flex flex-col lg:flex-row justify-around mb-5 px-5 mt-[95px]'>
                    <div className='text-4xl w-full font-semibold lg:w-[45%]'>
                        Get the Skills you need for a
                        <HighlightText text={"Job that is in demand"} />
                    </div>

                    <div className='flex flex-col mt-3 lg:mt-0 gap-10 lg:w-[40%] w-full items-start'>
                    <div className='text-[16px]'>
                    The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                    </div>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div>
                            Learn more
                        </div>
                    </CTAButton>
                    </div>

                </div>
                
                

                <TimeLineSection />

                <LearningLanguageSection />

            </div>

            

      </div>

      {/* section3 */}
        <div className='w-10/12 max-w-maxContent mx-auto flex flex-col justify-center items-center mt-16 mb-16 text-white bg-richblack-900 '>
            <div className='flex flex-col lg:flex-row gap-20'>
                <div className='w-[100%] lg:w-[50%]'>
                    <img src={InstructorImage} className=' shadow-[-10px_-10px_0px_0px_rgba(255,255,255)] lg:shadow-[-20px_-20px_0px_0px_rgba(255,255,255)]'/>
                </div>
                <div className='w-[100%] lg:w-[50%] flex flex-col gap-10 justify-center'>
                    <div className='text-4xl w-[100%] lg:w-[50%] font-bold'>Become an<span className='bg-gradient-to-r from-blue-100 to-blue-500 bg-clip-text text-transparent'> instructor</span></div>
                    <div className='text-md text-richblack-300 '>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</div>
                    <Link to={"/signup"}>
                        <button className='bg-yellow-50 text-black flex items-center justify-center gap-2 text-center text-sm px-6 py-3 rounded-md font-bold hover:scale-95 transition-all duration-300 shadow-sm'>Start Teaching Today<FaArrowRight/></button>
                        
                    </Link>
                </div>
            </div>
        </div>

        {/* Review Slider */}
        <h1 className='text-center text-4xl font-semibold mt-10 text-white'>Review from other learners</h1>
        <ReviewSlider/>



      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Home