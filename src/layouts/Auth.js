import React from 'react'

import {Routes,Route} from 'react-router-dom'
import IndexNavbar from '../components/Navbars/IndexNavbar'
import Footer from '../components/Footers/Footer'

import Login from '../views/auth/Login'
import Register from '../views/auth/Register'


const Auth = () => {
  return (
    <>
      <IndexNavbar />

      <section className='bg-[rgb(30,41,59)]'>
        <div className=" w-full  min-h-[50rem] pt-28 sm:pl-[3rem] lg:pl-[20rem] flex items-center flex-col" style={{backgroundImage:"url(" + require("../assets/images/register_bg_2.png") +")"}}>
          
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>

        </div>
      </section>

      <Footer />
       

    </>
  )
}

export default Auth