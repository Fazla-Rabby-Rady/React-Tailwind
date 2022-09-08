import React, { useState } from 'react'

import { Link } from 'react-router-dom'
const Register = () => {

  const [fullName,setFullName] = useState({
    name:"",
    email:"",
    password:""
})

const [item,setItem] = useState([])

const inputFields = (event) => {

    const {name,value} = event.target;

    setFullName((oldval) => {
        return{
            ...oldval,
            [name]:value
        }
    })
}
const fromSubmited = (event) => {
    setItem((newval) => {
        return [...newval,fullName]
    })
    event.preventDefault();
    setFullName(' ')
}
  return (
    <>
      <div className="text-center w-[35rem] h-[38rem] rounded-3xl bg-slate-300 border border-gray-600">
            <div className=" pt-8 space-y-3">
              <h3 className='text-xl font-bold text-gray-500'>Sign in with</h3>
              <button className='px-5 py-1 bg-slate-800 text-xl font-semibold text-white rounded-md shadow-lg'> <i className="fa-brands fa-github "></i> Github</button>
              <button className='px-5 py-1 bg-white text-xl font-semibold ml-5 rounded-md shadow-lg'> <i class="fa-brands fa-google"></i> Google</button>
            </div>

            <form action="" onSubmit={fromSubmited}>

              <div className=" px-10 space-y-3 text-start pt-5">
                <label htmlFor="" className='text-xl font-medium text-gray-500'>Name</label>
                <input name='name' value={fullName.name} onChange={inputFields} type="text" placeholder='Name' className=' w-[30rem] px-5 py-3 outline-none rounded-lg text-xl focus:ring-4 focus:ring-blue-500' />
              </div>

              <div className=" px-10 space-y-3 text-start pt-5">
                <label htmlFor="" className='text-xl font-medium text-gray-500'>Email</label>
                <input name='email' value={fullName.email} onChange={inputFields} type="text" placeholder='Email' className=' w-[30rem] px-5 py-3 outline-none rounded-lg text-xl focus:ring-4 focus:ring-blue-500' />
              </div>

              <div className="px-10 space-y-3 text-start pt-5">
                <label htmlFor="" className='text-xl font-medium text-gray-500'>Password</label>
                <input name='password' value={fullName.password} onChange={inputFields} type="password" placeholder='Password' className=' w-[30rem] px-5 py-3 outline-none rounded-lg text-xl focus:ring-4 focus:ring-blue-500'/>
              </div>
              
              <div className="text-start px-10 space-y-3 pt-5 space-x-3  flex items-center">
                <input type="checkbox" name="" id="" className=' border-0 rounded ease-linear transition-all duration-150 w-8 h-8 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-700 mt-3'/>
                 <label htmlFor="" className='text-xl font-semibold text-gray-500'>I agree with the <span className='text-lg text-blue-400'>Privacy Policy</span></label>
              </div>
              

              <button type="submit" className=' mt-8 mb-10 bg-slate-800 w-[30rem] px-8 py-2 text-xl text-white uppercase rounded-lg hover:shadow-xl '>Sign In</button>
            </form>
          
            <div className=" flex justify-between mb-[15rem]">
              <h4 className=' text-white text-lg font-medium'>Forgot password?</h4>
              <Link to="/auth/login" className='text-white text-lg font-medium'>Allready have an account? <span className='text-xl font-semibold text-orange-600'>Log IN</span></Link>
            </div>
      </div>

          
          

          <div className="flex justify-center mt-20 pt-[10rem] pb-[10rem] w-[40rem]">
                <table className=' ring-4 ring-black w-4/5 '>
                   <tr className=' ring-1 ring-black bg-purple-700 text-white font-semibold text-2xl'>
                        <th className='ring-1 ring-white p-4'>FullName</th>
                        <th className='ring-1 ring-white'>Email</th>
                        <th className='ring-1 ring-white'>Password</th>
                   </tr>
                   {item.map((valueitem) => {
                        return(
                            <tr>
                                <td className='ring-1 ring-white p-3 text-xl text-white font-medium text-center'>{valueitem.name}</td>
                                <td className='ring-1 ring-white p-3 text-xl text-white font-medium text-center'>{valueitem.email}</td>
                                <td className='ring-1 ring-white p-3 text-xl text-white font-medium text-center'>{valueitem.password}</td>
                            </tr>
                        )
                   })}
                   
                </table>
            </div>

          
    </>
  )
}

export default Register