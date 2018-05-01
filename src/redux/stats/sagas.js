import { takeEvery, all, fork, call, put } from 'redux-saga/effects'
import { getStats } from 'api'
import * as t from './actionTypes'

function* getStatsSaga({ title, endpoint }) {
  try {
    const stats = yield call(getStats, endpoint)
    yield put({
      type: t.GET_REQUEST_SUCCESS,
      stats: { ...stats, title },
    })
  } catch (error) {
    // TODO: handle errors better
    yield put({ type: t.GET_REQUEST_ERROR, error })
  }
}

function* setDefaultStatsSaga() {
  yield put({
    type: t.GET_REQUEST,
    title: 'Events Daily',
    endpoint: '/events/daily',
  })
}

function* watchGetStatsSaga() {
  yield takeEvery(t.GET_REQUEST, getStatsSaga)
}

export default function* () {
  yield all([
    fork(watchGetStatsSaga),
    fork(setDefaultStatsSaga),
  ])
}
