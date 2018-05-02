import types from './types'

export interface StatsInterface {
  [id: string]: any
}

export interface ChartState {
  error: string
  stats: StatsInterface
}

export interface FetchSuccess {
  type: types.GET_STATS_SUCCESS
  stats: StatsInterface
  endpoint: string
}

export interface FetchError {
  type: types.GET_STATS_ERROR
  error: string
}

export type ChartInterfaces = FetchSuccess
  | FetchError
