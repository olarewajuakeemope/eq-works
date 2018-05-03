import React from 'react'
import Loading from 'components/Common/Loading'
import './style.css'

interface MapProps {
  rows: Array<{}>
  isReady: boolean
}

const Map = ({ rows, isReady }: MapProps) => {
  const map = (
    <div>
      <div className="Map__Component__footer" />
    </div>
  )

  return (
    <Loading loading={!isReady}>
      {(isReady && rows.length) ? map : <div />}
    </Loading>
  )
}

export default Map
