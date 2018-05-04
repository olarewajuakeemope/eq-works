import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ErrorBoundary from 'components/Common/ErrorBoundary'
import MapBody from 'components/Map/Body'
import { getStats, isLoading } from 'redux/map/selectors'
import { constants } from 'config'

const { googleMapURL, ERROR_MESSAGE } = constants.map.options

const mapStateToProps = (state, props) => {
  return {
    markers: getStats(state),
    isReady: !isLoading(state),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...ownProps,
  }
}

const MapBodyContainer = ({ markers, isReady }) => (
    <ErrorBoundary message={ERROR_MESSAGE}>
      <Fragment>
        <MapBody
          isReady={isReady}
          markers={markers}
          googleMapURL={googleMapURL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `94%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Fragment>
    </ErrorBoundary>
)

MapBodyContainer.propTypes = {
  isReady: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.shape({})),
}

export default connect(mapStateToProps, null, mergeProps)(MapBodyContainer)
