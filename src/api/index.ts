import axios from 'axios'
import { constants } from 'config'

const BASE_URL = constants.api.BASE_URL

export function getStats(endpoint: string, offset: number, limit?: number) {
  const url = BASE_URL + endpoint
  const params = limit ? { offset, limit } : { offset }
  return axios.get(url, { params })
    .then(result => result.data)
    .catch(error => error.message)
}
