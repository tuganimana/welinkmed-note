// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Tabs, Select } from 'antd'
import Sig from './editsig'
const { TabPane } = Tabs
const { Option } = Select
export default function Orderedit () {
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
      status: 'Single',
      instruction: 'everyday',
      quantity: '19',
      statusLastUpdated: '14/11/2020',
      approved: '13/01/2021',
      dcApproved: '19/09/2021',
      administration: 'PRN',
      scheduleBegins: '13/01/2021',
      scheduleEnds: '1713/01/2021th',
      behaviour: 'slit',
      clinicalalerts: 'on',
      reason: 'patient security'
    }
  ]

  return (
    <>
    <div className="px-2 py-2">
    <h5 className="font-semibold text-blue-400 mt-4 text-2xl">Order Edit<span className="text-sm font-normal text-gray-400"> / Ryan, Brock</span></h5>
       </div>
    <div className="mx-4">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Order Detail" key="1">
    <div className="p-4 mb-14 bg-white rounded-xl shadows-xl mx-4">
    <div className="grid md:grid-cols-2 gap-4">
      <div className="p-2">
            <label>Status  (required)</label>
            <select className="w-full p-2 border">
              <option>Select here</option>
              <option>Active</option>
              <option>DCD</option>
            </select>
          </div>
          <div className="p-2">
            <label className="text-md">Instructions (required)</label>
            <input type="text" name="" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Quantity per Dose ( Required)</label>
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
            <label>Status last Updated</label>
            <input type="date" name="" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Approved On</label>
            <input type="date" name="" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>DC Approved On</label>
            <input type="date" name="" className="w-full p-2 border"/>
          </div>
        <div className="p-2">
          <label>Administration type( Required)</label>
          <select className="w-full p-2 border">
              <option>Select here</option>
              <option>Resume</option>
              <option>PRM</option>
            </select>
        </div><br></br>
          <div className="p-2">
          <h5>Schedule (required)</h5>
          <label>Begins </label>
            <input type="date" className="w-full p-2 border"/>
          </div>
          <div className="p-2 pt-8">
            <label>Ends</label>
            <input type="date" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Behaviours</label>
            <input type="text" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Clinical Alerts</label>
            <input type="text" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Reason for order</label>
            <input type="text" className="w-full p-2 border"/>
             </div>
        </div>
      </div>
    </TabPane>
    <TabPane tab="Add Sig" key="2">
    <div>
    <div className=""><Sig/></div>
    <table className="rounded-t-lg w-full mx-auto bg-gray-200 text-gray-800">
      <tr className="text-left border-b-2 border-blue-300">
        <th className="px-4 py-3">Status</th>
        <th className="px-4 py-3">Instructions</th>
        <th className="px-4 py-3">Quantity per Dose</th>
        <th className="px-4 py-3">Status last Updated</th>
        <th className="px-4 py-3">Approved On</th>
        <th className="px-4 py-3">DC Approved On</th>
        <th className="px-4 py-3">Quantity  Dose</th>
        <th className="px-4 py-3">Status last Updated</th>
        <th className="px-4 py-3">Approved On</th>
        <th className="px-4 py-3">DC Approved On</th>
        <th className="px-4 py-3">Schedule begins</th>
        <th className="px-4 py-3">Schedule ends</th>
        <th className="px-4 py-3">Clinical Alerts</th>
        <th className="px-4 py-3">Reason for order</th>
      </tr>
      {
    recent.map((items:any, index) => (
      <tr key={index} className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
        <td className="px-4 py-3">{items.sign}</td>
        <td className="px-4 py-3">{items.status}</td>
        <td className="px-4 py-3">{items.instruction}</td>
        <td className="px-4 py-3">{items.quantity}</td>
        <td className="px-4 py-3">{items.statusLastUpdated}</td>
        <td className="px-4 py-3">{items.approved}</td>
        <td className="px-4 py-3">{items.dcApproved}</td>
        <td className="px-4 py-3">{items.administration}</td>
        <td className="px-4 py-3">{items.scheduleBegins}</td>
        <td className="px-4 py-3">{items.scheduleEnds}</td>
        <td className="px-4 py-3">{items.behaviour}</td>
        <td className="px-4 py-3">{items.clinicalalerts}</td>
        <td className="px-4 py-3">{items.reason}</td>
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
