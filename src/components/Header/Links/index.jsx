import React from 'react'
import Stats from './Stats'
import Map from './Map'
import './style.css'

const Links = () => {
  const links = [
    Map,
    Stats,
  ]

  return (
    <div className='Links'>
      {links.map((Link, i) => <Link key={i} />)}
    </div>
  )
}

export default Links
