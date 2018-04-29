import { takeLatest, all, fork, } from 'redux-saga/effects'
import agents from './agents/sagas'

export default function* root() {
  yield all([
    fork(agents),
  ])
}
