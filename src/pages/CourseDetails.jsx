import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { buyCourse } from '../services/operations/studentFeaturesAPI';
import { fetchCourseDetails } from '../services/operations/courseDetailsAPI';
import { setCourse } from '../slices/courseSlice';
import GetAvgRating from '../utils/avgRating';
import Error from "./Error"
import ConfirmationModal from "../components/common/ConfirmationModal"
import RatingStars from "../components/common/RatingStars"
import { formatDate } from '../services/formatDate';
import { PiWarningCircle } from "react-icons/pi";
import { BsGlobe } from "react-icons/bs";
import CourseAccordionBar from "../components/core/Catalog/Course/CourseAccordionBar"
import CourseDetailsCard from '../components/core/Catalog/Course/CourseDetailsCard';
import Footer from '../components/common/Footer';

const CourseDetails = () => {

    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state)=>state.auth);
    const {loading} = useSelector((state) => state.profile);
    const {paymentLoading} = useSelector((state)=> state.course);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {courseId}  = useParams();

    const [courseData , setCourseData] = useState(null);
    const [confirmationModal, setConfirmationModal] = useState(null);
    useEffect(()=> {
        const getCourseFullDetails = async() => {
            try{
                const result = await fetchCourseDetails(courseId);
                console.log("Printing CourseData-> " , result);
                setCourseData(result);
            }
            catch(error) {
                console.log("Could not fetch coursse details");
            }
        }
        getCourseFullDetails();
        
    }, [courseId]);

    const [avgReviewCount, setAverageReviewCount] = useState(0);

    useEffect(()=> {
        const count = GetAvgRating(courseData?.data?.courseDetails.ratingAndReviews);
        setAverageReviewCount(count);
    },[courseData])

    const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
    useEffect(()=> {
        let lectures = 0;
        courseData?.data?.courseDetails?.courseContent?.forEach((sec) => {
            lectures += sec.subSection.length || 0
        })
        setTotalNoOfLectures(lectures);

    },[courseData]);


    const [isActive, setIsActive] = useState(Array(0));
    const handleActive = (id) => {
        setIsActive(
            !isActive.includes(id)
             ? isActive.concat(id)
             : isActive.filter((e)=> e != id)

        )
    }

    const handleBuyCourse = () => {
        
        if(token) {
            buyCourse(token, [courseId], user, navigate, dispatch);
            return;
        }
        setConfirmationModal({
            text1:"you are not Logged in",
            text2:"Please login to purchase the course",
            btn1Text:"Login",
            btn2Text:"Cancel",
            btn1Handler:() => navigate("/login"),
            btn2Handler:()=>setConfirmationModal(null),
        })

    }

    if(loading || !courseData) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if(!courseData.success) {
        return (
            <div>
                <Error />
            </div>
        )
    }
    const {
        _id: course_id,
        courseName,
        courseDescription,
        thumbnail,
        price,
        whatYouWillLearn,
        courseContent,
        ratingAndReviews,
        instructor,
        studentsEnrolled,
        createdAt,
    } = courseData.data?.courseDetails;

  return (
    <div className='flex flex-col text-lg text-white'>

        <div className='relative flex gap-3 px-5 lg:px-36 bg-richblack-800 lg:pt-[7rem] h-[65vh] flex-col justify-start p-8'>
            <p className='font-bold text-4xl lg:text-5xl'>{courseName}</p>
            <p className='text-lg text-richblack-300'>{courseDescription}</p>
            <div className='flex gap-x-2 text-xs lg:text-md items-center'>
                <span className='text-md'>{avgReviewCount}</span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                <span>{`(${ratingAndReviews.length} reviews) `}</span>
                <span className='text-richblack-200'>{`${studentsEnrolled.length} students enrolled`}</span>
            </div>

            <div>
                <p className='lg:text-md text-sm '>Created By {`${instructor.firstName} ${instructor.lastName}`}</p>
            </div>

            <div className='flex gap-x-3 text-xs lg:text-lg'>
                <p className='flex items-center gap-2'>
                    <PiWarningCircle className='text-xl' />
                    Created at {formatDate(createdAt)}
                </p>
                <p className='flex items-center gap-2'>
                    <BsGlobe />
                    {" "} English
                </p>
            </div>

            <div>
                <CourseDetailsCard 
                    course = {courseData?.data?.courseDetails}
                    setConfirmationModal = {setConfirmationModal}
                    handleBuyCourse = {handleBuyCourse}
                />
            </div>
        </div>

        <div className='mt-[32rem] lg:mt-12 p-8 mx-auto lg:ml-36 w-11/12 lg:w-6/12 border border-richblack-500'>
            <p className='font-bold text-3xl'> What You'll learn</p>
            <div className='mt-5 text-sm'>
                {whatYouWillLearn}
            </div>
        </div>

        <div className='mt-[0rem] lg:mt-12 lg:p-8 mx-auto lg:ml-36 w-11/12 lg:w-6/12'>
            <div>
                <p className='text-4xl font-bold my-5'>Course Content</p>
            </div>

            <div className='flex gap-x-3 lg:flex-col flex-col justify-between text-md'>

                   <div>
                    <span>{courseContent.length} section(s)</span>

                        <span>
                            {totalNoOfLectures} lectures
                        </span>
                        <span>
                            {courseData.data?.totalDuration} total length
                        </span>
                   </div>

                   <div>
                        <button
                        className='text-yellow-100'
                            onClick={() => setIsActive([])}>
                            Collapse all Sections
                        </button>
                   </div>

            {/* Course Details Accordion */}
            <div className="py-4">
              {courseContent?.map((course, index) => (
                <CourseAccordionBar
                  course={course}
                  key={index}
                  isActive={isActive}
                  handleActive={handleActive}
                />
              ))}
            </div>

            {/* Author Details */}
            <div className="mb-12 py-4">
              <p className="text-[28px] font-semibold">Author</p>
              <div className="flex items-center gap-4 py-4">
                <img
                  src={
                    instructor.image
                      ? instructor.image
                      : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
                  }
                  alt="Author"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <p className="text-lg">{`${instructor.firstName} ${instructor.lastName}`}</p>
              </div>
              <p className="text-richblack-50">
                {instructor?.additionalDetails?.about}
              </p>
            </div>

            </div>
            
        </div>





        {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
    
    {/* Footer */}
    <Footer/>
    </div>
  )
}

export default CourseDetails
