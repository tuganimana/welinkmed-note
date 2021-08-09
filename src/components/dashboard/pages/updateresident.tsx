// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Select, Spin } from 'antd'
import { useForm } from 'react-hook-form'
import { ResidentType } from '../../../utils/types'
import { welinkTokens } from '../../../utils/enums'
import { useApi } from '../../../utils/api'
import Alert from '../../alerts'
import { useParams } from 'react-router-dom'
const jwt = require('jsonwebtoken')
const { Option } = Select
export default function Editresidents () {
  const { residentid } : any = useParams()
  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, formState: { errors } } = useForm<ResidentType>()
  const [attendingPhysician, setAttending] = useState('')
  const [additional, setAdditional] = useState('')
  const [loading, setLoading] = useState(false)
  const [messaging, setMessaging] = useState('')
  const tokens = localStorage.getItem(welinkTokens.userToken) || null
  const decoded = jwt.decode(tokens)
  const { id } = decoded
  function handleChange (value:any) {
    setAdditional(value)
  }
  function handleAttending (value:any) {
    setAttending(value)
  }
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [residentState, setResidentState] = useState('')
  const [religion, setReligion] = useState('')
  const [martialStatus, setMartialStatus] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [physician, setPhysician] = useState('')
  const [addedDate, setAddedDate] = useState('')
  const [admittingphysician, setAdmittingPhysician] = useState('')
  useEffect(() => {
    setLoading(true)
    useApi.getSingleresident(`/${residentid}`)
      .then((res:any) => {
        if (res) {
          setLoading(false)
          setFirstname(res.data.firstName)
          setLastname(res.data.lastName)
          setResidentState(res.data.residentSate)
          setReligion(res.data.religion)
          setMartialStatus(res.data.martialStatus)
          setDateOfBirth(res.data.dateOfBirth)
          setPhysician(res.data.physician)
          setAddedDate(res.data.addedDate)
          setAdmittingPhysician(res.data.admittingPhysician)
        }
        setLoading(false)
      })
      .catch((error) => {
        console.log(`${error}`)
      })
  }, [])
  const children = []
  children.push(<Option value={physician} key="1" >{physician}</Option>)

  const registerResident = async (data:any) => {
    setLoading(true)
    try {
      const response = await useApi.residentUpdateRequest(
        firstname,
        lastname,
        data.residentSate,
        data.religion,
        data.maritialStatus,
        data.dateOfBirth,
        attendingPhysician,
        data.addedDate,
        additional,
        data.admittingPhysician,
        id,
        `/${residentid}`
      )
      console.log(response)
      if (response === 'undefined') {
        setMessaging('Failed')
        setLoading(false)
      }
      setTimeout(() => {
        setMessaging('Update failed')
        setLoading(false)
      }, 2000)
    } catch (error) {
      setMessaging('new resident can not be added')
      setLoading(false)
    }
  }
  if (loading) return (<><div className='justify-center mt-64 mx-auto items-center text-center'><Spin tip='Fetching.....'/></div></>)
  return (
        <>
         <div className="p-4 bg-white rounded-xl shadows-xl mx-4">
          <Alert message={messaging}/>
           <form onSubmit={handleSubmit((data) => registerResident(data))}>
    <div className="grid md:grid-cols-2 gap-4">
          <div className="p-2">
            <label className="text-md">Firstname</label>
            <input type="text" value={firstname} onChange={(e:any) => setFirstname(e.target.value)} className="w-full p-2 border"/>

          </div>
          <div className="p-2">
            <label>Lastname</label>
            <input type="text" value={lastname} onChange={(e:any) => setLastname(e.target.value)} className="w-full p-2 border"/>

          </div>
          <div className="p-2">
            <label>Resident State</label>
            <select {...register('residentSate')}className="w-full p-2 border">
              <option value={residentState}>{residentState}</option>
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
            <input type="text" value={religion} {...register('religion')} className="w-full p-2 border" />
          </div>
          <div className="p-2">
            <label>Maritial Status</label>
            <select {...register('maritialStatus')} className="w-full p-2 border">
              <option value={martialStatus}>{martialStatus}</option>
              <option value="Single">Single</option>
              <option value="Divorced">Divorced</option>
              <option value="Married">Married</option>
              <option value="None of Above">None of above</option>
            </select>
          </div>
          <div className="p-2">
            <label>Date of Birth</label>
            <input type="date" value={dateOfBirth} {...register('dateOfBirth')} name="" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Attending Physician</label>
            <Select mode="tags" style={{ width: '100%' }} placeholder="Attending Physician" onChange={handleAttending}>
    {children}
  </Select>
          </div>
          <div className="p-2">
            <label>Added Date</label>
            <input type="date" value={addedDate} {...register('addedDate')} className="w-full p-2 border"/>
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
            <input type="text" value={admittingphysician} {...register('admittingPhysician')} className="w-full p-2 border"/>
          </div>
          <div className="mb-4">
             {loading ? <span className='px-8 bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500'>Updating.....</span> : <input type="submit" value="Update Resident" className="bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />}
          </div>
        </div>
        </form>
      </div>
        </>
  )
}
