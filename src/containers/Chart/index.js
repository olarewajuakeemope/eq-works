import React, { Fragment } from 'react'
import Chart from 'components/Chart'

const ChartContainer = ({ endpoint, title }) => (<Fragment><Chart title={title} endpoint={endpoint} /></Fragment>)

export default ChartContainer
