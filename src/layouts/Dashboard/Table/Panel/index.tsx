import React from 'react'
import { Route } from 'react-router-dom'
import Header from 'containers/Table/Header'
import BodyLayout from './Body'
import './style.css'

const TableLayout = () => (
  <div className="Dashboard__Table__Panel__Layout">
    <div className="Dashboard__Table__Panel__Layout__header">
      <Route component={Header} />
    </div>
    <div className="Dashboard__Table__Panel__Layout__body">
      <div className="Dashboard__Table__Panel__Layout__table">
        <BodyLayout />
      </div>
    </div>
  </div>
)

export default TableLayout
