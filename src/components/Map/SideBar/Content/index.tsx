import React from 'react'
import Link from 'containers/Map/SideBar/Link'
import { constants } from 'config'
import './style.css'

const Content = () => (
  <div className="Map__Component__Sidebar__content">
    {constants.map.tables.map((title: string, i: number) =>
      <Link key={i} title={title} />)}
  </div>
)

export default Content
