
import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import Root from './containers/Root'
import configureStore from './redux/configureStore'

const initialState = {}
const history = createHistory()
const store = configureStore(initialState, history)

render(<Root history={history} store={store} />, document.getElementById('root'))
