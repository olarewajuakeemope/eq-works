import * as t from './actionTypes'

export function getStats(title, endpoint){
  return {
    type: t.GET_REQUEST,
    title,
    endpoint,
  }
}
