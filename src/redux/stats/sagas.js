import { takeEvery, fork } from 'redux-saga/effects'
import * as t from './actionTypes'

export function* getStatsSaga({ endpoint }){
  console.log(endpoint)
}

function* watchGetStatsSaga() {
  yield takeEvery(t.GET_REQUEST, getStatsSaga)
}

export default function* () {
  yield fork(watchGetStatsSaga)
}
