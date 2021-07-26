// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Tabs, Select } from 'antd'
import Sig from './editsig'
import Routofadmin from './routofadmin'
const { TabPane } = Tabs
const { Option } = Select
export default function Orderdetail () {
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
      sign: 'Anne Marly',
      admin: 'bench',
      instruction: '19',
      status: 'Male',
      approval: 'Bench',
      source: '17th'
    }
  ]

  return (
    <>
    <div className="px-2 py-2">
    <h5 className="font-semibold text-blue-400 mt-4 text-2xl">Order Maintenance<span className="text-sm font-normal text-gray-400"> / Castro, Jennifer</span></h5>
       </div>
    <div className="mx-4">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Order Detail" key="1">
      <form action="">
        <div className="p-4 mb-14 bg-white rounded-xl shadows-xl mx-4">
    <div className="grid md:grid-cols-2 gap-4">
    <div className="p-2">
            <label className="text-md">Routine Med Order</label>
            <input type="text" name="" className="w-full p-2 border"/>
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
          <div className="p-2">
            <label className="text-md">Description</label>
            <input type="text" name="" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Generic (Optional)</label>
            <input type="text" name="" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Rout Of Administration ( Required)</label>
            <Routofadmin/>
          </div>
        <div className="p-2">
          <label>Physician( Required)</label>
          <Select
            mode="multiple"
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
            <label>Order Status (Required)</label>
            <select className="w-full p-2 borderl">
              <option>Select here</option>
              <option>Active</option>
              <option>DCd</option>
            </select>
          </div>
          <div className="p-2">
            <label>Last Refill Request</label>
            <input type="text" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>RX Number(optional)</label>
            <input type="text" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>NDC</label>
            <input type="text" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>External ID</label>
            <input type="text" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Previos ID</label>
            <input type="text" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Barcode Can be Scanned</label>
            <select className="w-full p-2 borderl">
              <option>Select here</option>
              <option>Active</option>
              <option>DCd</option>
            </select>
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
