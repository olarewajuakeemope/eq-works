import * as t from './actionTypes'

const ACTION_HANDLERS = {
  [t.GET_REQUEST]: state => ({
    ...state,
    isLoading: true,
  }),
}

const initialState = {
  isLoading: false,
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
