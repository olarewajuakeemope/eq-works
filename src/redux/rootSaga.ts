import { all, fork, } from 'redux-saga/effects'
import tableSagas from 'redux/table/sagas'

export default function* root() {
  yield all([
    fork(tableSagas),
  ])
}
