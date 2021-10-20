// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Tabs, Select, Spin } from 'antd'
import Sig from './editsig'
import { api } from '../../../utils/apiRequest'

// import { MedicationType } from '../../../utils/types'
// import { useHistory } from 'react-router-dom'
import { welinkTokens, backEndPoints } from '../../../utils/enums'
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
  // const history = useHistory()

  const [loading, setLoading] = useState(false)
  const [medication, setMedication] = useState([])

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const userId = localStorage.getItem(welinkTokens.userID) || null
      const urlPath = `${backEndPoints.EXPIRED_ORDERS}/${userId}`
      const response = await api.get(urlPath)
      if (response.status === 201) {
        setLoading(false)
        setMedication(response.data.data)
      }
    }
    getData()
  }, [])

  if (loading) return (<><div className='justify-center mt-64 mx-auto items-center text-center'><Spin tip='Fetching.....'/></div></>)
  return (
    <>
    <div className="px-2 py-2">
    <h5 className="font-semibold text-blue-400 mt-4 text-2xl">Expired orders<span className="text-sm font-normal text-gray-400"> / Castro, Jennifer</span></h5>
       </div>
    <div className="mx-4">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Medication Due" key="1">
      <div className="p-4 mb-14 bg-white rounded-xl shadows-xl mx-4">
         <div className="grid md:grid-cols-3 gap-3">
          {medication.length > 0
            ? medication.map((items:any, index) => {
              console.log(items.residentid.firstName)
              return (
              <div key={index} className="p-2 rounded-3xl shadow-xl">
                 <div className="flex flex-wrap rounded-r-3xl ">
                   <div className="bg-green-200 flex justify-center p-8 w-1/3">
                   <img className="h-full round" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/000000/external-medication-medical-kiranshastry-lineal-color-kiranshastry.png"/>
                     </div>
<div className="w-2/3">
  <p className="p-2">{items.residentid.firstName} {items.residentid.lastName}</p>
</div>
                   </div>
              </div>
              )
            })
            : <div>
              No data found!
              </div>}

         </div>
      </div>
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
