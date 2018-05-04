import t from './types'
import { constants } from 'config'

export function getQuery(query: object, title: string) {
  return {
    type: t.GET_REQUEST,
    query: {
      table: constants.map.pgTable[title],
      ...query,
    },
  }
}

export function setTitle(title: string) {
  return {
    type: t.SET_TITLE,
    title,
  }
}
