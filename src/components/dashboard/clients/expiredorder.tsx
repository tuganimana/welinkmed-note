// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Tabs, Select, Spin } from 'antd'
import { api } from '../../../utils/apiRequest'

// import { MedicationType } from '../../../utils/types'
// import { useHistory } from 'react-router-dom'
import { welinkTokens, backEndPoints } from '../../../utils/enums'
const { TabPane } = Tabs
const { Option } = Select

export default function ExpiredOrderUser () {
  const callback = (key:any) => {
    console.log(key)
  }
  const children = []
  for (let i = 10; i < 36; i++) {
    children.push(<Option value={i.toString(36) + i} key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
  }

  // const history = useHistory()

  const [loading, setLoading] = useState(false)
  const [medication, setMedication] = useState([])

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const userId = localStorage.getItem(welinkTokens.organization) || null
      const urlPath = `${backEndPoints.EXPIRED_ORDERS}/${userId}`
      try {
        const response = await api.get(urlPath)
        if (response.data.data !== null) {
          setLoading(false)
          setMedication(response.data.data)
        }
      } catch (error) {
        setLoading(false)
      }
    }
    getData()
  }, [])

  if (loading) {
    return (<>
  <div className='justify-center mt-64 mx-auto items-center text-center'><Spin tip='Fetching.....'/></div></>)
  }
  return (
    <>
    <div className="px-2 py-2">
    <h5 className="font-semibold text-blue-400 mt-4 text-2xl">Expired orders<span className="text-sm font-normal text-gray-400"></span></h5>
       </div>
    <div className="mx-4">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Medication Due" key="1">
      <div className="p-4 mb-14 bg-white rounded-xl shadows-xl mx-4">
         <div className="grid md:grid-cols-3 gap-3">
          {medication.length > 0
            ? medication.map((items:any, index) => {
              return (
              <div key={index} className="p-2 rounded-3xl shadow-xl">
                 <div className="flex flex-wrap rounded-r-3xl ">
                   <div className="bg-green-200 rounded-l-3xl flex justify-center p-8 w-1/3">
                   <img className="h-full round" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/000000/external-medication-medical-kiranshastry-lineal-color-kiranshastry.png"/>
                     </div>
<div className="w-2/3">
  <p className="p-2 text-md text-gray-600 font-bold">
    {items.residentid.firstName} {items.residentid.lastName}</p>
    <p className="px-2">{items.orderType}</p>
    <p className="px-2">{items.residentid.residentSate}</p>
    <p className="px-2 mx-2 bg-red-300 text-center text-gray-100 rounded-full w-32">{items.endDate}</p>
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

  </Tabs>
    </div>
    </>
  )
}
