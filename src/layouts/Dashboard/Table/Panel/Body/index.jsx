import React from 'react'
import PaginationBodyContainer from 'containers/Table/Pagination/Body'
import PaginationInputContainer from 'containers/Table/Pagination/Input'
import './style.css'

const BodyLayout = () => (
  <div className='TableBody'>
    <PaginationBodyContainer />
    <PaginationInputContainer />
  </div>
)

export default BodyLayout
