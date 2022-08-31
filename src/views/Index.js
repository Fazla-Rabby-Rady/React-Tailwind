import React from 'react'
import IndexNavbar from '../components/Navbars/IndexNavbar'
const Index = () => {
  return (
    <>
      <IndexNavbar fixed/>

      <section className="h-screen w-full pt-16">
          <div className="flex lg:items-center justify-between">
            <div className="lg:w-[50%] lg:px-20 lg:mb-[15rem] sm:mt-[10rem] sm:w-[160rem] sm:pl-5">
              <h1 className=" text-4xl font-semibold text-gray-600 ">Notus React - A beautiful extension for Tailwind CSS.</h1>
              <p  className=" mt-4 text-lg leading-relaxed text-gray-500">Notus React is Free and Open Source. It does not change any of the CSS from Tailwind CSS. It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular.</p>
              <div className=" mt-10">
                <button className="ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500  uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                  Get Started
                </button>
                <button className="ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700  uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                  Github STar
                  </button>
              </div>
            </div>
            <div className=" lg:w-[50%] lg:h-full sm:h-[20rem] sm:w-full">
              <img src={require("../assets/images/pattern_react.png")} alt=""
              className='lg:w-full lg:h-full sm:h-[20rem]'
                // className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12"
               />
            </div>
        </div>
      </section>
    </>
  )
}

export default Index