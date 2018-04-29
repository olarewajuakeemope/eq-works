import { applyMiddleware, createStore } from 'redux'
import { History } from 'history'
import { routerMiddleware } from 'react-router-redux'
import reduxFreeze from 'redux-freeze'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

// todo: disable logging on production
const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: action => {
      if (action.type.match(/_REQUEST/g)) {
        return 'black'
      } else if (action.type.match(/_ERROR$/g)) {
        return 'red'
      } else if (action.type.match(/_SUCCESS/g)) {
        return 'green'
      } else {
        return 'gray'
      }
    },
  },

})

const errorMiddleware = () => next => action => {
  try {
    return next(action)
  } catch (error) {
    return console.error(error)
  }
}

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}, history) {
  // Compose final middleware and use devtools in debug environment

  const allowDebug = process.env.NODE_ENV !== 'production'

  const middlewares = [
    errorMiddleware,
    sagaMiddleware,
    routerMiddleware(history),
  ]

  if (allowDebug) {
    middlewares.push(logger, reduxFreeze)
  }

  const middleware = applyMiddleware(...middlewares)

  // Create final store and subscribe router in debug env ie. for devtools
  const store = middleware(createStore)(rootReducer, initialState)

  let sagaTask = sagaMiddleware.run(rootSaga)
  return store
}