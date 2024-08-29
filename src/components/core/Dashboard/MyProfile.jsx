import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <>
      <h1 className="lg:mb-14 mb-4 text-2xl lg:text-3xl font-semibold text-richblack-5">
        My Profile
      </h1>
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 lg:p-8 lg:px-12 px-3">
        <div className="flex items-center gap-x-2 lg:gap-x-4">
          <img
            src={user.image}
            alt={`profile-${user.firstName}`}
            className="aspect-square w-[40px] lg:w-[78px] rounded-full object-cover"
          />
          <div className="">
            <p className="lg:text-lg text-md font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-[10px] lg:text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      <div className="my-4 lg:my-10 flex flex-col gap-y-2 lg:gap-y-5 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 lg:p-8 px-3 lg:px-12">
        <div className="flex w-full justify-between">
          <p className="text-md lg:text-lg font-semibold text-richblack-5">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } lg:text-sm text-xs font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-2 lg:my-10 flex flex-col gap-y-2 lg:gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 lg:p-8 lg:px-12 px-3">
        <div className="flex w-full justify-between">
          <p className=" text-sm lg:text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex flex-col lg:flex-row max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-2 lg:gap-y-5">
            <div>
              <p className="mb-2 text-sm font-bold text-richblack-600">First Name</p>
              <p className=" text-xs lg:text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-richblack-600">Email</p>
              <p className="text-xs lg:text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-richblack-600">Gender</p>
              <p className="text-xs lg:text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 lg:gap-y-5">
            <div>
              <p className="mb-2 text-sm font-bold text-richblack-600">Last Name</p>
              <p className="text-xs lg:text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-richblack-600">Phone Number</p>
              <p className="text-xs lg:text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-richblack-600">Date Of Birth</p>
              <p className="text-xs lg:text-sm font-medium text-richblack-5">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
