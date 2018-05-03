import React from 'react'
import { Route } from 'react-router-dom'
import SideBar from 'components/Map/SideBar'
import PanelLayout from 'layouts/Dashboard/Map/Panel'
import './style.css'

const MapLayout = () => (
  <div className="Dashboard__Map__Layout">
    <div className="Dashboard__Map__Layout__component Dashboard__Map__Layout__sidebar">
      <SideBar />
    </div>
    <div className="Dashboard__Map__Layout__component Dashboard__Map__Layout__stats">
      <Route component={PanelLayout} />
    </div>
  </div>
)

export default MapLayout
