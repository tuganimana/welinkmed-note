// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Select } from 'antd'
import { useForm } from 'react-hook-form'
import { ResidentType } from '../../../utils/types'
import { welinkTokens } from '../../../utils/enums'
import { useApi } from '../../../utils/api'
import Alert from '../../alerts'
const jwt = require('jsonwebtoken')
const { Option } = Select
export default function Overview () {
  const { register, handleSubmit, formState: { errors } } = useForm<ResidentType>()
  const [attendingPhysician, setAttending] = useState('')
  const [additional, setAdditional] = useState('')
  const [loading, setLoading] = useState(false)
  const [messaging, setMessaging] = useState('')
  const tokens = localStorage.getItem(welinkTokens.userToken) || null
  const decoded = jwt.decode(tokens)
  const [success, setSuccess] = useState(false)
  const { id } = decoded
  const children = []
  children.push(<Option value="" key="1" >Select</Option>)

  function handleChange (value:any) {
    setAdditional(value)
  }
  function handleAttending (value:any) {
    setAttending(value)
  }
  const registerResident = async (data:any) => {
    setLoading(true)
    try {
      const response = await useApi.residentRegiterRequest(
        data.firstName,
        data.lastName,
        data.residentSate,
        data.religion,
        data.maritialStatus,
        data.dateOfBirth,
        attendingPhysician,
        data.addedDate,
        additional,
        data.admittingPhysician,
        id
      )

      if (response === 'undefined') {
        setMessaging(response.message)
        setLoading(false)
        setSuccess(true)
      }
      setTimeout(() => {
        setMessaging(response.message)
        setSuccess(true)
        setLoading(false)
      }, 2000)
    } catch (error) {
      setMessaging('new resident can not be added')
      setSuccess(false)
      setLoading(false)
    }
  }

  return (
        <>
         <div className="p-4 bg-white rounded-xl shadows-xl mx-4">
          <Alert message={messaging} success={success}/>
           <form onSubmit={handleSubmit((data) => registerResident(data))}>
    <div className="grid md:grid-cols-2 gap-4">
          <div className="p-2">
            <label className="text-md">Firstname</label>
            <input type="text" {...register('firstName', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.firstName && errors.firstName.message}</span>
          </div>
          <div className="p-2">
            <label>Lastname</label>
            <input type="text" {...register('lastName', { required: 'This field is  required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.lastName && errors.lastName.message}</span>
          </div>
          <div className="p-2">
            <label>Resident State</label>
            <select {...register('residentSate')}className="w-full p-2 border">
              <option value="Newyork">Newyork</option>
              <option value="Antlanta">Atlanta</option>
              <option value="Maine">Maine</option>
              <option value="Texas">Texas</option>
              <option value="Georgia">Georgia</option>
              <option value="Massachussets">Massachussets</option>
            </select>
          </div>
          <div className="p-2">
            <label> Religion</label>
            <input type="text" {...register('religion')} className="w-full p-2 border" />
          </div>
          <div className="p-2">
            <label>Maritial Status</label>
            <select {...register('maritialStatus')} className="w-full p-2 border">
              <option>Select here</option>
              <option value="Single">Single</option>
              <option value="Divorced">Divorced</option>
              <option value="Married">Married</option>
              <option value="None of Above">None of above</option>
            </select>
          </div>
          <div className="p-2">
            <label>Date of Birth</label>
            <input type="date" {...register('dateOfBirth')} name="" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Attending Physician</label>
            <Select mode="tags" style={{ width: '100%' }} placeholder="Attending Physician" onChange={handleAttending}>
    {children}
  </Select>
          </div>
          <div className="p-2">
            <label>Added Date</label>
            <input type="date" {...register('addedDate')} className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Additional Physician</label>
            <Select
      mode="tags"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['Aron10']}
      onChange={handleChange}
    >
      {children}
    </Select>
          </div>
          <div className="p-2">
            <label>Admitting Physician</label>
            <input type="text" {...register('admittingPhysician')} className="w-full p-2 border"/>
          </div>
          <div className="mb-4">
             {loading ? <span className='px-8 bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500'>Adding.....</span> : <input type="submit" value="Add Resident" className="bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />}
          </div>
        </div>
        </form>
      </div>
        </>
  )
}
