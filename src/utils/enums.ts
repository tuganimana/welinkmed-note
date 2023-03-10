/* eslint-disable no-unused-vars */
export enum frontEndPoints {
    RESIDENT_ADD ='/add-resident',
    RESIDENT_ADD_USER ='/users/add-resident',
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
    ROOT_ADMINDETAILS='/root-admindetails',
    ROOT_ADDRESIDENT='/root-addresident',
    ROOT_PAYMENT='/root-payment',
    ROOT_REPORT='/root-report',
    RESIDENT_INFO='/resident-infos',
    RESIDENT_INFO_USER='/users/resident-infos',
    RESIDENT_EDIT='/resident-edit',
    MAR ='/user-mar',
    MAR_USER ='/user/user-mar',
    DUE_ORDERS='/due-orders',
    DUE_ORDERS_USERS='/users/DueOrderUser',
    EXPIRED_ORDERS='/users/ExpiredOrderUser',
    RESIDENT_DUE='/resident-due',
    ORDER_USERS='/users/order-detail'

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
    DUE_ORDERS='/api/checkmedics',
    RESIDENT_ORDERS='/api/checkmedics/resident',
    EXPIRED_ORDERS='/api/expiredorder',
    ADMINISTER='/api/mar-report',
    RESIDENT_ORGANIZATION='/api/resident/organization',
    RESIDENT_DUE='/api/resident/due',
    ADMINIST_MAR='/api/administer-mar',
    CHECK_ADMINISTER = '/api/check-administer',
    SIGNIFICATION = '/api/signification',
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
    userID='id',
    organization='organization'
  }

export enum accountCategory{
    ADMIN='Admin',
    ROOT ='Root',
    CLIENTS='Clients',
    DEMO = 'Demo'
  }
