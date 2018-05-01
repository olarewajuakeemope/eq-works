import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PaginationInput from 'components/Table/Pagination/Input'
import { getStats as getStatsAction } from 'redux/table/actions'
import { getStats, getStatsTitle, getStatsEndpoint } from 'redux/table/selectors'

const mapStateToProps = (state, props) => {
  return {
    content: getStats(state),
    title: getStatsTitle(state),
    endpoint: getStatsEndpoint(state),
  }
}

const mapDispatchToProps = {
  getStatsAction,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { content, title, endpoint } = stateProps
  const { totalCount, pageNumber } = content
  return {
    ...ownProps,
    pageNumber,
    totalCount: parseInt(totalCount),
    onClick: offset => dispatchProps.getStatsAction(title, endpoint, offset),
  }
}

const PaginationInputContainer = ({ totalCount, onClick, pageNumber }) => (
  <Fragment>
    <PaginationInput totalCount={totalCount} onClick={onClick} page={pageNumber} />
  </Fragment>
)

PaginationInputContainer.propTypes = {
  totalCount: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(PaginationInputContainer)
