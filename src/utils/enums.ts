/* eslint-disable no-unused-vars */
export enum frontEndPoints {
    RESIDENT_ADD ='/add-resident',
    DASHBOARD='/dashboard',
    LOGIN='/',
    USER_MAINTENANCE='/user-maintenance',
    ORDER='/order-detail'

 }
export enum backEndPoints {
    LOGIN='/api/signin',
    REGISTER ='/api/register'
}

export enum httpMethod{
    POST='POST',
    GET='GET',
    PUT='PUT',
    DELETE='DELETE'
  }
export enum welinkTokens{
    userToken = 'welinkUserToken',
    accountType = 'accountType',
    username = 'userName'
  }
