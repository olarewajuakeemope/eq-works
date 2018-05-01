import React from 'react'
import { Route } from 'react-router-dom'
import Header from 'components/Common/Header'
import DashboardRouting from 'routes/Dashboard'
import './style.css'

const DashboardLayout = () => (
  <div className="DashboardLayout">
    <div className="HeaderBar">
      <Header />
    </div>
    <Route component={DashboardRouting} />
   </div>
)

export default DashboardLayout
