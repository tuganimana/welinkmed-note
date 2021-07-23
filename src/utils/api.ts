import { apiBaseUrl } from './env'
import { backEndPoints, welinkTokens } from './enums'
const axios = require('axios').default

class Api {
  public async axiosConnect (method:any, endpoint:backEndPoints, body?:object) {
    const Authorization = localStorage.getItem(welinkTokens.userToken)
    const urlPath = apiBaseUrl + endpoint
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization
    }
    try {
      return method(urlPath, body, headers)
        .then((res:any) => {
          return res.data
        })
        .catch((err:any) => {
          if (err.response) {
            throw err.response
          } else if (err.request) {
            throw err.request
          } else {
            throw new Error(err.message)
          }
        })
    } catch (err) {
      throw new Error(`connect to api fails:${err.message}`)
    }
  }

  //    let's call  api here
  public async loginApiRequest (email:string, password:string) {
    try {
      const res = await this.axiosConnect(axios.post, backEndPoints.LOGIN, { email, password })
      return res
    } catch (error) {
      console.log(`could not Login due: ${error.message}`)
      // throw new Error(`Could not Login due to ${error.message}`)
    }
  }

  // medication due
  public async medicationRequest (title:string, description:string) {
    try {
      const res = await this.axiosConnect(axios.post, backEndPoints.MEDICATION, { title, description })
      return res
    } catch (error) {
      console.log(`failed to add medication: ${error.message}`)
    }
  }
}
export const useApi = new Api()
