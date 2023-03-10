// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Modal, InputNumber, Space, Button, TimePicker, DatePicker, Form } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
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
           <div className="grid md:grid-cols-3">
           <div className="p-2">
            <label>Status(*required)</label>
            <select className="w-full p-2 border">
              <option>Select here</option>
              <option>Active</option>
              <option>DCd</option>
            </select>
          </div>
          <div className="p-2">
          <label>Administration Type</label>
          <select className="w-full p-2 border">
              <option>Route</option>
              <option>PRN</option>
            </select>
          </div>
          <div className="p-2">
          <Form.Item name="range-picker" label="Start to End date" {...rangeConfig}>
            <RangePicker />
          </Form.Item>
          </div>
          <div className="p-2">
          <label>Dose</label>
          <InputNumber min={1} max={100000} className="w-full p-1" defaultValue={1} />
          </div>
          <div className="p-2">
          <label>Quantity per Dose</label>
          <InputNumber min={1} max={100000} className="w-full p-1" defaultValue={1} />
          </div>
          <div className="p-2">
          <label>Dose Per day</label>
          <InputNumber min={1} max={100000} className="w-full p-1" defaultValue={1} />
          </div>
          <div className="p-2">
          <Form.Item name="time-picker" {...config}>
          <label>Times Per day</label> <br/>
          <TimePicker />
          </Form.Item>
          <Form.List name="dynamic_form_nest_item">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
              <Form.Item name="time-picker" {...config}>
              <label>Times Per day</label> <br/>
              <TimePicker />
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
          </div>
          </Modal>
          </Form>
        </>
  )
}
