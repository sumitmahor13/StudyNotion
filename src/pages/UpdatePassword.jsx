import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/operations/authAPI';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";


const UpdatePassword = () => {

const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const [formData, setFormData] = useState({password:"", confirmPassword:""})  
const {loading} = useSelector((state) => state.auth);
const navigate = useNavigate();
const dispatch = useDispatch();
const location = useLocation();

const {password, confirmPassword} = formData;

const handleOnChnage = (e) => {
    setFormData((prevData) => (
        {
            ...prevData,
            [e.target.name] : e.target.value,
        }
    ))
}

const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate));
}

  return (
    <div className='text-white w-10/12 h-[90vh] mx-auto flex justify-center items-center'>
      {
        loading ? (<div className='loader'></div>)
        : (
            <div className='w-[408px] h-[448px] mx-auto gap-3 flex flex-col justify-center '>
                <h1 className='text-[30px] font-bold'>Choose New Password</h1>
                <p className='text-[18px] text-richblack-200 leading-6'>Almost done. Enter your new password and youre all set.</p>
                <form onSubmit={handleOnSubmit} className='flex flex-col gap-5'>
                    <label className='relative'>
                        <p>New Password<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name='password'
                            value={password}
                            onChange={handleOnChnage}
                            placeholder='Enter new password'
                            className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] placeholder:text-sm pr-12 text-richblack-5'
                        />
                        <span onClick={()=>{setShowPassword((prev)=> !prev)}} className="absolute top-[50%] right-[3%]">
                            {showPassword ? (<AiOutlineEye fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>

                    <label className='relative'>
                        <p>Confirm New Password<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={handleOnChnage}
                            placeholder='Confirm new password'
                            className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] placeholder:text-sm pr-12 text-richblack-5'
                        />
                        <span onClick={()=>{setShowConfirmPassword((prev)=> !prev)}} className="absolute top-[50%] right-[3%]">
                            {showConfirmPassword ? (<AiOutlineEye fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>

                    <button type='submit' className='w-full rounded-[0.5rem] bg-yellow-50 p-[12px] text-richblack-900'>
                        <p>Reset Password</p>
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

export default UpdatePassword
