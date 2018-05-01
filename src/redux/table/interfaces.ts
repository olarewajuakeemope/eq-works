import types from './types'

interface StatsInterface {
  [id: string]: any
}

export interface TableState {
  title: string
  endpoint: string
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
  endpoint: string
  offset: number
}

export interface FetchError {
  type: types.GET_REQUEST_ERROR
}

export type TableInterfaces = FetchSuccess
  | FetchRequest
  | FetchError
