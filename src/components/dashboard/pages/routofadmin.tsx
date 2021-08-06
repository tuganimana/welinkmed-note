// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { RoutineAdminType } from '../../../utils/types'
import { useApi } from '../../../utils/api'
import { welinkTokens } from '../../../utils/enums'
import { Modal, InputNumber, Checkbox, Space, Button, TimePicker, DatePicker, Form } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import Alert from '../../alerts'
export default function Routofadmin () {
  const { RangePicker } = DatePicker
  const rangeConfig = {
    rules: [{ type: 'array' as const, required: true, message: 'Please select time!' }]
  }
  const config = {
    rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }]
  }
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }
  const MonthOptions = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const DateOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
  function onChange (checkedValues: any) {
    console.log('checked = ', checkedValues)
  }
  const { register, handleSubmit, formState: { errors } } = useForm<RoutineAdminType>()
  const [messaging, setMessaging] = useState('')
  const [loading, setLoading] = useState(false)
  const userId = localStorage.getItem(welinkTokens.userID) || ''
  const RoutineAdmnt = async (data:any) => {
    setLoading(true)
    try {
      const response = await useApi.RourineAdmin(
        data.administrationType,
        data.startDate,
        data.endDate,
        data.month,
        data.dates,
        data.dose,
        data.dosePerday,
        data.timesPerday,
        data.timesPerday,
        userId
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
          <Form >
          <input type="text" name="" onClick={() => setVisible(true)} className="w-full bg-gray-200 p-2 border"/>
          <Modal
            title="Rout of administrator"
            centered
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={() => setVisible(false)}
            width={1000}
          >
            <form onSubmit={handleSubmit((data) => RoutineAdmnt(data))}>
           <Alert message={messaging}/>
           <div className="grid md:grid-cols-2">
          <div className="p-2">
          <label>Administration Type</label>
          <select {...register('administrationType')} className="w-full p-2 border">
              <option>Route</option>
              <option>PRN</option>
            </select>
          </div>
          <div className="p-2">
          <Form.Item name="range-picker" label="Start to End date" {...rangeConfig}>
            <RangePicker />
          </Form.Item>
          </div>
          <div className="p-2"><label>Select a month</label><br/>
          <Checkbox.Group {...register('month')} className="bg-red-200 p-2 rounded text-blue-400 font-bold" options={MonthOptions} defaultValue={['Jan']} onChange={onChange} />
          </div>
          </div>
           <div className="grid md:grid-cols-1">
          <div className="p-2"><label>Select a Date</label><br/>
          <Checkbox.Group {...register('dates')} className="bg-red-200 p-2 rounded text-blue-400 font-bold" options={DateOptions} defaultValue={['Jan']} onChange={onChange} /></div>
          </div>
          <div className="grid md:grid-cols-3">
          <div className="p-2">
          <label>Dose</label>
          <InputNumber {...register('dose', { required: '* This field is required' })} min={1} max={100000} className="w-full p-1" defaultValue={1} />
          <span className="text-red-600 text-xs">{errors.dose && errors.dose.message}</span>
         </div>
          <div className="p-2">
          <label>Dose Per day</label>
          <InputNumber {...register('dosePerday')} min={1} max={100000} className="w-full p-1" defaultValue={1} />
          </div>
          <div className="p-2">
          <Form.Item name="time-picker" {...config}>
          <label>Times Per day</label> <br/>
          <TimePicker {...register('timesPerday')} />
          </Form.Item>
          <Form.List name="dynamic_form_nest_item">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
              <Form.Item name="time-picker" {...config}>
              <label>Times Per day</label> <br/>
               <TimePicker {...register('timesPerday')} />
              </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add New Time field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
          </div>
          <div className="p-2">
          {loading ? <span className='px-8 bg-blue-400 cursor-pointer appearance-none  rounded w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-blue-400 focus:border-green-500'>Adding.....</span> : <input type="submit" value="Add Order" className="bg-blue-400 cursor-pointer appearance-none  rounded w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-blue-500" />}
          </div>
          </div>
          </form>
          </Modal>
          </Form>
        </>
  )
}
