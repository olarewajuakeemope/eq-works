import React from 'react'
import Link from './Link'
import './style.css'

const links = [
  {
    name: 'Tables',
    link: '/table',
  },
  {
    name: 'Charts',
    link: '/chart',
  },
  {
    name: 'Map',
    link: '/map',
  },
]

const Links = () => (
  <div className="Links">
    {links.map(({ link, name }, i) => <Link key={i} link={link} name={name} />)}
  </div>
)

export default Links
