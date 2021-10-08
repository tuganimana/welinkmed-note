// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Modal, Tabs, Select } from 'antd'
// import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { useForm } from 'react-hook-form'
import { OrderType } from '../../../utils/types'
import { welinkTokens } from '../../../utils/enums'
import { useApi } from '../../../utils/api'
import Sig from './editsig'
import Allorders from './orderall'
import Alert from '../../alerts'
import { useParams } from 'react-router-dom'
const { TabPane } = Tabs
const { Option } = Select
export default function Orderdetail () {
  const { residentid } : any = useParams()
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [orders, setOrders] = useState([])
  const [week, setWeek] = useState('')
  useEffect(() => {
    const callOrder = async () => {
      const response = await useApi.AllOrderRequest()
      if (response) {
        setOrders(response.data)
        console.log(orders.length)
      }
    }
    callOrder()
  }, [])
  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const callback = (key:any) => {
    console.log(key)
  }

  function handleChangeweek (value: any) {
    setWeek(value)
  }
  const children = []
  children.push(<Option value="" key="1" >Select</Option>)
  const [Physician, setAttending] = useState('')
  const [loading, setLoading] = useState(false)
  const [messaging, setMessaging] = useState('')
  const [month, setMonth] = useState('')
  const [dates, setDates] = useState('')
  const [program, setProgram] = useState('')
  function handleAttending (value:any) {
    setAttending(value)
  }
  function handleChange (value: any) {
    setMonth(value)
  }
  function handleChangeDate (value: any) {
    setDates(value)
  }
  const { register, handleSubmit, formState: { errors } } = useForm<OrderType>()
  const userId = localStorage.getItem(welinkTokens.userID) || ''
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
        data.administrationType,
        data.startDate,
        data.endDate,
        program,
        month,
        week,
        dates,
        data.dose,
        data.dosePerday,
        data.morningTimes,
        data.noonTimes,
        data.nightTimes,
        data.timesPerday,
        userId,
        residentid
      )
      console.log(response)
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
    <h5 className="font-semibold text-blue-400 mt-4 text-2xl">Order Maintenance<span className="text-sm font-normal text-gray-400"></span></h5>
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
            <label>Routine Of Administration ( Required)</label><br/>
          </div>
        <div className="p-2">
          <label>Physician( Required)</label>
          <input type="text" className="w-full p-2 border" placeholder="Attending Physician" onChange={handleAttending} />
        </div>
          <div className="p-2">
            <label>Order Status (Required)</label>
            <select {...register('orderStatus')} className="w-full p-2 borderl">
              <option>Select here</option>
              <option>Active</option>
              <option>DCD</option>
            </select>
          </div>
          <div className="p-2">
            <label>Last Refill Request</label>
            <input type="text" {...register('lastRefill', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.lastRefill && errors.lastRefill.message}</span>
          </div>
          <div className="p-2">
            <label>RX Number(optional)</label>
            <input type="number" {...register('rxNumber', { required: '* This field is required' })} className="w-full p-2 border"/>
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
            <label>How to take an order </label><br/>
            <span onClick={() => setVisible(true)} className="bg-blue-200 p-2 mt-2  w-full">How to take medication</span>
            <Modal
            title="Routine of administrator"
            centered
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={() => setVisible(false)}
            width={1000}
          >
           <div className="grid md:grid-cols-2">
          <div className="p-2">
          <label>Administration Type</label>
          <select {...register('administrationType')} className="w-full p-2 border">
              <option>Route</option>
              <option>PRN</option>
            </select>
          </div>
          <div className="p-2">
            <label>Start Date</label><br/>
            <input type="date" {...register('startDate')} className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>End Date</label><br/>
            <input type="date" {...register('endDate')} className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Program Administer</label><br/>
          <select onChange={(e:any) => setProgram(e.target.value)} className="w-full p-2 border">
              <option value="Monthly">Monthly</option>
              <option value="Weekly">Weekly</option>
              <option value="Daily">Daily</option>
            </select>
          </div>
          </div>
           <div className="grid md:grid-cols-2">
           {program === 'Weekly'
             ? <div className="p-2"><label>Week day</label><br/>
            <Select mode="tags" style={{ width: '100%' }} onChange={handleChangeweek} tokenSeparators={[',']}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </Select>
          </div>
             : <span></span>
             }
          {program === 'Monthly'
            ? <div className="p-2">

            <label>Select a month</label><br/>
            <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </Select>
          </div>
            : <span></span>}
          {program === 'Monthly'
            ? <div className="p-2"><label>Select a Date</label><br/>
            <Select mode="tags" style={{ width: '100%' }} onChange={handleChangeDate} tokenSeparators={[',']}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </Select>
          </div>
            : <span></span>
}

          </div>
          <div className="grid md:grid-cols-2">
          <div className="p-2">
          <label>Dose</label>
          <input type="number" {...register('dose', { required: '* This field is required' })} className="w-full p-2 border"/>
          <span className="text-red-600 text-xs">{errors.dose && errors.dose.message}</span>
         </div>
          <div className="p-2">
          <label>Dose Per day</label>
          <input type="number" {...register('dosePerday')} className="w-full p-2 border"/>
          <span className="text-red-600 text-xs">{errors.dosePerday && errors.dosePerday.message}</span>
        </div>
          <div className="p-2">
          <label>Morning Time</label>
          <input type="time" {...register('morningTimes')} className="w-full p-2 border"/>
          </div>
          <div className="p-2">
          <label>Noon Time</label>
          <input type="time" {...register('noonTimes')} className="w-full p-2 border"/>
          </div>
          <div className="p-2">
          <label>Night Time</label>
          <input type="time" {...register('nightTimes')} className="w-full p-2 border"/>

          </div>
          <div className="p-2">
          <label>Other time</label>
          <input type="time" {...register('timesPerday')} className="w-full p-2 border"/>

          </div>
          </div>
          </Modal>
          </div>
          <div className="p-2">
          {loading ? <span className='px-8 bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500'>Adding.....</span> : <input type="submit" value="Add Order" className="bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />}
          </div>
      </div>
      </form>
    </TabPane>
    <TabPane tab="All Orders" key="2">
    <div>
    <div className="">
      <Sig/>
      </div><br/>
    <Allorders />
    </div>
    </TabPane>
  </Tabs>
    </div>
    </>
  )
}
