import React from 'react'
import PaginationBodyContainer from 'containers/Stats/Pagination/Body'
import PaginationInputContainer from 'containers/Stats/Pagination/Input'
import './style.css'

const BodyLayout = () => (
  <div className='TableBody'>
    <PaginationBodyContainer />
    <PaginationInputContainer />
  </div>
)

export default BodyLayout
