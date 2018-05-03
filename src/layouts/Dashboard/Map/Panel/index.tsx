import React from 'react'
import { Route } from 'react-router-dom'
import Header from 'containers/Map/Header'
import BodyLayout from './Body'
import './style.css'

const MapLayout = () => (
  <div className="Dashboard__Map__Panel__Layout">
    <div className="Dashboard__Map__Panel__Layout__header">
      <Route component={Header} />
    </div>
    <div className="Dashboard__Map__Panel__Layout__body">
      <div className="Dashboard__Map__Panel__Layout__map">
        <BodyLayout />
      </div>
    </div>
  </div>
)

export default MapLayout
