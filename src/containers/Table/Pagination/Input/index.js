import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Pagination from 'components/Table/Pagination/Input'
import { isLoading, getStats } from 'redux/table/selectors'

const mapStateToProps = (state, props) => {
  return {
    isReady: !isLoading(state),
    content: getStats(state),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { content, isReady } = stateProps
  const { totalCount } = content
  return {
    totalCount,
    isReady,
    ...ownProps,
  }
}

const PaginationContainer = ({ isReady, totalCount, rows }) => (
  <Fragment>
    <Pagination isReady={isReady} totalCount={totalCount} rows={rows} />
  </Fragment>
)

PaginationContainer.propTypes = {
  isReady: PropTypes.bool,
}

export default connect(mapStateToProps, null, mergeProps)(PaginationContainer)
