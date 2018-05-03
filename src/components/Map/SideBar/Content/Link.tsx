import React from 'react'
import './style.css'

interface LinkProps {
  title: string
  endpoint: string
  onClick: Function
}
const Link = ({ title, endpoint, onClick }: LinkProps) => (
  <div
    onClick={() => onClick(title, endpoint, 0)}
    className="Map__Component__Sidebar__Content__Link__wrapper">
    <div className="Map__Component__Sidebar__Content__Link__body">
      <div className="Map__Component__Sidebar__Content__link">
        {title}
      </div>
    </div>
  </div>
)

export default Link
