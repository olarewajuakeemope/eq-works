import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ErrorBoundary from 'components/Common/ErrorBoundary'
import MapBody from 'components/Map/Body'
import { constants } from 'config'

const { googleMapURL, ERROR_MESSAGE } = constants.map.options
const mapStateToProps = (state, props) => {
  return {}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
  }
}

const MapBodyContainer = () => (
    <ErrorBoundary message={ERROR_MESSAGE}>
      <Fragment>
        <MapBody
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
