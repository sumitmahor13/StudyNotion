import React from 'react'
import ContactUsForm from '../../common/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='mx-auto flex flex-col justify-center items-center gap-2 w-11/12 lg:w-8/12 max-w-maxContent'>
        <h1 className='text-4xl font-bold'>Contact Us</h1>
        <p className='text-richblack-200 mb-2'>We'd love to here for you, Please fill out this form.</p>
        <ContactUsForm/>
    </div>
  )
}

export default ContactFormSection
