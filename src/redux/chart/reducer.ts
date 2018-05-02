import t from './types'
import * as I from './interfaces'

interface ActionHandler {
  readonly [r: string]: (state: I.ChartState, action: I.ChartInterfaces) => I.ChartState
}

const ACTION_HANDLERS: ActionHandler = {
  [t.GET_STATS_SUCCESS]: (state, { stats, endpoint }: I.FetchSuccess) => ({
    ...state,
    stats: {
      ...state.stats,
      [endpoint]: stats,
    },
  }),
  [t.GET_STATS_ERROR]: (state, { error }: I.FetchError) => ({
    ...state,
    error,
  }),
}

const initialState = {
  stats: {},
  error: '',
}

export default function reducer(state = initialState, action: I.ChartInterfaces) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
