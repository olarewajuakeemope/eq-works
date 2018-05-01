import React from 'react'
import './style.css'

const Link = ({ title, endpoint, onClick }) => (
  <div
    onClick={() => onClick(title, endpoint)}
    className='Table__Component__Sidebar__Content__Link__wrapper'>
    <div className='Table__Component__Sidebar__Content__Link__body'>
      <div className='Table__Component__Sidebar__Content__link'>
        {title}
      </div>
    </div>
  </div>
)

export default Link
