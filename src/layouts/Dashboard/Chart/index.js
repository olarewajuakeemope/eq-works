import React from 'react'
import ChartContainer from 'containers/Chart'
import { constants } from 'config'
import './style.css'

const ChartLayout = () => (
  <div className="Dashboard__Chart__Layout">
    {constants.application.endpoints
      .map(({ endpoint, title }, i) =>
        <ChartContainer title={title} endpoint={endpoint} key={i} />)}
  </div>
)

export default ChartLayout
