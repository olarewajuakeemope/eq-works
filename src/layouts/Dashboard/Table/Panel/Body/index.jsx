import React from 'react'
import PaginationBodyContainer from 'containers/Table/Pagination/Body'
import PaginationInputContainer from 'containers/Table/Pagination/Input'
import './style.css'

const BodyLayout = () => (
  <div className='Dashboard__Table__Panel__Body'>
    <PaginationBodyContainer />
    <PaginationInputContainer />
  </div>
)

export default BodyLayout
