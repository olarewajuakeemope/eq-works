import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { routerReducer as router } from 'react-router-redux'
import table from 'redux/table/reducer'
import chart from 'redux/chart/reducer'
import map from 'redux/map/reducer'
import { TableState } from 'redux/table/interfaces'
import { MapState } from 'redux/map/interfaces'
import { ChartState } from 'redux/chart/interfaces'

export interface RootReducerInterface {
  router: {},
  form: {},
  table: TableState,
  map: MapState,
  chart: ChartState,
}

export default combineReducers<RootReducerInterface>({
  router,
  table,
  chart,
  map,
  form,
})
