import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MapLayout from '../../layouts/Dashboard/Map'
import StatsLayout from '../../layouts/Dashboard/Stats'
import ChartLayout from '../../layouts/Dashboard/Chart'

const DataInterfaceRouting = ({ location: { search } }) => (
  <Switch>
    <Route path='/map' component={MapLayout} />
    <Route path='/chart' component={ChartLayout} />
    <Route path='/stats' component={StatsLayout} />
    <Redirect
      to={{
        pathname: '/stats',
        search,
      }} />
  </Switch>
)

export default DataInterfaceRouting
