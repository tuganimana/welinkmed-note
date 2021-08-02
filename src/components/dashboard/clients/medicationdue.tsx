// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Tabs, Select } from 'antd'
import Sig from './editsig'
import { useApi } from '../../../utils/api'
import { MedicationType } from '../../../utils/types'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { frontEndPoints } from '../../../utils/enums'
import Alert from '../../alerts'
const { TabPane } = Tabs
const { Option } = Select

export default function Medicationdue () {
  const callback = (key:any) => {
    console.log(key)
  }
  const children = []
  for (let i = 10; i < 36; i++) {
    children.push(<Option value={i.toString(36) + i} key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
  }

  function handleChange (value:any) {
    console.log(`selected ${value}`)
  }
  const recent = [
    {
      nameMedication: 'parastemol',
      typesMedication: 'bench',
      dosage: '3',
      physician: 'peter',
      startDate: '13/11/2001',
      endDate: '17/12/2001'
    }
  ]
  const history = useHistory()
  const { register, handleSubmit, formState: { errors } } = useForm<MedicationType>()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrormessage] = useState('')
  const addMedication = async (data:any) => {
    setLoading(true)
    const medResponse = await useApi.medicationRequest(data.NameMedication, data.Dosage, data.MedicationType, data.StartDate, data.EndDate)
    const mymedication = medResponse?.token || 'undefined'
    console.log(medResponse)
    if (mymedication === 'undefined') {
      setErrormessage(medResponse.messages)
      setLoading(false)
    } else {
      setTimeout(() => {
        setLoading(false)
        history.push(frontEndPoints.MEDICATION)
        setErrormessage(medResponse.message)
      }, 2000)
    }
    //
  }
  return (
    <>
    <div className="px-2 py-2">
    <h5 className="font-semibold text-blue-400 mt-4 text-2xl">Medication Due<span className="text-sm font-normal text-gray-400"> / Castro, Jennifer</span></h5>
       </div>
    <div className="mx-4">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Medication Due" key="1">
    <Alert message={errorMessage}/>
      <form onSubmit={ handleSubmit((data) => { addMedication(data) })}>
    <div className="p-4 mb-14 bg-white rounded-xl shadows-xl mx-4">
    <div className="grid md:grid-cols-2 gap-4">
          <div className="p-2">
            <label className="text-md">Name of Medication</label>
            <input type="text" {...register('NameMedication', { required: 'This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.NameMedication && errors.NameMedication.message}</span>
          </div>
          <div className="p-2">
            <label>Types of Medication (Optional)</label>
            <select {...register('MedicationType', { required: false })} className="w-full p-2 borderl">
            <option>Select here</option>
              <option>Injection</option>
              <option>Tablets</option>
            </select>
          </div>
          <div className="p-2">
            <label>Dosage ( Required)</label>
          <input type="text" {...register('Dosage', { required: 'This field is required' })} className="w-full p-2 border"/>
          <span className="text-red-600 text-xs">{errors.Dosage && errors.Dosage.message}</span>
          </div>
        <div className="p-2">
          <label>Physician( Required)</label>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['Doctor Seth']}
            onChange={handleChange}
          >
            {children}
          </Select>
        </div>
          <div className="p-2">
            <label>Start Date </label>
            <input type="date" {...register('StartDate', { required: 'This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.StartDate && errors.StartDate.message}</span>
          </div>
          <div className="p-2">
            <label>End Date</label>
            <input type="date" {...register('EndDate', { required: 'This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.EndDate && errors.EndDate.message}</span>
          </div>
          <div className="mb-4">
          {loading ? <span>Sending.....</span> : <input type="submit" value="SEND" className="bg-red-400 cursor-pointer appearance-none  rounded-full w-full py-2 px-4 ml-32 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />}
          </div>
        </div>
      </div>
      </form>
    </TabPane>
    <TabPane tab="Add Sig" key="2">
    <div>
    <div className=""><Sig/></div>
    <table className="rounded-t-lg w-full mx-auto bg-gray-200 text-gray-800">
      <tr className="text-left border-b-2 border-blue-300">
        <th className="px-4 py-3">Name of Medication</th>
        <th className="px-4 py-3">Types of Medication</th>
        <th className="px-4 py-3">Dosage</th>
        <th className="px-4 py-3">Physician</th>
        <th className="px-4 py-3">Start Date</th>
        <th className="px-4 py-3">End Date</th>
      </tr>
      {
    recent.map((items:any, index) => (
      <tr key={index} className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
        <td className="px-4 py-3">{items.nameMedication}</td>
        <td className="px-4 py-3">{items.typesMedication}</td>
        <td className="px-4 py-3">{items.dosage}</td>
        <td className="px-4 py-3">{items.physician}</td>
        <td className="px-4 py-3">{items.startDate}</td>
        <td className="px-4 py-3">{items.endDate}</td>
        <td className="px-4 py-3"><button className="bg-blue-400 hover:bg-blue-500 p-2 rounded-lg">Review</button> <button className="bg-blue-400 hover:bg-blue-500 p-2 rounded-lg">Recent Admins</button></td>
      </tr>))
      }
    </table>
    </div>
    </TabPane>
  </Tabs>
    </div>
    </>
  )
}
