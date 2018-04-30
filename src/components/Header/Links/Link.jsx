import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './style.css'

const Link = ({ link, name }) => (
  <NavLink
    to={link}
    className='Link'
    activeClassName='active'>
    <div>{name}</div>
  </NavLink>
)

Link.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Link
