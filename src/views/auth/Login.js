import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
const Login = () => {

  const [loginInfo,setLoginInfo] = useState({
      email:'',
      password:''
  })

  const [item,setItem] = useState([])

  const inputField = (e) => {

    const {name,value} = e.target;

      setLoginInfo((oldval) => {
        return{
            ...oldval,
            [name]:value
        }
    })
  }


  const fromSubmited = (event) => {
    setItem((newval) => {
        return [...newval,loginInfo]
    })
    event.preventDefault();
    setLoginInfo(' ')
}

  
  return (
    <>
      
          <div className="text-center w-[35rem] h-[31rem] rounded-3xl bg-slate-300 border border-gray-600">
            <div className=" pt-8 space-y-3">
              <h3 className='text-xl font-bold text-gray-500'>Sign in with</h3>
              <button className='px-5 py-1 bg-slate-800 text-xl font-semibold text-white rounded-md shadow-lg'> <i className="fa-brands fa-github "></i> Github</button>
              <button className='px-5 py-1 bg-white text-xl font-semibold ml-5 rounded-md shadow-lg'> <i class="fa-brands fa-google"></i> Google</button>
            </div>

            <form action="" onSubmit={fromSubmited}>

              <div className=" px-10 space-y-3 text-start pt-5">
                <label htmlFor="" className='text-xl font-medium text-gray-500'>Email</label>
                <input
                  name='email'
                  value={loginInfo.email}
                  onChange={inputField}
                  type="text" placeholder='Email'
                  className=' w-[30rem] px-5 py-3 outline-none rounded-lg text-xl focus:ring-4 focus:ring-blue-500' />
              </div>

              <div className="px-10 space-y-3 text-start pt-5">
                <label htmlFor="" className='text-xl font-medium text-gray-500'>Password</label>
                <input
                  name='password'
                  value={loginInfo.password}
                  onChange={inputField}
                  type="password" placeholder='Password'
                  className=' w-[30rem] px-5 py-3 outline-none rounded-lg text-xl focus:ring-4 focus:ring-blue-500'/>
              </div>
              
              <div className="text-start px-10 space-y-3 pt-5 space-x-3  flex items-center">
                <input type="checkbox" name="" id="" className=' border-0 rounded ease-linear transition-all duration-150 w-8 h-8 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-700 mt-3'/>
                 <label htmlFor="" className='text-xl font-semibold text-gray-500'>Remember me</label>
              </div>
              

              <button type="submit" className=' mt-8 mb-10 bg-slate-800 w-[30rem] px-8 py-2 text-xl text-white uppercase rounded-lg hover:shadow-xl '>Sign In</button>
            </form>
          
            <div className=" flex justify-between">
              <h4 className=' text-white text-lg font-medium'>Forgot password?</h4>
              <Link to="/auth/register" className='text-xl font-medium text-orange-600'>Create new account</Link>
            </div>
          </div>

          <div className="flex justify-center mt-20 pt-[10rem] pb-[10rem] w-[30rem]">
                <table className=' ring-4 ring-white w-4/5 '>
                   <tr className=' ring-1 ring-white bg-purple-700 text-white font-semibold text-2xl'>
                        
                        <th className='ring-1 ring-white'>Email</th>
                        <th className='ring-1 ring-white'>Password</th>
                   </tr>
                   {item.map((valueitem,index) => {
                        return(
                            <tr key={valueitem.index}>
                                                                
                                <td className='ring-1 ring-white text-white p-3 text-xl font-medium text-center'>{valueitem.email}</td>
                                <td className='ring-1 ring-white text-white p-3 text-xl font-medium text-center'>{valueitem.password}</td>
                            </tr>
                        )
                   })}
                   
                </table>
            </div>
       
    </>
  )
}

export default Login