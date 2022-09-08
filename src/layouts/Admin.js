import React from 'react'


import { Routes,Route } from 'react-router-dom'

import Dashboard from '../views/admin/Dashboard'
import Maps from '../views/admin/Maps'
import Settings from '../views/admin/Settings'
import Tables from '../views/admin/Tables'
const Admin = () => {
  return (
    <>

    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/maps' element={<Maps />}/>
      <Route path='/settings' element={<Settings />}/>
      <Route path='/tables' element={<Tables />}/>
    </Routes>

    </>
  )
}

export default Admin