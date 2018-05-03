import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ErrorBoundary from 'components/Common/ErrorBoundary'
import MapBody from 'components/Map/Body'
import { isLoading, getStats } from 'redux/map/selectors'
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

const MapBodyContainer = ({ isReady, rows }) => (
    <ErrorBoundary message={constants.pagination.ERROR_MESSAGE}>
      <Fragment>
        <MapBody isReady={isReady} rows={rows} />
      </Fragment>
    </ErrorBoundary>
)

MapBodyContainer.propTypes = {
  isReady: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.shape({})),
}

export default connect(mapStateToProps, null, mergeProps)(MapBodyContainer)
