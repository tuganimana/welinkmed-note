// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Modal } from 'antd'
import { useApi } from '../../../utils/api'

export default function Allorders () {
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }
  const [orders, setOrders] = useState([])
  useEffect(() => {
    useApi.AllOrderRequest().then((response) => {
      if (response) {
        setOrders(response.data)
      }
    })
      .catch((error) => {
        console.log(`${error}`)
      })
  }, [])
  return (
        <>
        <table className="rounded-t-lg table-auto  bg-gray-200 text-gray-800">
          <tr className="text-left border-b-2 border-blue-300">
            <th className="px-4 py-3">Action</th>
            <th className="px-4 py-3">Routine Med Order</th>
            <th className="px-4 py-3">Order Type</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Generic</th>
            <th className="px-4 py-3">Physicians</th>
            <th className="px-4 py-3">Order Status</th>
            <th className="px-4 py-3">Last Refill</th>
            <th className="px-4 py-3">rxNumber</th>
            <th className="px-4 py-3">ndc</th>
            <th className="px-4 py-3">External Id</th>
            <th className="px-4 py-3">Previous Id</th>
            <th className="px-4 py-3">Barcode</th>
            <th className="px-4 py-3">administrationType</th>
            <th className="px-4 py-3">startDate</th>
            <th className="px-4 py-3">endDate</th>
            <th className="px-4 py-3">programAdminster</th>
            <th className="px-4 py-3">dates</th>
            <th className="px-4 py-3">dose</th>
            <th className="px-4 py-3">dosePerday</th>
            <th className="px-4 py-3">timesPerday</th>
            <th className="px-4 py-3">addedby</th>
            <th className="px-4 py-3">month</th>
          </tr>
          {
        orders.map((items:any, index) => (
          <tr key={index} className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
            <td className="px-4 py-3">
            <button onClick={() => setVisible(true)} className="bg-blue-400 rounded p-2 w-full">Update</button>
           </td>
            <td className="px-4 py-3">{items.routineMedOrder}</td>
            <td className="px-4 py-3">{items.orderType}</td>
            <td className="px-4 py-3">{items.description}</td>
            <td className="px-4 py-3">{items.generic}</td>
            <td className="px-4 py-3">{items.physicians}</td>
            <td className="px-4 py-3">{items.orderStatus}</td>
            <td className="px-4 py-3">{items.lastRefill}</td>
            <td className="px-4 py-3">{items.rxNumber}</td>
            <td className="px-4 py-3">{items.ndc}</td>
            <td className="px-4 py-3">{items.externalId}</td>
            <td className="px-4 py-3">{items.previousId}</td>
            <td className="px-4 py-3">{items.barcode}</td>
            <td className="px-4 py-3">{items.administrationType}</td>
            <td className="px-4 py-3">{items.startDate}</td>
            <td className="px-4 py-3">{items.endDate}</td>
            <td className="px-4 py-3">{items.programAdminster}</td>
            <td className="px-4 py-3">{items.month}</td>
            <td className="px-4 py-3">{items.dates}</td>
            <td className="px-4 py-3">{items.dose}</td>
            <td className="px-4 py-3">{items.dosePerday}</td>
            <td className="px-4 py-3">{items.timesPerday}</td>
            <td className="px-4 py-3">{items.addedby}</td>
            </tr>))
          }
        </table>
        <Modal
            title="Update of Orders"
            centered
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={() => setVisible(false)}
            width={1000}
          ><div className="grid md:grid-cols-2 gap-4">
          <div className="p-2">
                  <label className="text-md">Routine Med Order</label>
                  <input type="text" className="w-full p-2 border"/>
                </div>
      <div className="p-2">
            <label>Ordered Type (required)</label>
            <select className="w-full p-2 border">
              <option>Select here</option>
              <option>Medication</option>
              <option>Non-Facility Administrede</option>
              <option>Oter</option>
              <option>Treatement</option>
              <option>Resident Co-Sign</option>
            </select>
          </div>
                </div>
          </Modal>
          </>
  )
}
