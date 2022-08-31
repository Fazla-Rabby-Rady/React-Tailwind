import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const IndexDropdown = () => {
  const [dropdownPopverShow,setDropdownPopoverShow]=useState(false)
  return (
    <>
       <div className='mr-16'>
        <Link to=''
        onClick={() => setDropdownPopoverShow(!dropdownPopverShow)}
        >
          Demo Pages
        </Link>
       </div>
       <div className={"space-y-5 bg-[#fff] shadow-lg z-50 space-x-5 pt-4 pb-4 lg:w-[10rem]  lg:m-0 lg:space-y-4"  + (dropdownPopverShow ? " block" : " hidden")}>
            <div className="flex flex-col space-y-2 space-x-5 text-sm">
                <span className='ml-5 text-[1rem] font-semibold text-gray-400'>Admin Layout</span>
                <Link to="">Dashboard</Link>
                <Link to="">Setting</Link>
                <Link to="">Tables</Link>
                <Link to="">Map</Link>
                <hr  className='w-[8rem]'/>
            </div>
            <div className="flex flex-col space-y-2 text-sm">
                <span className='text-[1rem] font-semibold text-gray-400'>Auth Layout</span>
                <Link to="">Login</Link>
                <Link to="">Register</Link>
                <hr className='w-[8rem]'/>
            </div>
            <div className="flex flex-col space-y-2 text-sm">
                <span className='text-[1rem] font-semibold text-gray-400'>No Layout</span>
                <Link to="">Landing</Link>
                <Link to="">Profile</Link>
            </div>
       </div>
    </>
  )
}

export default IndexDropdown
