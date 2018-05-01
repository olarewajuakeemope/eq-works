import React from 'react'
import './style.css'

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => (
  <div className="Table__Header__Component__title">{title}</div>
)

export default Header
