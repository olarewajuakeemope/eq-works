import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../styles/main.css'

const BoxLayout = () => <div>Hello World!</div>

export default () => (
  <Switch>
    <Route component={BoxLayout} />
  </Switch>
)
