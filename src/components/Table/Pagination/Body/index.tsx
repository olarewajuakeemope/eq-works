import React from 'react'
import Loading from 'components/Common/Loading'
import Head from './Head'
import Body from './Body'
import './style.css'

interface TableProps {
  rows: Array<{}>
  isReady: boolean
}

const Table = ({ rows, isReady }: TableProps) => {
  const table = (
    <table>
      <thead>
        {rows && <Head rows={rows[0]} />}
      </thead>
      <Body rows={rows}/>
    </table>
  )

  return (
    <Loading loading={!isReady}>
      {(isReady && rows.length) ? table : <div />}
    </Loading>
  )
}

export default Table
