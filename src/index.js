import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

      // layouts 
import Admin from './layouts/Admin';
import Auth from './layouts/Auth';


        // views without layouts 

import Landing from './views/Landing'
import Profile from './views/Profile'
import Index from './views/Index'
import Login from './views/auth/Login';
import Register from './views/auth/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        {/* <Auth/> */}
    <Routes>
           {/* add routes with layout  */}
      <Route path='/admin/*' element={<Admin />}/>
      <Route path='/auth/*' element={<Auth />}/>

      


      {/* add routes without layouts  */}
      <Route path='/landing' element={<Landing />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/' element={<Index />}/>
      
      {/* add error page  */}
      <Route path='*' element={<Navigate to='/' />}/>

    </Routes>
  </BrowserRouter>
 
);



