import React from 'react'
import './style.css'

const test = ({ title, endpoint }) => (
  <div
    className='SideBar__content__component'>
    <div className='SideBar__content__wrapper'>
      <div className='SideBar__content__body'>
        {title}
      </div>
    </div>
  </div>
)

export default test
