import axios from 'axios'
import { constants } from 'config'

const BASE_URL = constants.api.BASE_URL

export function getStats(endpoint: string, offset: number, limit?: number, query?: object) {
  const url = BASE_URL + endpoint
  const defaultParams = limit ? { offset, limit } : { offset }
  const params = query ? { ...defaultParams, ...query } : defaultParams
  return axios.get(url, { params })
    .then(result => result.data)
    .catch(error => error.message)
}
