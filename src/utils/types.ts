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
  gender:string;
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
  name:string;
  description:string;
  dosage:string;
  medicationType:string;
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
