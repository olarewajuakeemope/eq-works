import React from 'react'
import Link from 'containers/Map/SideBar/Link'
import { constants } from 'config'
import './style.css'

const Content = () => (
  <div className="Map__Component__Sidebar__content">
    {constants.map.sidebar.map(({ title, endpoint }, i) =>
      <Link key={i} title={title} endpoint={endpoint} />)}
  </div>
)

export default Content
