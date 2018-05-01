import React from 'react'
import { Route } from 'react-router-dom'
import StatsHeader from '../../../../containers/Stats/Header'
import StatsBodyLayout from './StatsBody'
import './style.css'

const TableLayout = () => (
  <div className='TableLayout'>
    <div className='TableLayout__header'>
      <Route component={StatsHeader} />
    </div>
    <div className='TableLayout__body'>
      <div className='TableLayout__table'>
        <StatsBodyLayout />
      </div>
    </div>
  </div>
)

export default TableLayout
