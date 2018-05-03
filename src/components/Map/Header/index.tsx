import React from 'react'
import './style.css'

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => (
  <div className="Map__Header__Component__wrapper">{title}</div>
)

export default Header
