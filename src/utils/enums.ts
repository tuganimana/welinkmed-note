/* eslint-disable no-unused-vars */
export enum frontEndPoints {
    RESIDENT_ADD ='/add-resident',
    DASHBOARD='/dashboard',
    ADMIN='/organization',
    LOGIN='/signin',
    USER_MAINTENANCE='/user-maintenance',
    ORDER='/order-detail',
    HOME='/'

 }

export enum backEndPoints {
    LOGIN='/api/login',
    REGISTER ='/api/create',
    MEDICATION='/api/medication'
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

export enum accountCategory{
    ADMIN='Admin',
    ROOT ='Root',
    CLIENTS='Clients',
    DEMO = 'Demo'
  }
