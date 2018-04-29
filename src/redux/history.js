import createHistory from 'history/createBrowserHistory'
import { matchPath } from 'react-router-dom'

// configure, create, and export the project's history instance
const basename = typeof __BASENAME__ !== 'undefined' ? __BASENAME__ : ''
const history = createHistory({
  basename,
})

const allParams = '/agent/chat/:roomId?/:ticketOpen?/:ticketId?/:userOpen?/:userId?/:applicationOpen?/:applicationId?'

const matchAiParams = () => {
  const match = matchPath(history.location.pathname, {
    path: allParams,
  })
  if (!match) {
    return {}
  }

  return { ...match.params}
}

export default history
export { matchAiParams }
