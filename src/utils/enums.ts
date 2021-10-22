/* eslint-disable no-unused-vars */
export enum frontEndPoints {
    RESIDENT_ADD ='/add-resident',
    DASHBOARD='/dashboard',
    USERADMIN='/user-dashboard',
    LOGIN='/signin',
    CREATE_USER='/urser-add',
    USER_MAINTENANCE='/user-maintenance',
    ROOT_MAINTENANCE='/root-maintenance',
    ORDER='/order-detail',
    MEDICATION='/medication-due',
    ADDCLIENT='/addclient',
    HOME='/',
    ROOT='/root-dashboard',
    RESIDENT_INFO='/resident-infos',
    RESIDENT_EDIT='/resident-edit',
    MAR ='/user-mar'

 }

export enum backEndPoints {
    LOGIN='/api/login',
    REGISTER ='/api/create',
    CREATE_MEDICATION='/api/createMedication',
    CREATE_RESIDENT='/api/resident',
    RESIDENT_PROFILE='/api/resident/profile',
    CREATE_ORDER='/api/createorder',
    ADDCLIENT='/api/Addclient',
    ROUTINE_ADMIN='/api/routineadmin',
    CREATE_ADMINISTER= '/api/administer',
    DUE_ORDERS='api/checkmedics',
    EXPIRED_ORDERS='/api/expiredorder'
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
