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
