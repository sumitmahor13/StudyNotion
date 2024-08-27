import React from 'react'

const IconBtn = ({
    text,
    onclick,
    children,
    disabled,
    outline=false,
    customClasses,
    type,
}) => {
  return (
    <button 
    disabled={disabled}
    className='bg-yellow-50 flex justify-center items-center gap-2 text-richblack-900 rounded-md px-4 py-2'
    onClick={onclick}
    type={type}>
        {
            children ? (
                <>
                    <span className=''>
                        {text}
                    </span>
                    {children}
                </>
            ) : (text)
        }
    </button>
  )
}

export default IconBtn
