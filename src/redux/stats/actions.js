import * as t from './actionTypes'

export function getStats(stats){
  return {
    type: t.GET_REQUEST,
    stats,
  }
}
