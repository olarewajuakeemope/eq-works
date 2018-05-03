import types from './types'

export interface MapState {
  title: string
  endpoint: string
  isLoading: boolean
  stats: Array<{}>
}

export interface FetchSuccess {
  type: types.GET_REQUEST_SUCCESS
  stats: Array<{}>
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

export type MapInterfaces = FetchSuccess
  | FetchRequest
  | FetchError
