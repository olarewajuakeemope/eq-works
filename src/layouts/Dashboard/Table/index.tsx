import React from 'react'
import { Route } from 'react-router-dom'
import SideBar from 'components/Table/SideBar'
import PanelLayout from 'layouts/Dashboard/Table/Panel'
import './style.css'

const TableLayout = () => (
  <div className="Dashboard__Table__Layout">
    <div className="Dashboard__Table__Layout__component Dashboard__Table__Layout__sidebar">
      <SideBar />
    </div>
    <div className="Dashboard__Table__Layout__component Dashboard__Table__Layout__stats">
      <Route component={PanelLayout} />
    </div>
  </div>
)

export default TableLayout
