import React from 'react'
import './style.css'

interface LinkProps {
  title: string
  onClick: Function
}
const Link = ({ title, onClick }: LinkProps) => (
  <div
    onClick={() => onClick(title)}
    className="Map__Component__Sidebar__Content__Link__wrapper">
    <div className="Map__Component__Sidebar__Content__Link__body">
      <div className="Map__Component__Sidebar__Content__link">
        {title.toUpperCase()}
      </div>
    </div>
  </div>
)

export default Link
