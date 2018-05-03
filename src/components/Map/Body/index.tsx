import React, { Fragment } from 'react'
import * as googleMap from 'react-google-maps'
import './style.css'

const { GoogleMap, Marker, withGoogleMap, withScriptjs } = googleMap

const Map = withScriptjs(withGoogleMap(() => (
  <Fragment>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
      <Marker position={{ lat: -34.396, lng: 150.644 }} />
    </GoogleMap>
    <div className="Map__Component__footer" />
  </Fragment>
)))

export default Map
