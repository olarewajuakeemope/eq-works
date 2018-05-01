import React from 'react'
import { Route } from 'react-router-dom'
import SideBar from 'components/SideBar'
import TableContainer from 'containers/Table/Panel'
import './style.css'

const TableLayout = () => (
  <div className='TableLayout'>
    <div className='TableLayout__component TableLayout__sidebar'>
      <SideBar />
    </div>
    <div className='TableLayout__component TableLayout__stats'>
      <Route component={TableContainer} />
    </div>
  </div>
)

export default TableLayout
