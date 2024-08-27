import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OtpInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';
import { sendOtp, signUp } from '../services/operations/authAPI';
import { FaArrowLeft } from "react-icons/fa6";
import { PiClockCounterClockwise } from "react-icons/pi";

const VerifyEmail = () => {

    const {signupData, loading} = useSelector((state) => state.auth);
    const [otp, setOtp] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!signupData){
            navigate("/signup")
        }
    },[])

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword} = signupData

        dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate));
    }

  return (
    <div className='text-white w-10/12 h-[90vh] mx-auto flex justify-center items-center'>
      {
        loading ? (<div className='loader'></div>)
        : (
            <div className='w-[408px] h-[448px] mx-auto gap-3 flex flex-col justify-center '>
                <h1 className='text-[30px] font-bold'>Verify email</h1>
                <p className='text-[18px] text-richblack-200 leading-6'>A verification code has been sent to you. Enter the code below</p>
                <form onSubmit={handleOnSubmit} className='flex flex-col gap-5'>
                    <OtpInput
                    skipDefaultStyles="true"
                    containerStyle="gap-[0.45rem]"
                    inputStyle="w-full placeholder:text-white text-center text-2xl bg-richblack-800 w-[3.5rem] h-[4rem] rounded-[0.5rem]"
                    value={otp}
                    isInputNum={true}
                    onChange={setOtp}
                    placeholder="-"
                    color="white"
                    numInputs={6}
                    renderSeparator={<span></span>}
                    renderInput={(props) => <input {...props} />}
                    />
                    <button type='submit' className='w-full rounded-[0.5rem] bg-yellow-50 p-[12px] text-richblack-900'>
                        <p>Verify email</p>
                    </button>
                </form>
                <div className='flex justify-between'>
                    <div>
                        <Link to="/login">
                            <p className='flex items-center gap-2'><FaArrowLeft />Back to SignUp</p>
                        </Link>
                    </div>
                    <button onClick={() => dispatch(sendOtp(signupData.email, navigate))} className='text-blue-200'>
                       <p className='flex items-center gap-1'><PiClockCounterClockwise className='text-xl' />Resend it</p>
                    </button>
                </div>
                
            </div>
        )
      }
    </div>
  )
}

export default VerifyEmail
