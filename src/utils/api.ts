import { apiBaseUrl } from './env'
import { backEndPoints, welinkTokens } from './enums'
const axios = require('axios').default

class Api {
  private async axiosConnect (method:any, endpoint:backEndPoints, body?:object, postid?:string) {
    const Authorization = localStorage.getItem(welinkTokens.userToken)
    const urlPath = apiBaseUrl + endpoint + postid
    const headers = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json',
        Authorization: `Bearer ${Authorization}`
      }
    }
    try {
      return method(urlPath, headers, body)
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
      throw new Error(`connect to api fails:${err}`)
    }
  }

  private async connect (endpoint: backEndPoints, method: any, body?: object) {
    const Authorization = localStorage.getItem(welinkTokens.userToken)
    const url = apiBaseUrl + endpoint
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      Authorization: `Bearer ${Authorization}`
    }
    try {
      const request = await axios({
        method: method,
        url: url,
        data: body,
        headers: headers
      })
      if (request.status.toString().startsWith('4') || request.status.toString().startsWith('5')) {
        console.error(` error returned by the API: ${request.statusText}`)
        throw new Error(request.statusText)
      }
      return request.data
    } catch (error) {
      console.log(`There was an error connecting to the API: ${error}`)
    }
  }

  public async apiConnect (method:any, endpoint:backEndPoints, body?:object) {
    const token = localStorage.getItem(welinkTokens.userToken)
    const urlPath = apiBaseUrl + endpoint
    const headers = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json',
        // eslint-disable-next-line quote-props
        Authorization: `Bearer ${token}`
      }
    }
    try {
      return axios({
        method: method,
        url: urlPath,
        headers: headers,
        data: body,
        responseType: 'json'
      })
    } catch (err) {
      throw new Error(`Error-${err}`)
    }
  }

  //    let's call  api here
  public async loginApiRequest (email:string, password:string) {
    const data = {
      email: email.toString(),
      password: password.toString()
    }
    try {
      const res = await this.apiConnect('POST', backEndPoints.LOGIN, data)
      return res
    } catch (error) {
      throw new Error(`Could not Login due to ${error}`)
    }
  }

  // medication due
  public async medicationRequest (NameMedication:string, Dosage:string, MedicationType:string, StartDate:string, EndDate:string) {
    try {
      const res = await this.axiosConnect(axios.post, backEndPoints.CREATE_MEDICATION, { NameMedication, Dosage, MedicationType, StartDate, EndDate }, '')
      return res
    } catch (error) {
      console.log(`failed to add medication: ${error}`)
    }
  }
  // start RESIDENT API request

  public async residentRegiterRequest (
    firstName:string,
    lastName:string,
    residentSate:string,
    religion:string,
    maritialStatus: string,
    dateOfBirth: string,
    attendingPhysician: string,
    addedDate: string,
    additionalPhysician: string,
    admittingPhysician: string,
    userId?:string) {
    try {
      const res = await this.apiConnect('POST', backEndPoints.CREATE_RESIDENT, {
        firstName,
        lastName,
        residentSate,
        religion,
        maritialStatus,
        dateOfBirth,
        attendingPhysician,
        addedDate,
        additionalPhysician,
        admittingPhysician,
        userId
      })
      return res
    } catch (error) {
      console.log(`failed to add medication: ${error}`)
    }
  }

  public async residentUpdateRequest (
    firstName:string,
    lastName:string,
    residentSate:string,
    religion:string,
    maritialStatus: string,
    dateOfBirth: string,
    attendingPhysician: string,
    addedDate: string,
    additionalPhysician: string,
    admittingPhysician: string,
    userId?:string,
    parameter?:string) {
    try {
      const res = await this.apiConnect('PUT', backEndPoints.CREATE_RESIDENT, {
        firstName,
        lastName,
        residentSate,
        religion,
        maritialStatus,
        dateOfBirth,
        attendingPhysician,
        addedDate,
        additionalPhysician,
        admittingPhysician,
        userId
      })
      return res
    } catch (error) {
      console.log(`failed to update: ${error}`)
    }
  }

  public async residentProfileRequest (profile:string) {
    try {
      const res = await this.axiosConnect(axios.put, backEndPoints.RESIDENT_PROFILE)
      return res
    } catch (err) {
      console.log(`failed to update profile : ${err}`)
    }
  }

  public async getSingleresident (parameter:string) {
    try {
      const res = await this.axiosConnect(axios.get, backEndPoints.CREATE_RESIDENT, {}, parameter)
      return res
    } catch (err) {
      console.log(`Fetched : ${err}`)
    }
  }

  // ================END resident api
  public async allResidentRequest () {
    try {
      const res = await this.axiosConnect(axios.get, backEndPoints.CREATE_RESIDENT, {}, '')
      return res
    } catch (err) {
      console.log(`failed to fetch : ${JSON.stringify(err)}`)
    }
  }

  public async administerRequest (
    initial:string,
    days:number,
    residentId:string,
    orderId:string,
    time:string,
    latedescription?:string
  ) {
    try {
      const response = await this.axiosConnect(axios.post, backEndPoints.CREATE_ADMINISTER, {
        initial,
        days,
        residentId,
        orderId,
        time,
        latedescription
      }, '')
      return response
    } catch (err) {
      console.log(err)
    }
  }

  public async AllOrderRequest () {
    try {
      const res = await this.axiosConnect(axios.get, backEndPoints.CREATE_ORDER, {}, '')
      return res
    } catch (err) {
      console.log(`failed to fetch : ${err}`)
    }
  }

  public async UserRegisterRequest (
    firstName: string,
    lastName:string,
    email: string,
    password: string,
    category: string,
    origanization: string,
    addedby:string) {
    try {
      const res = await this.axiosConnect(axios.post, backEndPoints.REGISTER, {
        firstName,
        lastName,
        email,
        password,
        category,
        origanization,
        addedby
      }, '')
      return res
    } catch (error) {
      console.log(`failed to add new user: ${error}`)
    }
  }

  public async OrderCreate (
    routineMedOrder:string,
    orderType:string,
    description:string,
    generic:string,
    physicians:string,
    orderStatus:string,
    lastRefill:string,
    rxNumber:number,
    ndc:string,
    externalId:string,
    previousId:string,
    barcode:string,
    administrationType: string,
    startDate: string,
    endDate: string,
    programAdminster: string,
    month: string,
    week:string,
    dates: string,
    dose: string,
    dosePerday: string,
    morningTimes?:string,
    noonTimes?:string,
    nightTimes?:string,
    timesPerday?:string,
    addedby?:string,
    organization?:string,
    residentid?:string) {
    try {
      const res = await this.connect(backEndPoints.CREATE_ORDER, 'POST', {
        routineMedOrder,
        orderType,
        description,
        generic,
        physicians,
        orderStatus,
        lastRefill,
        rxNumber,
        ndc,
        externalId,
        previousId,
        barcode,
        administrationType,
        startDate,
        endDate,
        programAdminster,
        month,
        week,
        dates,
        dose,
        dosePerday,
        morningTimes,
        noonTimes,
        nightTimes,
        timesPerday,
        addedby,
        organization,
        residentid
      })
      return res
    } catch (error) {
      console.log(`failed to add new Order: ${error}`)
    }
  }

  public async RourineAdmin (
    administrationType: string,
    startDate: string,
    endDate: string,
    month: string,
    dates: string,
    dose: string,
    dosePerday: string,
    timesPerday: string,
    order: string,
    addedby:string) {
    try {
      const res = await this.axiosConnect(axios.post, backEndPoints.ROUTINE_ADMIN, {
        administrationType,
        startDate,
        endDate,
        month,
        dates,
        dose,
        dosePerday,
        timesPerday,
        order,
        addedby
      }, '')
      return res
    } catch (error) {
      console.log(`failed to add ROutine to Order failed: ${error}`)
    }
  }

  public async clientRequest (
    firstName:string,
    lastName:string,
    residentSate:string,
    religion:string,
    maritialStatus: string,
    dateOfBirth: string,
    phonenumber: string,
    email: string,
    attendingPhysician: string,
    userId?:string) {
    try {
      const res = await this.axiosConnect(axios.post, backEndPoints.ADDCLIENT, {
        firstName,
        lastName,
        residentSate,
        religion,
        maritialStatus,
        dateOfBirth,
        phonenumber,
        email,
        attendingPhysician,
        userId
      }, '')
      return res
    } catch (error) {
      console.log(`failed to add client: ${error}`)
    }
  }

  public async allclientRequest () {
    try {
      const res = await this.axiosConnect('GET', backEndPoints.ADDCLIENT, {}, '')
      return res
    } catch (err) {
      console.log('failed to fetch')
    }
  }

  public async residentProfileUpdateRequest (parameter:string, profile:FormData) {
    try {
      const res = await this.axiosConnect(axios.put, backEndPoints.RESIDENT_PROFILE, profile, parameter)
      return res
    } catch (error) {
      console.log(`failed update picture: ${error}`)
    }
  }

  // DUE MEDICATION
  public async dueMedication (addedby:string) {
    try {
      const res = await this.axiosConnect(axios.get, backEndPoints.EXPIRED_ORDERS, {}, addedby)
      return res
    } catch (error) {
      console.log('failed to fetch expired orders: ')
    }
  }

  // Check MEDICATION
  public async checkMedics (userId:string) {
    try {
      const res = await this.axiosConnect(axios.get, backEndPoints.DUE_ORDERS, {}, userId)
      return res
    } catch (error) {
      console.log('failed to fetch expired orders: ')
    }
  }

  // GET ALL USERS
  public async getAllUser () {
    try {
      const res = await this.axiosConnect(axios.get, backEndPoints.REGISTER, {}, '')
      return res
    } catch (error) {
      console.log(`failed update picture: ${error}`)
    }
  }
}

export const useApi = new Api()
