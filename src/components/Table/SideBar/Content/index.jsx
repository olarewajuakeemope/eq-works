import React from 'react'
import Link from 'containers/Table/SideBar/Link'
import './style.css'

const links = [
  {
    title: 'Events Daily',
    endpoint: '/events/daily',
  },
  {
    title: 'Events Hourly',
    endpoint: '/events/hourly',
  },
  {
    title: 'Stats Daily',
    endpoint: '/stats/daily',
  },
  {
    title: 'Stats Hourly',
    endpoint: '/stats/hourly',
  },
]

const Content = () => (
  <div className='Table__Component__Sidebar__content'>
    {links.map(({ title, endpoint }, i) =>
      <Link key={i} title={title} endpoint={endpoint} />)}
  </div>
)

export default Content
