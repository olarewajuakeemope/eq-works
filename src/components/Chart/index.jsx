import React, { PureComponent, Fragment } from 'react'
import Highcharts from 'highcharts'
import { constants } from 'config'
import './style.css'

// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts)

class Chart extends PureComponent {
  componentDidMount() {
    if (this.props.count > 0) {
      this.renderChart()
    }
  }


  componentDidUpdate() {
    if (this.props.count > 0) {
      this.renderChart()
    }
  }

  renderChart = () => {
    const { endpoint, stats, title, count } = this.props
    const series = []
    Object.entries(stats).forEach(val => {
      if (val[0] !== 'date') {
        series.push({
          name: val[0],
          data: val[1],
        })
      }
    })

    Highcharts.chart(endpoint, {
      title: {
        text: title,
      },
      subtitle: {
        text: `Number of entries: ${count}`,
      },
      xAxis: {
        categories: stats.date,
        crosshair: true,
        title: {
          text: 'DATE',
        },
      },
      series,
      ...constants.chart.options,
    })
  }
  render() {
    return (
      <Fragment>
        <div className="Chart__Component__box" id={this.props.endpoint} />
      </Fragment>
    )
  }
}

export default Chart
