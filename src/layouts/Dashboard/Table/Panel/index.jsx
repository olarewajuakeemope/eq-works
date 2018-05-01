import React from 'react'
import { Route } from 'react-router-dom'
import Header from 'containers/Table/Header'
import BodyLayout from './Body'
import './style.css'

const TableLayout = () => (
  <div className='TableLayout'>
    <div className='TableLayout__header'>
      <Route component={Header} />
    </div>
    <div className='TableLayout__body'>
      <div className='TableLayout__table'>
        <BodyLayout />
      </div>
    </div>
  </div>
)

export default TableLayout
