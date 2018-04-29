import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { routerReducer as router } from 'react-router-redux'
import stats from './stats/reducer'

export default combineReducers({
  router,
  stats,
  form,
})
