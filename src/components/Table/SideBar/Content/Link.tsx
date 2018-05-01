import React from 'react'
import './style.css'

interface LinkProps {
  title: string
  endpoint: string
  onClick: Function
}
const Link = ({ title, endpoint, onClick }: LinkProps) => (
  <div
    onClick={() => onClick(title, endpoint)}
    className="Table__Component__Sidebar__Content__Link__wrapper">
    <div className="Table__Component__Sidebar__Content__Link__body">
      <div className="Table__Component__Sidebar__Content__link">
        {title}
      </div>
    </div>
  </div>
)

export default Link
