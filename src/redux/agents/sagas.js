import { takeEvery, all, call, put, fork, select } from 'redux-saga/effects'

export function* getAgentReviewsSaga({ id, lang }){
  console.log(id, lang)
}

function* watchGetReviewsSaga() {
  yield takeEvery('t.FETCH_REVIEWS_REQUEST', getAgentReviewsSaga)
}

export default function* () {
  yield fork(watchGetReviewsSaga)
}
