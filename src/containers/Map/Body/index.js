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
        />
      </Fragment>
    </ErrorBoundary>
)

MapBodyContainer.propTypes = {
  isReady: PropTypes.bool,
  markers: PropTypes.arrayOf(PropTypes.shape({})),
}

export default connect(mapStateToProps, null, mergeProps)(MapBodyContainer)
