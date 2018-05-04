import React from 'react'
import Link from 'containers/Table/SideBar/Link'
import { constants } from 'config'
import './style.css'

const Content = () => (
  <div className="Table__Component__Sidebar__content">
    {constants.application.endpoints.map(({ title, endpoint }: any, i: number) =>
      <Link key={i} title={title} endpoint={endpoint} />)}
  </div>
)

export default Content
