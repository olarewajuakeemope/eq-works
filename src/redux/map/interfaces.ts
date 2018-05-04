import types from './types'

export interface MapState {
  title: string
  stats: Array<{}>
  isLoading: boolean
}

export interface FetchSuccess {
  type: types.GET_REQUEST_SUCCESS
  stats: Array<{}>
}

export interface SetTitle {
  type: types.GET_REQUEST
  title: string
}

export type MapInterfaces = FetchSuccess
  | SetTitle
