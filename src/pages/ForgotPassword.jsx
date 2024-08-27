import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';
import { FaArrowLeft } from "react-icons/fa6";

const ForgotPassword = () => {

    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const {loading} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent))
    }

  return (
    <div className='text-white w-10/12 h-[90vh] mx-auto flex justify-center items-center'>
      {
        loading ? (<div className='loader'></div>
        ) : (
            <div className='w-[408px] h-[448px] mx-auto gap-3 flex flex-col justify-center '>
                <h1 className='text-[30px] font-bold'>
                    {
                        emailSent ? "Check email" : "Reset your password"  
                    }
                </h1>
                <p className='text-[18px] text-richblack-200 leading-6'>
                    {
                        emailSent ? `We have sent the reset email to ${email}` : "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                    }
                </p>
                <form onSubmit={handleOnSubmit} className='flex flex-col gap-5'>
                    {
                        !emailSent && (
                            <label>
                                <p className='text-[14px]'>Email Address<sup className="text-pink-200">*</sup></p>
                                <input 
                                    required
                                    type='email' 
                                    name='email' 
                                    value={email} 
                                    placeholder='Enter your Email Address' 
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] placeholder:text-sm pr-12 text-richblack-5'
                                />
                            </label>
                        )
                    }
                    <button type='submit' className='w-full rounded-[0.5rem] bg-yellow-50 p-[12px] text-richblack-900'>
                        {
                            emailSent ? "Resend Email" : "Submit"
                        }
                    </button>
                </form>
                <div>
                    <Link to="/login">
                        <p className='flex items-center gap-2'><FaArrowLeft />Back to Login</p>
                    </Link>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default ForgotPassword
