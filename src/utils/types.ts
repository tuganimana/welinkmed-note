/* eslint-disable no-unused-vars */
export interface LoginType {
  username:string;
  password:string;
}
export interface RegisterType {
  firstname:string;
  lastname:string;
  email:string;
  password:string;
  category:string;
  organization:string;
}
export interface SigType {
  status:string;
  instruction:string;
  quantity:number;
  administation:string;
  schedule:string;
  behavioral:string;
  clinicalAlert:string;
  reason:string;
}

export interface MedicationType {
  NameMedication:string;
  Dosage:string;
  MedicationType:string;
  StartDate:string;
  EndDate:string;
}

export interface ResidentType {
  firstName:string;
  lastName:string;
  residentSate: string;
  religion: string;
  maritialStatus: string;
  dateOfBirth: string;
  attendingPhysician: string;
  addedDate: string;
  additionalPhysician: string;
  admittingPhysician: string;
}

export interface ClientType {
  firstName:string;
  lastName:string;
  residentSate: string;
  religion: string;
  maritialStatus: string;
  dateOfBirth: string;
  attendingPhysician: string;
  email: string;
  phonenumber: string;
}

export interface SearchType {
  search:string;
}

export interface OrderType {
  routineMedOrder:string;
  orderType:string;
  description:string;
  generic:string;
  physicians:string;
  orderStatus:string;
  lastRefill:string;
  rxNumber:number;
  ndc:string;
  externalId:string;
  previousId:string;
  barcode:string;
  administrationType: string;
  startDate: string;
  endDate: string;
  programAdminister: string;
  month: string;
  weekly:string;
  dates: string;
  dose: string;
  dosePerday: string;
  timesPerday: string;
  allergies?:string;
}

export interface RoutineAdminType {
  administrationType: string;
  startDate: string;
  endDate: string;
  month: string;
  dates: string;
  dose: string;
  dosePerday: string;
  timesPerday: string;
}

export interface AdministerType {
  initial:string,
  days:number,
  residentId:string,
  orderId:string,
  time:string,
  latedescription?:string
}
