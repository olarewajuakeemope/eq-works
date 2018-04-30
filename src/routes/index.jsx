import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BoxLayout from '../layouts/Dashboard'
import '../styles/globals.css'

export default () => (
  <Switch>
    <Route component={BoxLayout} />
  </Switch>
)
