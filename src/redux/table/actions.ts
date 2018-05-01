import t from './types'

export function getStats(title: string, endpoint: string){
  return {
    type: t.GET_REQUEST,
    title,
    endpoint,
  }
}
