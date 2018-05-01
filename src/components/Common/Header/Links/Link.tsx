import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

interface LinkProps {
  link: string
  name: string
}

const Link = ({ link, name }: LinkProps) => (
  <NavLink
    to={link}
    className="Link"
    activeClassName="active">
    <div>{name}</div>
  </NavLink>
)

export default Link
