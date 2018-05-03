import React, { Fragment } from 'react'
import * as googleMap from 'react-google-maps'
import './style.css'

const { MarkerClusterer } = require('react-google-maps/lib/components/addons/MarkerClusterer')

interface MapProps {
  markers: any
}

const { GoogleMap, Marker, withGoogleMap, withScriptjs } = googleMap

const onMarkerClustererClick = (markerClusterer: any) => markerClusterer.getMarkers()

const Map = withScriptjs(withGoogleMap(({ markers }: MapProps) => (
  <Fragment>
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
    >
      <MarkerClusterer
        onClick={onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {markers && markers.map((marker: any) => (
          <Marker
            key={marker.photo_id}
            position={{ lat: marker.latitude, lng: marker.longitude }}
          />
        ))}
      </MarkerClusterer>
    </GoogleMap>
    <div className="Map__Component__footer" />
  </Fragment>
)))

export default Map
