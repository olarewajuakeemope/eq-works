import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ErrorBoundary from 'components/Common/ErrorBoundary'
import PaginationBody from 'components/Table/Pagination/Body'
import { isLoading, getStats } from 'redux/table/selectors'
import { constants } from 'config'

const mapStateToProps = (state, props) => {
  return {
    isReady: !isLoading(state),
    content: getStats(state),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { content, isReady } = stateProps
  const { rows } = content
  return {
    rows,
    isReady,
    ...ownProps,
  }
}

const PaginationBodyContainer = ({ isReady, rows }) => (
    <ErrorBoundary message={constants.pagination.ERROR_MESSAGE}>
      <Fragment>
        <PaginationBody isReady={isReady} rows={rows} />
      </Fragment>
    </ErrorBoundary>
)

PaginationBodyContainer.propTypes = {
  isReady: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.shape({})),
}

export default connect(mapStateToProps, null, mergeProps)(PaginationBodyContainer)
