import t from './types'

export function getStats(title: string, endpoint: string, offset: number){
  return {
    type: t.GET_REQUEST,
    title,
    endpoint,
    offset,
  }
}
