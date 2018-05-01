import t from './types'
import * as I from './interfaces'

interface ActionHandler {
  readonly [r: string]: (state: I.TableState, action: I.TableInterfaces) => I.TableState
}

const ACTION_HANDLERS: ActionHandler = {
  [t.GET_REQUEST]: (state, { title, endpoint }: I.FetchRequest) => ({
    ...state,
    title,
    endpoint,
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
}

const initialState = {
  stats: {},
  title: '',
  endpoint: '',
  isLoading: false,
}

export default function reducer(state = initialState, action: I.TableInterfaces) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
