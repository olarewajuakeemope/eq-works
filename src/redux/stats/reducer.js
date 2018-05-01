import * as t from './actionTypes'

const ACTION_HANDLERS = {
  [t.GET_REQUEST]: state => ({
    ...state,
    isLoading: true,
  }),
  [t.GET_REQUEST_SUCCESS]: (state, { stats }) => ({
    ...state,
    stats,
    isLoading: false,
  }),
  [t.GET_REQUEST_ERROR]: state => ({
    ...state,
    isLoading: false,
  }),
}

const initialState = {
  stats: {},
  isLoading: true,
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
