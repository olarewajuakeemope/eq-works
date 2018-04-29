import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../styles/main.css'

const BoxLayout = () => <h2>Hello World!</h2>

export default () => (
  <Switch>
    <Route component={BoxLayout} />
  </Switch>
)
