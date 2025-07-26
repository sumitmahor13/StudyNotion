import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import ContryCode from "../../data/countrycode.json"

const ContactUsForm = () => {
  
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
    } = useForm();

    const submitContactForm = async(data) => {

    }

    useEffect(()=>{
        if(isSubmitSuccessful){
           reset({
            firstName:"",
            lastName:"",
            email:"",
            contryCode:"",
            phoneNo:"",
            message:"",
           })
        }
    },[reset, isSubmitSuccessful])

  return (
    <div className='mb-20'>
      <form onSubmit={handleSubmit(submitContactForm)} className='flex flex-col gap-2'>
        <div className='flex gap-5'>
            <label className='flex flex-col w-[48%]'>
                First Name
                <input 
                    type='text' 
                    name='firstName' 
                    id='firstName' 
                    placeholder='Enter First Name' 
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    {...register('firstName', {required:true})} 
                />
                {errors.firstName && <span className="text-xs mt-1 text-[#FF0000]">First name is required!</span>}
            </label>
            <label className='flex flex-col w-[48%]'>
                Last Name
                <input  
                    type='text' 
                    id='lastName' 
                    name='lastName' 
                    placeholder='Enter Last Name' 
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    {...register('lastName')}
                />
            </label>
        </div>
        <label className='flex flex-col'>
            Email Address
            <input 
                type='email' 
                id='email' 
                name='email' 
                placeholder='Enter Email Address' 
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                {...register('email', {required:true})} 
            />
            {errors.email && <span className="text-xs mt-1 text-[#FF0000]">Email Address is required!</span>}
        </label>
        <div>
            <label className='flex flex-col'>
            Phone Number
                <div className='flex gap-5 '>
                    <select 
                        id='contryCode' 
                        name='contryCode'
                        className="w-[16%] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                        {...register('contryCode', {required:true})} 
                     >
                        {
                            ContryCode.map((element, index)=>{
                                return(
                                    <option key={index} value={element.code} className='bg-richblack-800'>
                                        {element.code} -{element.country}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <input
                        type="number"
                        name='phoneNo'
                        id='phoneNo'
                        placeholder='Enter Phone Number'
                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                        {...register('phoneNo', 
                        {
                            required:{value:true, message:"Phone number is required"},
                            maxLength:{value:10, message:"Invalid Phone number"},
                            minLength:{value:8, message:"Invalid Phone number"}
                        })}    
                    />
                </div>
                    {errors.phoneNo && <span className="text-xs mt-1 text-[#FF0000]">Phone Number is required!</span>}
            </label>
        </div>
        <label className='flex flex-col'>
            Massage
            <textarea 
                {...register('message')} 
                type='message' 
                name='message' 
                id='message' 
                rows="7" 
                cols="30" 
                placeholder='Enter Your Message' 
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
        </label>
        <button type="submit" className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900">
            Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactUsForm
