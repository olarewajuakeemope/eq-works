import types from './types'

interface StatsInterface {
  [id: string]: any
}

export interface TableState {
  title: null | string
  isLoading: boolean
  stats: StatsInterface
}

export interface FetchSuccess {
  type: types.GET_REQUEST_SUCCESS
  stats: StatsInterface
}

export interface FetchRequest {
  type: types.GET_REQUEST
  title: string
}

export interface FetchError {
  type: types.GET_REQUEST_ERROR
}

export type TableInterfaces = FetchSuccess
  | FetchRequest
  | FetchError
