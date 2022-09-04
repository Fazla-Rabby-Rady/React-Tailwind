import React, { useState } from 'react'

import {Link} from 'react-router-dom'
import IndexDropdown from '../Dropdowns/IndexDropdown'
const IndexNavbar = () => {
  // const [navbarOpen,setNavbarOpen] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="w-full flex flex-wrap  justify-between bg-white shadow-lg px-2 py-2 z-50 top-0 fixed">
        <div className="container px-4 mx-auto flex items-center flex-wrap  justify-between lg:px-[10rem] lg:flex-row lg:h-12">
          <div className="w-full px-2 flex items-center justify-between lg:block lg:justify-start lg:w-auto lg:pb-5">
              <Link to="/"
                className="text-[1rem] font-semibold uppercase"
              >Notus React</Link>
              <button className="text-[1.3rem] font-semibold border px-3 py-1 lg:hidden"
                // onClick={() => setNavbarOpen(!navbarOpen)}
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                  <i class="fa-solid fa-bars"></i>
               </button>
          </div>
          <div className={"lg:h-[3rem] flex-grow bg-white text-gray-600 lg:flex text-lg font-medium m-2" + (navbarOpen ? " block" : " hidden")}>
            <ul className="mb-4 lg:mb-0">
              <li>
                <Link to=""> <i class="fa-solid fa-file-lines"></i>  Docs</Link>
              </li>
            </ul>
            <ul className="flex items-start flex-col list-none space-x-7 space-y-5 lg:space-y-0 lg:flex-row lg:ml-auto">
              <li>
                <IndexDropdown />
              </li>
              <li>
                <Link to=""> <i class="fa-brands fa-facebook"></i> <span className='lg:hidden'>Share</span></Link>
              </li>
              <li>
                <Link to=""> <i class="fa-brands fa-twitter"></i> <span className='lg:hidden'>Tweet</span></Link>
              </li>
              <li>
                <Link to=""> <i class="fa-brands fa-github"></i> <span className='lg:hidden'>Star</span></Link>
              </li>
              <li>
                <button className='border px-4 py-1 rounded bg-blue-500 text-white'><i class="fa-solid fa-circle-arrow-down"></i> Download</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
    </>
  )
}

export default IndexNavbar