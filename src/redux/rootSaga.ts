import { all, fork, } from 'redux-saga/effects'
import tableSagas from 'redux/table/sagas'
import chartSagas from 'redux/chart/sagas'
import mapSagas from 'redux/map/sagas'

export default function* root() {
  yield all([
    fork(tableSagas),
    fork(chartSagas),
    fork(mapSagas),
  ])
}
