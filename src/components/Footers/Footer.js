import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
        <section className='w-full bg-slate-200 pb-20'>
            <div className=" flex lg:flex-row sm:flex-col sm:items-center sm:text-center">
                <div className=" lg:w-1/2 sm:space-y-5">
                    <h2 className=' text-4xl font-semibold '>Let's keep in touch!</h2>
                    <p className='text-xl font-medium text-gray-500'>Find us on any of these platforms, we respond 1-2 business days.</p>
                    <div className=" space-x-5">
                        <i className="fa-brands fa-twitter bg-white px-5 py-3 rounded-full text-xl text-blue-500 shadow-xl"></i>
                        <i className="fa-brands fa-facebook bg-white px-5 py-3 rounded-full text-xl text-blue-500 shadow-xl"></i>
                        <i className="fa-brands fa-dribbble bg-white px-5 py-3 rounded-full text-xl text-red-500 shadow-xl"></i>
                        <i className="fa-brands fa-github bg-white px-5 py-3 rounded-full text-xl text-black shadow-xl"></i>
                    </div>
                </div>

                <div className="flex lg:flex-row sm:flex-col lg:w-[40%] lg:space-x-20 lg:text-start lg:space-y-0 sm:space-y-5 mt-12 lg:ml-[15rem]">
                    <div className=" flex flex-col space-y-3">
                        <h4 className='text-xl font-semibold text-gray-700'>Useful Links</h4>
                        <Link to="" className=' text-[1.1rem] font-medium text-gray-600'>About us</Link>
                        <Link to="" className=' text-[1.1rem] font-medium text-gray-600'>Blog</Link>
                        <Link to="" className=' text-[1.1rem] font-medium text-gray-600'>Github</Link>
                        <Link to="" className=' text-[1.1rem] font-medium text-gray-600'>Gree Products</Link>                        

                    </div>
                    <div className=" flex flex-col space-y-3">
                        <h4 className='text-xl font-semibold text-gray-700'>Other Pesources</h4>
                        <Link to="" className=' text-[1.1rem] font-medium text-gray-600'>MIT License</Link>
                        <Link to="" className=' text-[1.1rem] font-medium text-gray-600'>Teams & Conditions</Link>
                        <Link to="" className=' text-[1.1rem] font-medium text-gray-600'>Privacy Policy</Link>
                        <Link to="" className=' text-[1.1rem] font-medium text-gray-600'>Contact Us</Link>                               
                    </div>
                </div>  
            </div>

            <div className=" text-center">
                <hr className=' bg-slate-700 h-[.1rem] sm:w-[35rem] sm:ml-[8rem] lg:w-[80rem] mt-8 mb-5'/>
                <div className="text-center">
                    <p>Copyright © {new Date().getFullYear()} Notus React by <span className=' text-lg font-semibold text-gray-600'>Fazlarabby Rady.</span></p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer