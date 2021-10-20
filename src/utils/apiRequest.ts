import { apiBaseUrl } from './env'
import { welinkTokens } from './enums'
import axios from 'axios'
const Authorization = localStorage.getItem(welinkTokens.userToken)
const headers = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json'
    // Authorization: `Bearer ${Authorization}`
  }
}
axios.defaults.headers.common.Authorization = `Bearer ${Authorization}`
export const api = axios.create({
  baseURL: apiBaseUrl,
  headers: headers
})
