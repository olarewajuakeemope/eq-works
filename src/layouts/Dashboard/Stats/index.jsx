import React from 'react'
import { Route } from 'react-router-dom'
import SideBar from '../../../components/SideBar'
import StatsContainer from '../../../containers/StatsContainer'
import './style.css'

const StatsLayout = () => (
  <div className='StatsLayout'>
    <div className='StatsLayout__component StatsLayout__sidebar'>
      <SideBar />
    </div>
    <div className='StatsLayout__component StatsLayout__stats'>
      <Route component={StatsContainer} />
    </div>
  </div>
)

export default StatsLayout
