import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MapLayout from 'layouts/Dashboard/Map'
import TableLayout from 'layouts/Dashboard/Table'
import ChartLayout from 'layouts/Dashboard/Chart'

const DashboardRouting = ({ location: { search } }) => (
  <Switch>
    <Route path='/map' component={MapLayout} />
    <Route path='/chart' component={ChartLayout} />
    <Route path='/table' component={TableLayout} />
    <Redirect
      to={{
        pathname: '/table',
        search,
      }} />
  </Switch>
)

export default DashboardRouting
