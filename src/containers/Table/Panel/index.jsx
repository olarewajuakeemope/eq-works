import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TableLayout from 'layouts/Dashboard/Table/Panel'
import Loading from 'components/Common/Loading'
import { isLoading } from 'redux/stats/selectors'

const mapStateToProps = (state, props) => {
  return {
    isReady: !isLoading(state),
  }
}

const StatsPanel = ({ isReady }) => (
  <Loading loading={!isReady}>
    {isReady ? <TableLayout /> : <div />}
  </Loading>
)

StatsPanel.propTypes = {
  isReady: PropTypes.bool,
}

export default connect(mapStateToProps)(StatsPanel)
