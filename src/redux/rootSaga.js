import { takeLatest, all, fork, } from 'redux-saga/effects'
import stats from './stats/sagas'

export default function* root() {
  yield all([
    fork(stats),
  ])
}
