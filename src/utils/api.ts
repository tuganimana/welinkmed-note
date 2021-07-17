import { apiBaseUrl } from './env'
import { backEndPoints, httpMethod, welinkTokens } from './enums'
const axios = require('axios').default

class Api {
  private async connectApi (endpoint:backEndPoints, method:httpMethod, body?:object) {
    const Authorization = localStorage.getItem(welinkTokens.userToken)
    const urlPath = apiBaseUrl + endpoint
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization
    }
    try {
      const request = await axios({
        urlPath,
        method,
        headers,
        data: JSON.stringify(body)
      })
      if (request.status.toString().startsWith('4') || request.status.toString().startsWith('5')) {
        console.error(` error returned by the API: ${request.statusText}`)
        throw new Error(request.statusText)
      }
      return request.data
    } catch (error) {
      console.log(`There was an error connecting to the API: ${error.message}`)
      throw new Error(error.message)
    }
  }

  //    let's call  api here
  public async loginApiRequest (email:string, password:string) {
    try {
      const { token, accountType } = await this.connectApi(backEndPoints.LOGIN, httpMethod.POST, { email, password })
      return { token, accountType }
    } catch (error) {
      console.log(`could not Login due: ${error.message}`)
      // throw new Error(`Could not Login due to ${error.message}`)
    }
  }

  public async registerApiRequest (email:string, password:string, accountType:string) {
    try {
      const { status, message } = await this.connectApi(backEndPoints.REGISTER, httpMethod.POST, { email, password, accountType })
      return { status, message }
    } catch (error) {
      console.log(error)
      throw new Error(`Could not create a new account:${error.message}`)
    }
  }
}

export const useApi = new Api()
