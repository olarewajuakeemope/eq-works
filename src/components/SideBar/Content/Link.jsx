import React from 'react'
import './style.css'

const Link = ({ title, endpoint, onClick }) => (
  <div
    onClick={() => onClick(title, endpoint)}
    className='SideBar__content__component'>
    <div className='SideBar__content__wrapper'>
      <div className='SideBar__content__body'>
        {title}
      </div>
    </div>
  </div>
)

export default Link
