import { takeEvery, all, call, put, fork, select } from 'redux-saga/effects'
import * as t from './actionTypes'

export function* getStatsSaga({ id, lang }){
  console.log(id, lang)
}

function* watchGetStatsSaga() {
  yield takeEvery(t.GET_REQUEST, getStatsSaga)
}

export default function* () {
  yield fork(watchGetStatsSaga)
}
