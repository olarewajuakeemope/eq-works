import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { routerReducer as router } from 'react-router-redux'
import agents from './agents/reducer'

export default combineReducers({
  router,
  agents,
  form,
})
