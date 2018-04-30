import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../../components/Header'
import DataInterfaceRouting from '../../routes/Data'
import './style.css'

const DashboardLayout = () => (
  <div className='DashboardLayout'>
    <div className='HeaderBar'>
      <Header />
    </div>
    <Route component={DataInterfaceRouting} />
   </div>
)

export default DashboardLayout
