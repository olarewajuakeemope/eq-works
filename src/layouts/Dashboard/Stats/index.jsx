import React from 'react'
import SideBar from '../../../components/SideBar'
import StatsContainer from '../../../containers/StatsContainer'
import './style.css'

const StatsLayout = () => (
  <div className='StatsLayout'>
    <div className='StatsLayout__component StatsLayout__sidebar'>
      <SideBar />
    </div>
    <div className='StatsLayout__component StatsLayout__stats'>
      <StatsContainer />
    </div>
  </div>
)

export default StatsLayout
