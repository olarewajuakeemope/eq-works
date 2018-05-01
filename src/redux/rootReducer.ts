import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { routerReducer as router } from 'react-router-redux'
import table from 'redux/table/reducer'
import { TableState } from 'redux/table/interfaces'

export interface RootReducerInterface {
  router: {},
  form: {},
  table: TableState,
}

export default combineReducers<RootReducerInterface>({
  router,
  table,
  form,
})
