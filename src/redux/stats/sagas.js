import { takeEvery, fork, call } from 'redux-saga/effects'
import { getStats } from '../../api'
import * as t from './actionTypes'

export function* getStatsSaga({ endpoint }) {
  try {
    const stats = yield call(getStats, endpoint)
    console.log(stats)
  } catch (error) {
    // TODO: handle error
  }
}

function* watchGetStatsSaga() {
  yield takeEvery(t.GET_REQUEST, getStatsSaga)
}

export default function* () {
  yield fork(watchGetStatsSaga)
}
