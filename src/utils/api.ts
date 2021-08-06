import { apiBaseUrl } from './env'
import { backEndPoints, welinkTokens } from './enums'
const axios = require('axios').default

class Api {
  public async axiosConnect (method:any, endpoint:backEndPoints, body?:object, postid?:string) {
    const Authorization = localStorage.getItem(welinkTokens.userToken)
    const urlPath = apiBaseUrl + endpoint + postid
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${Authorization}`
      }
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
      const res = await this.axiosConnect(axios.post, backEndPoints.LOGIN, { email, password }, '')
      return res
    } catch (error) {
      console.log(`could not Login due: ${error}`)
      // throw new Error(`Could not Login due to ${error.message}`)
    }
  }

  // medication due
  public async medicationRequest (NameMedication:string, Dosage:string, MedicationType:string, StartDate:string, EndDate:string) {
    try {
      const res = await this.axiosConnect(axios.post, backEndPoints.CREATE_MEDICATION, { NameMedication, Dosage, MedicationType, StartDate, EndDate }, '')
      return res
    } catch (error) {
      console.log(`failed to add medication: ${error.message}`)
    }
  }

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
      const res = await this.axiosConnect(axios.post, backEndPoints.CREATE_RESIDENT, {
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
      }, '')
      return res
    } catch (error) {
      console.log(`failed to add medication: ${error}`)
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

  public async allResidentRequest () {
    try {
      const res = await this.axiosConnect(axios.get, backEndPoints.CREATE_RESIDENT, {}, '')
      return res
    } catch (err) {
      console.log(`failed to fetch : ${err.message}`)
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
      console.log(`failed to add new user: ${error.message}`)
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
    dates: string,
    dose: string,
    dosePerday: string,
    timesPerday: string,
    addedby:string) {
    try {
      const res = await this.axiosConnect(axios.post, backEndPoints.CREATE_ORDER, {
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
        dates,
        dose,
        dosePerday,
        timesPerday,
        addedby
      }, '')
      return res
    } catch (error) {
      console.log(`failed to add new Order: ${error.message}`)
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
      console.log(`failed to add ROutine to Order failed: ${error.message}`)
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
}
export const useApi = new Api()
