import t from './types'
import * as I from './interfaces'

interface ActionHandler {
  readonly [r: string]: (state: I.MapState, action: I.MapInterfaces) => I.MapState
}

const ACTION_HANDLERS: ActionHandler = {
  [t.GET_REQUEST]: state => ({
    ...state,
    isLoading: true,
  }),
  [t.GET_REQUEST_SUCCESS]: (state, { stats }: I.FetchSuccess) => ({
    ...state,
    stats,
    isLoading: false,
  }),
  [t.GET_REQUEST_ERROR]: state => ({
    ...state,
    isLoading: false,
  }),
  [t.SET_TITLE]: (state, { title }: I.SetTitle) => ({
    ...state,
    title,
  }),
}

const initialState = {
  stats: [],
  title: '',
  isLoading: false,
}

export default function reducer(state = initialState, action: I.MapInterfaces) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
