import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Chart from 'components/Chart'
import ErrorBoundary from 'components/Common/ErrorBoundary'
import { getEndpointStats } from 'redux/chart/selectors'
import { constants } from 'config'

const mapStateToProps = (state, props) => {
  return {
    stats: getEndpointStats(state, props.endpoint),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { stats } = stateProps
  let sortedStats
  let count = 0
  if (stats) {
    const { rows } = stats
    const titles = Object.keys(rows[0])

    count = stats.totalCount
    sortedStats = rows.reduce((prev, current) => {
      titles.forEach(title => {
        const input = title === 'date' ? current[title] : Number(current[title])
        prev[title] = prev[title] ?
          [...prev[title], input] : [input]
      })
      return prev
    }, {})
  }
  return {
    count,
    stats: sortedStats,
    ...ownProps,
  }
}

const ChartContainer = ({ endpoint, title, stats, count }) => (
    <ErrorBoundary message={constants.chart.ERROR_MESSAGE}>
      <Fragment>
        <Chart
          title={title}
          stats={stats}
          endpoint={endpoint}
          count={count}
        />
      </Fragment>
    </ErrorBoundary>
)

ChartContainer.propTypes = {
  endpoint: PropTypes.string,
  title: PropTypes.string,
}

export default connect(mapStateToProps, null, mergeProps)(ChartContainer)
