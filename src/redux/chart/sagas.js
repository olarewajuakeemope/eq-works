import { takeEvery, all, fork, call, put } from 'redux-saga/effects'
import { getStats } from 'api'
import { constants } from 'config'
import t from './types'

function* getStatsSaga(endpoint) {
  try {
    const stats = yield call(getStats, endpoint, 0)
    yield put({ type: t.GET_STATS_SUCCESS, stats, endpoint })
  } catch (error) {
    // TODO: handle errors better
    yield put({ type: t.GET_STATS_ERROR, error })
  }
}

function* setChartStatsSaga() {
  const endpoints = constants.application.endpoints
  for (let i = 0; i < endpoints.length; i += 1) {
    yield call(getStatsSaga, endpoints[i].endpoint)
  }
}

export default function* () {
  yield all([
    fork(setChartStatsSaga),
  ])
}
