import React from "react"

import Footer from "../components/common/Footer"
import ContactDetails from "../components/ContactPage/ContactDetails"
import ContactUsForm from "../components/common/ContactUsForm"
import ReviewSlider from "../components/common/ReviewSlider"

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactUsForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact