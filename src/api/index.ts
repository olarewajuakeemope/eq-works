import axios from 'axios'
import { constants } from 'config'

const BASE_URL = constants.api.BASE_URL

export function getStats(endpoint: string, offset: number) {
  const url = BASE_URL + endpoint
  return axios.get(url, { params: { offset } })
    .then(result => result.data)
    .catch(error => error.message)
}
