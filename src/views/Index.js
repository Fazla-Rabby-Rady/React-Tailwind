import React from 'react'

import { Link } from 'react-router-dom'
import Footer from '../components/Footers/Footer'
import IndexNavbar from '../components/Navbars/IndexNavbar'
const Index = () => {
  return (
    <>
      <IndexNavbar fixed/>

      <section className="lg:h-screen w-full pt-16 sm:mb-14">
          <div className="flex lg:items-center justify-between">
            <div className="lg:w-[50%] lg:px-20 lg:mb-[15rem] sm:mt-[10rem] sm:w-[160rem] sm:pl-5">
              <h1 className=" text-4xl font-semibold text-gray-600 ">Notus React - A beautiful extension for Tailwind CSS.</h1>
              <p  className=" mt-4 text-lg leading-relaxed text-gray-500">Notus React is Free and Open Source. It does not change any of the CSS from <a href="https://tailwindcss.com/?ref=creativetim" target="_blank" rel="noreferrer" className='text-xl font-bold text-[#38BDF8]'>Tailwind Css</a> . It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular.</p>
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
               />
            </div>
        </div>
      </section>

      <section className="w-full bg-slate-100">
        <div className="pt-28 flex justify-between lg:px-52 lg:flex-row sm:flex-col sm:items-center">
          <div className="lg:w-[38%]  sm:w-[60%] sm:h-[35rem] sm:mb-20 shadow-2xl rounded-xl bg-blue-500">
              <div className="">
                <img src={require("../assets/images/computer.jpg")} alt="" className='h-[20rem] w-full rounded-lg' />
              </div>
              <div className=" px-10 mt-10">
                <h4 className='text-xl font-semibold text-white '>Great for your awesome project</h4>
                <p className='text-white mt-5 mb-5'>Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.</p>
              </div>
          </div>
          
            <div className="flex flex-wrap lg:w-1/2 lg:h-[30rem] sm:w-[80%]">
              <div className=" lg:w-1/2">
                <i className="fa-solid fa-sitemap bg-white px-5 py-5 rounded-full shadow-xl"></i>
                <h3 className='text-lg font-medium mt-5'>CSS Components</h3>
                <p className=' text-[1.1rem] font-semibold text-gray-400 mt-3 mb-3'>Notus React comes with a huge number of Fully Coded CSS components.</p>
              </div>
              <div className=" lg:w-1/2">
                <i className="fa-solid fa-compass-drafting bg-white px-5 py-5 rounded-full shadow-xl"></i>
                <h3 className='text-lg font-medium mt-5'>JavaScript Components</h3>
                <p className=' text-[1.1rem] font-semibold text-gray-400 mt-3 mb-3'>We also feature many dynamic components for React, NextJS, Vue and Angular.</p>
              </div>
              <div className=" lg:w-1/2">
                <i className="fa-regular fa-newspaper bg-white px-5 py-5 rounded-full shadow-xl"></i>
                <h3 className='text-lg font-medium mt-5'>Pages</h3>
                <p className=' text-[1.1rem] font-semibold text-gray-400 mt-3 mb-3'>This extension also comes with 3 sample pages. They are fully coded so you can start working instantly.</p>
              </div>
              <div className=" lg:w-1/2">
                <i className="fa-solid fa-file-lines bg-white px-5 py-5 rounded-full shadow-xl"></i>
                <h3 className='text-lg font-medium mt-5'>Documentation</h3>
                <p className=' text-[1.1rem] font-semibold text-gray-400 mt-3 mb-3'>Built by developers for developers. You will love how easy is to to work with Notus React.</p>
              </div>
            </div>
        </div>
      </section>

     
      <section className='w-full lg:h-screen sm:h-[70rem] bg-slate-100'>
        <div className="flex justify-between lg:px-52 lg:flex-row sm:flex-col sm:pt-28 sm:px-16">
          <div className=" p-4 lg:w-1/2 lg:pt-[8rem]">
            <div className=" ">
              <i className="fa-solid fa-sitemap bg-white px-6 py-5 text-xl rounded-full shadow-2xl"></i>
              <h3 className='text-3xl font-bold text-gray-500 mt-5'>CSS Components</h3>
              <p className='text-[1.1rem] font-semibold text-gray-400 mt-3 mb-3'>Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can have different colours.</p>
            </div>
            <div className=" flex flex-wrap space-y-3 ">
              <button className='text-[1rem] font-medium px-4 py-0  bg-amber-500 text-white rounded-full uppercase hover:bg-slate-500'>Button</button>
              <button className='text-[1rem] font-medium px-4 py-1  ml-2 bg-blue-500 text-white rounded-full uppercase hover:bg-slate-500'>Input</button>
              <button className='text-[1rem] font-medium px-4 py-1 ml-2  bg-indigo-500 text-white rounded-full uppercase hover:bg-slate-500'>Labels</button>
              <button className='text-[1rem] font-medium px-4 py-1 ml-2  bg-violet-500 text-white rounded-full uppercase hover:bg-slate-500'>Menus</button>
              <button className='text-[1rem] font-medium px-4 py-1 ml-2  bg-purple-500 text-white rounded-full uppercase hover:bg-slate-500'>Navbars</button>
              <button className='text-[1rem] font-medium px-4 py-1 ml-2  bg-fuchsia-500 text-white rounded-full uppercase hover:bg-slate-500'>Pagination</button>
              <button className='text-[1rem] font-medium px-4 py-1 ml-2  bg-pink-500 text-white rounded-full uppercase hover:bg-slate-500'>Progressbars</button>
              <button className='text-[1rem] font-medium px-4 py-1 ml-2  bg-rose-500 text-white rounded-full uppercase hover:bg-slate-500'>Typography</button>
              <a className=' text-[1.1rem] font-medium   pr-[6rem] uppercase' href="http://localhost:3000/" target="_blank" rel="noreferrer">View All <i class="fa-solid fa-angles-right"></i></a>
            </div>
          </div>
          <div className=" lg:w-1/2 lg:ml-16">
            <div className="relative">
              <img className='h-[13rem] rounded absolute left-[5rem]  top-[5rem]' src={require("../assets/images/component-info-card.png")} alt="" />
              <img className='h-[3rem] w-[7rem] rounded absolute left-[12rem] top-[16rem]' src={require("../assets/images/component-btn.png")} alt="" />
              <img className='h-[15rem] rounded absolute left-[20rem] top-[10rem]' src={require("../assets/images/component-profile-card.png")} alt="" />
              <img className='h-[3rem] w-[7rem] rounded absolute left-[16rem] top-[23rem]' src={require("../assets/images/component-btn-pink.png")} alt="" />
              <img className='h-[10rem] rounded absolute left-[1rem]  top-[20rem]' src={require("../assets/images/component-info-2.png")} alt="" />
              <img className=' rounded absolute top-[32rem]' src={require("../assets/images/component-menu.png")} alt="" />
            </div>
          </div>
        </div>
      </section>


      <section className='w-full bg-slate-100'>
        <div className="w-full lg:h-screen pt-28 lg:pt-28 sm:pt-14 flex justify-between lg:px-52 lg:flex-row sm:flex-col sm:px-16">
          <div className="lg:w-[60%] lg:h-[30rem] lg:flex lg:flex-wrap lg:justify-between lg:space-y-5 sm:space-y-8">

            <div className=" bg-[#DC2626] rounded-xl shadow-lg flex flex-col items-center sm:h-[11rem] lg:w-[47%]">
              <img src={require("../assets/images/svelte.png")} alt="" className=' rounded-full w-[4.5rem]  mt-10' />
              <p className='text-xl font-medium text-white mt-3'>Svelte</p>
            </div>

            <div className=" bg-[#0EA5E9] rounded-xl  shadow-lg flex flex-col items-center sm:h-[11rem] lg:w-[47%]">
              <img src={require("../assets/images/react.jpg")} alt="" className=' rounded-full w-[4.5rem]  mt-10' />
              <p className='text-xl font-medium text-white mt-3'>React.js</p>
            </div>

            <div className=" bg-[#334155] rounded-xl shadow-lg flex flex-col items-center sm:h-[11rem] lg:w-[47%]">
              <img src={require("../assets/images/nextjs.webp")} alt="" className=' rounded-full w-[4.5rem]  mt-10' />
              <p className='text-xl font-medium text-white mt-3'>Next.js</p>
            </div>

            <div className=" bg-[#EAB308] rounded-xl  shadow-lg flex flex-col items-center sm:h-[11rem] lg:w-[47%]">
              <img src={require("../assets/images/javascript.png")} alt="" className=' rounded-full w-[4.5rem]  mt-10' />
              <p className='text-xl font-medium text-white mt-3'>JavaScript</p>
            </div>


            <div className=" bg-[#B91C1C] rounded-xl shadow-lg flex flex-col items-center sm:h-[11rem] lg:w-[47%]">
              <img src={require("../assets/images/angular.jpg")} alt="" className=' rounded-full w-[4.5rem]  mt-10' />
              <p className='text-xl font-medium text-white mt-3'>Angular</p>
            </div>

            <div className=" bg-[#10B981] rounded-xl  shadow-lg flex flex-col items-center sm:h-[11rem] lg:w-[47%]">
              <img src={require("../assets/images/vue.jpg")} alt="" className=' rounded-full w-[4.5rem]  mt-10' />
              <p className='text-xl font-medium text-white mt-3'>Vue.js</p>
            </div>

          </div>
          <div className=" lg:w-[40%] lg:ml-28 lg:pt-28 sm:pt-28">
            <div className="">
                <i className="fa-solid fa-compass-drafting bg-white px-7 py-6 text-xl rounded-full shadow-2xl"></i>
                <h3 className='text-3xl font-bold text-gray-500 mt-5'>JavaScript Components</h3>
                <p className=' text-[1.1rem] font-semibold text-gray-400 mt-3 mb-3'>In order to create a great User Experience some components require JavaScript. In this way you can manipulate the elements on the page and give more options to your users.</p>
                <p className=' text-[1.1rem] font-semibold text-gray-400 mt-3 mb-3'>We created a set of Components that are dynamic and come to help you.</p>
            </div>
            <div className=" flex flex-wrap space-y-3 pb-10 ">
              <button className='text-[1rem] font-medium px-4 py-0  bg-amber-500 text-white rounded-full uppercase hover:bg-slate-500'>Alerts</button>
              <button className='text-[1rem] font-medium px-4 py-1  ml-2 bg-blue-500 text-white rounded-full uppercase hover:bg-slate-500'>Dropdowns</button>
              <button className='text-[1rem] font-medium px-4 py-1 ml-2  bg-indigo-500 text-white rounded-full uppercase hover:bg-slate-500'>Menus</button>
              <button className='text-[1rem] font-medium px-4 py-1 ml-2  bg-violet-500 text-white rounded-full uppercase hover:bg-slate-500'>Modals</button>
              <button className='text-[1rem] font-medium px-4 py-1 ml-2  bg-purple-500 text-white rounded-full uppercase hover:bg-slate-500'>Navbars</button>
              <button className='text-[1rem] font-medium px-4 py-1 ml-2  bg-fuchsia-500 text-white rounded-full uppercase hover:bg-slate-500'>Popovers</button>
              <button className='text-[1rem] font-medium px-4 py-1 ml-2  bg-pink-500 text-white rounded-full uppercase hover:bg-slate-500'>Tabs</button>
              <button className='text-[1rem] font-medium px-4 py-1 ml-2  bg-rose-500 text-white rounded-full uppercase hover:bg-slate-500'>Tooltips</button>
              <a className=' text-[1.1rem] font-medium   pr-[14rem] uppercase' href="http://localhost:3000/" target="_blank" rel="noreferrer">View All <i class="fa-solid fa-angles-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full bg-slate-100'>
        <div className=" lg:px-52 sm:pt-[10rem] sm:px-14 lg:pt-[10rem] pb-[5rem] flex justify-between lg:flex-row sm:flex-col lg:space-x-20">
          <div className=" lg:w-[50%] h-[15rem]">
            <div className="">
              <i className="fa-solid fa-file-lines bg-white px-7 py-5 text-2xl rounded-full shadow-2xl"></i>
              <h3 className='text-3xl font-bold text-gray-500 mt-5'>Complex Documentation</h3>
              <p className=' text-[1.1rem] font-semibold text-gray-400 mt-3 mb-3'>This extension comes a lot of fully coded examples that help you get started faster. You can adjust the colors and also the programming language. You can change the text and images and you're good to go.</p>
            </div>
            <div className="text-[1rem] font-medium text-gray-400 space-y-2 pt-5">
              <p className=''><i class="fa-solid fa-fingerprint"></i>  Built by Developers for Developers</p>
              <p><i class="fa-brands fa-html5"></i>  Carefully crafted code for Components</p>
              <p><i class="fa-regular fa-paper-plane"></i>  Dynamic Javascript Components</p>
            </div>
          </div>
          <div className=" lg:w-[70%] lg:pt-0 sm:pt-[13rem]">
            <img src={require("../assets/images/documentation.png")} alt="" 
              className='rotate-2'
            />
          </div>
        </div>
      </section>

      <section className='w-full lg:h-[25rem] sm:h-[22rem]  bg-slate-100'>
        <div className=" pt-[5rem]">
          <div className="flex flex-col items-center text-center lg:px-[24rem] sm:px-[2rem]">
            <h2 className='text-3xl font-semibold text-gray-500'>Beautiful Example Pages</h2>
            <p className='text-lg font-medium text-gray-400'>Notus React is a completly new product built using our past experience in web templates. Take the examples we made for you and start playing with them.</p>
          </div>
          <div className="lg:px-44 pt-[5rem] flex lg:flex-row sm:flex-col sm:items-center text-center rounded-lg lg:space-x-10 sm:space-y-5 scroll-smooth">
            <div className=" lg:w-[35%] sm:w-[70%] pt-12">
              <h5 className=' text-3xl font-medium pb-5'>Login Page</h5>
              <Link to="">
                <img className=' rounded-xl transform hover:translate-y-[-1rem] duration-500' src={require("../assets/images/login.jpg")} alt="" />
              </Link>
              
            </div>
            <div className=" lg:w-[35%] sm:w-[70%]">
              <h5 className=' text-3xl font-medium pb-5 sm:pt-5 sm:text-white lg:text-black'>Profile Page</h5>
              <Link to="">
                <img className='rounded-xl transform hover:translate-y-[-1rem] duration-500' src={require("../assets/images/profile.jpg")} alt="" />
              </Link>
            </div>
            <div className=" lg:w-[35%] sm:w-[70%]">
              <h5 className=' text-3xl font-medium pb-5 sm:pt-5 sm:text-white lg:text-black'>Landing Page</h5>
               <Link to="">
                <img className='rounded-xl transform hover:translate-y-[-1rem] duration-500' src={require("../assets/images/landing.jpg")} alt="" />
               </Link>
              
             </div>
          </div>
        </div>
      </section>


      <section className=' w-full sm:h-[130rem] lg:h-[80rem] bg-[#475569] sm:pt-[90rem] lg:pt-[25rem]'>
        <div className=" w-full lg:px-52 sm:px-24 flex items-center">
            <div className=" space-y-5 lg:w-[60%]">
              <i class="fa-solid fa-code-branch px-6 bg-white py-5 text-3xl rounded-full shadow-xl"></i>
              <h3 className='text-3xl font-medium text-white mt-5'>Open Source</h3>
              <p className='text-[1.1rem] font-semibold text-gray-400 mt-3b-3'>Since <a href="https://tailwindcss.com/?ref=creativetim" target="_blank" rel="noreferrer" className='text-xl font-bold text-[#38BDF8]'>Tailwind Css</a> is an open source project we wanted to continue this movement too. You can give this version a try to feel the design and also test the quality of the c mode!</p>
              <p className='text-[1.1rem] font-semibold text-gray-400 mt-3b-3'>Get it free on Github and please help us spread the news with a Star!</p>

              <button className=' uppercase bg-slate-800 px-9 py-5 text-white rounded-lg font-medium hover:shadow-lg hover:bg-slate-900'>Github Star</button>
            </div>

            <div className=" lg:w-[40%]">
              <i className="fa-brands fa-github text-[40rem] bg-[#475569] lg:block lg:ml-[1.4rem] sm:hidden"></i>
            </div>
        </div>
      </section>

      <section className='w-full h-[20rem] bg-slate-200'>
        <div className="flex flex-col text-center sm:px-[2.3rem] lg:px-52 absolute ">
          <div className="bg-white rounded-xl h-[22rem] p-3 space-y-4 relative bottom-[8rem]">
            <h4 className='text-5xl pt-8'>😍</h4>
            <h3 className='text-3xl font-semibold text-gray-600 pt-1'>Do you love this Starter Kit?</h3>
            <p className='text-lg font-medium text-gray-500 lg:px-20'>Cause if you do, it can be yours now. Hit the buttons below to navigate to get the Free version for your next project. Build a new web app or give an old project a new look!</p>
            <div className=" uppercase space-x-5">
              <button className=' bg-blue-500 px-5 py-2 text-white text-lg font-medium rounded-xl hover:shadow-lg'>Get Started</button>
              <button className='bg-gray-700 px-5 py-2 text-white text-lg  font-medium rounded-xl hover:shadow-lg' >Help With a Star</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Index