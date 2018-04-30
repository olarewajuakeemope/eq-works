import * as t from './actionTypes'

export function getStats(endpoint){
  return {
    type: t.GET_REQUEST,
    endpoint,
  }
}
