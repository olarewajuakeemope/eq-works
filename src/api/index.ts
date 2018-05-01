import axios from 'axios'
import { constants } from 'config'

const BASE_URL = constants.api.BASE_URL

export function getStats(endpoint: string) {
  const url = BASE_URL + endpoint
  return axios.get(url)
    .then(result => result.data)
    .catch(error => error.message)
}
