/* eslint-disable no-unused-vars */
export enum frontEndPoints {
    RESIDENT_ADD ='/add-resident',
    DASHBOARD='/dashboard',
    USERADMIN='/user-dashboard',
    LOGIN='/signin',
    USER_MAINTENANCE='/user-maintenance',
    ORDER='/order-detail',
    MEDICATION='/medication-due',
    HOME='/',
    ROOT='/root-dashboard',
    RESIDENT_INFO='/resident-infos'

 }

export enum backEndPoints {
    LOGIN='/api/login',
    REGISTER ='/api/create',
    CREATE_MEDICATION='/api/createMedication',
    CREATE_RESIDENT='/api/resident',
    RESIDENT_PROFILE='/api/resident/profile'
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
    username = 'userName',
    userID='id'
  }

export enum accountCategory{
    ADMIN='Admin',
    ROOT ='Root',
    CLIENTS='Clients',
    DEMO = 'Demo'
  }
