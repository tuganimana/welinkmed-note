// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Tabs, Select } from 'antd'
import { useForm } from 'react-hook-form'
import { OrderType } from '../../../utils/types'
import { welinkTokens } from '../../../utils/enums'
import { useApi } from '../../../utils/api'
import Sig from './editsig'
import Routofadmin from './routofadmin'
import Alert from '../../alerts'
const jwt = require('jsonwebtoken')
const { TabPane } = Tabs
const { Option } = Select
export default function Orderdetail () {
  const callback = (key:any) => {
    console.log(key)
  }
  const recent = [
    {
      sign: 'Anne Marly',
      admin: 'bench',
      instruction: '19',
      status: 'Male',
      approval: 'Bench',
      source: '17th'
    }
  ]
  const children = []
  children.push(<Option value="" key="1" >Select</Option>)
  const [Physician, setAttending] = useState('')
  const [loading, setLoading] = useState(false)
  const [messaging, setMessaging] = useState('')
  function handleAttending (value:any) {
    setAttending(value)
  }
  const { register, handleSubmit, formState: { errors } } = useForm<OrderType>()
  const tokens = localStorage.getItem(welinkTokens.userToken) || null
  const decoded = jwt.decode(tokens)
  const { id } = decoded
  const CreateOrder = async (data:any) => {
    setLoading(true)
    try {
      const response = await useApi.OrderCreate(
        data.routineMedOrder,
        data.orderType,
        data.description,
        data.generic,
        Physician,
        data.orderStatus,
        data.lastRefill,
        data.rxNumber,
        data.ndc,
        data.externalId,
        data.previousId,
        data.barcode,
        id
      )
      if (response === 'undefined') {
        setMessaging(response.message)
        setLoading(false)
      }
      setTimeout(() => {
        setMessaging(response.message)
        setLoading(false)
      }, 2000)
    } catch (error) {
      setMessaging('new order can not be added')
      setLoading(false)
    }
  }
  return (
    <>
    <div className="px-2 py-2">
    <h5 className="font-semibold text-blue-400 mt-4 text-2xl">Order Maintenance<span className="text-sm font-normal text-gray-400"> / Castro, Jennifer</span></h5>
       </div>
    <div className="mx-4">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Order Detail" key="1">
      <form onSubmit={handleSubmit((data) => CreateOrder(data))}>
        <div className="p-4 mb-14 bg-white rounded-xl shadows-xl mx-4">
        <Alert message={messaging}/>
         <div className="grid md:grid-cols-2 gap-4">
    <div className="p-2">
            <label className="text-md">Routine Med Order</label>
            <input type="text" {...register('routineMedOrder', { required: '* This field is required' })}className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.routineMedOrder && errors.routineMedOrder.message}</span>
          </div>
      <div className="p-2">
            <label>Ordered Type (required)</label>
            <select {...register('orderType')} className="w-full p-2 border">
              <option>Select here</option>
              <option>Medication</option>
              <option>Non-Facility Administrede</option>
              <option>Oter</option>
              <option>Treatement</option>
              <option>Resident Co-Sign</option>
            </select>
          </div>
          <div className="p-2">
            <label className="text-md">Description</label>
            <input type="text" {...register('description', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.description && errors.description.message}</span>
          </div>
          <div className="p-2">
            <label>Generic (Optional)</label>
            <input type="text" {...register('generic', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.generic && errors.generic.message}</span>
          </div>
          <div className="p-2">
            <label>Rout Of Administration ( Required)</label>
            <Routofadmin/>
          </div>
        <div className="p-2">
          <label>Physician( Required)</label>
          <Select mode="tags" style={{ width: '100%' }} placeholder="Attending Physician" onChange={handleAttending}>
    {children}
  </Select>
        </div>
          <div className="p-2">
            <label>Order Status (Required)</label>
            <select {...register('orderStatus')} className="w-full p-2 borderl">
              <option>Select here</option>
              <option>Active</option>
              <option>DCd</option>
            </select>
          </div>
          <div className="p-2">
            <label>Last Refill Request</label>
            <input type="text" {...register('lastRefill', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.lastRefill && errors.lastRefill.message}</span>
          </div>
          <div className="p-2">
            <label>RX Number(optional)</label>
            <input type="text" {...register('rxNumber', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.rxNumber && errors.rxNumber.message}</span>
          </div>
          <div className="p-2">
            <label>NDC</label>
            <input type="text" {...register('ndc', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.ndc && errors.ndc.message}</span>
          </div>
          <div className="p-2">
            <label>External ID</label>
            <input type="text" {...register('externalId', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.externalId && errors.externalId.message}</span>
          </div>
          <div className="p-2">
            <label>Previos ID</label>
            <input type="text" {...register('previousId', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.previousId && errors.previousId.message}</span>
          </div>
          <div className="p-2">
            <label>Barcode Can be Scanned</label>
            <select {...register('barcode')} className="w-full p-2 borderl">
              <option>Select here</option>
              <option>Active</option>
              <option>DCd</option>
            </select>
          </div>
          </div>
          <div className="p-2">
          {loading ? <span className='px-8 bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500'>Adding.....</span> : <input type="submit" value="Add Order" className="bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />}
          </div>
      </div>
      </form>
    </TabPane>
    <TabPane tab="Add Sig" key="2">
    <div>
    <div className=""><Sig/></div>
    <table className="rounded-t-lg w-full mx-auto bg-gray-200 text-gray-800">
      <tr className="text-left border-b-2 border-blue-300">
        <th className="px-4 py-3">Sig#</th>
        <th className="px-4 py-3">Admin Type</th>
        <th className="px-4 py-3">Instructions</th>
        <th className="px-4 py-3">Status</th>
        <th className="px-4 py-3">Aproval Status</th>
        <th className="px-4 py-3">Source</th>
        <th className="px-4 py-3"></th>
      </tr>
      {
    recent.map((items:any, index) => (
      <tr key={index} className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
        <td className="px-4 py-3">{items.sign}</td>
        <td className="px-4 py-3">{items.admin}</td>
        <td className="px-4 py-3">{items.instruction}</td>
        <td className="px-4 py-3">{items.status}</td>
        <td className="px-4 py-3">{items.approval}</td>
        <td className="px-4 py-3">{items.source}</td>
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
