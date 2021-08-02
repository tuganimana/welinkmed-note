// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Modal, Button, InputNumber } from 'antd'

export default function Sig () {
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
          <Button type="primary" onClick={() => setVisible(true)}>
            Edit sig
          </Button>
          <Modal
            title="Edit Sig"
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
          <label>Quantity per Dose</label>
          <InputNumber min={1} max={100000} className="w-full p-1" defaultValue={1} />
          </div>
          <div className="p-2">
          <label>Administration Type</label>
          <select className="w-full p-2 border">
              <option>Route</option>
              <option>PRN</option>
            </select>
          </div>
               </div>
          </Modal>
        </>
  )
}
