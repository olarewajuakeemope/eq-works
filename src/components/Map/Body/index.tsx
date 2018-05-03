import React, { Fragment } from 'react'
import * as googleMap from 'react-google-maps'
import './style.css'

const { MarkerClusterer } = require('react-google-maps/lib/components/addons/MarkerClusterer')

interface MapProps {
  markers: any
}

const { GoogleMap, Marker, withGoogleMap, withScriptjs } = googleMap

const onMarkerClustererClick = (markerClusterer: any) => markerClusterer.getMarkers()

const map = (markers: any) => {
  const { lon, lat } = markers[0]
  return (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat, lng: lon }}
    >
      <MarkerClusterer
        onClick={onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {markers.map(({ lat, lon }: any, index: number) => (
          <Marker
            key={index}
            position={{ lat, lng: lon }}
          />
        ))}
      </MarkerClusterer>
    </GoogleMap>
  )
}

const Map = withScriptjs(withGoogleMap(({ markers }: MapProps) => {
  return (
    <Fragment>
      {markers.length && map(markers)}
      <div className="Map__Component__footer" />
    </Fragment>
  )
}
))

export default Map
