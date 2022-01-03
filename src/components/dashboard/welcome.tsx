// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { UserAddOutlined } from '@ant-design/icons'
// import chart from '../../images/chart.png'
import PieChart from './charts/Chart'

import Residents from './admin/clients'
import { backEndPoints, frontEndPoints, welinkTokens } from '../../utils/enums'
import { api } from '../../utils/apiRequest'

export default function Welcome () {
  const [due, setDue] = useState(0)
  const [expired, setExpired] = useState(0)
  useEffect(() => {
    const getExpired = async () => {
      const userId = localStorage.getItem(welinkTokens.userID) || null
      const urlPath = `${backEndPoints.DUE_ORDERS}/${userId}`
      const response = await api.get(urlPath)

      setDue(response.data.data.length)
    }
    getExpired()
    const getData = async () => {
      const userId = localStorage.getItem(welinkTokens.userID) || null
      const urlPath = `${backEndPoints.EXPIRED_ORDERS}/${userId}`
      const response = await api.get(urlPath)
      setExpired(response.data.data.length)
    }
    getData()
  }, [])
  return (<>
      <div className="container p-4 md:mt-8">
        <div className="flex  flex-wrap">
          <div className="lg:w-4/6 w-full p-2 grid">
            <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
        </div>
            </div>
            <div className="mb-4 bg-white rounded-xl mx-2 ">
              <div className="grid  md:grid-cols-3 gap-4 p-3">
             <a href={frontEndPoints.USER_MAINTENANCE}><div className="p-3 bg-blue-200 text-gray-600 flex flex-wrap font-bold rounded-xl shadow">
                <div className="bg-white rounded-full h-8 w-8 items-center"><UserAddOutlined className="ml-2" /></div>
                <span className="inline-block mt-2 mx-3"> Add user</span>
                </div>
                </a>
                <a href={frontEndPoints.RESIDENT_ADD}><div className="p-3 bg-red-200 text-gray-600 flex flex-wrap font-bold rounded-xl shadow">
                <div className="bg-white rounded-full h-8 w-8 items-center"><UserAddOutlined className="ml-2" /></div>
                <span className="inline-block mt-2 mx-3"> Add residents</span>
                </div>
                </a>
                {/* <div className="p-3 bg-gray-200 text-gray-600 flex flex-wrap font-bold rounded-xl shadow">
                <div className="bg-white rounded-full h-8 w-8 items-center"><AreaChartOutlined className="ml-2" /></div>
                <span className="inline-block mt-2 mx-3"> Reports</span>
                </div>
                <div className="p-3 bg-blue-200 text-gray-600 flex flex-wrap font-bold rounded-xl shadow">
                <div className="bg-white rounded-full h-8 w-8 items-center"><DollarCircleOutlined size={40} className="ml-2" /></div>
                <span className="inline-block mt-2 mx-3"> Payments</span>
                </div> */}
              </div>
            </div>
            <div className="">
         <Residents/>
         </div>
          </div>
          <div className="lg:w-2/6 w-full bg-white rounded-lg p-4  md:mt-16 mt-4 grid">
            <div className="p-1">
              <span className="font-bold">General Structure</span>
              <div className="align-center item-center text-center">
              {/* <img src={chart} alt="" className="text-center align-cente"/> */}
              <PieChart due={due} expired={expired} />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex flex-wrap p-1 border-red-300 border-2 rounded-2xl">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-pie-chart text-4xl text-red-300"></i></span>
                </div>
                <div className="w-2/4 p-2 grid">
                  <span className="font-bold text-lg text-gray-600">Expired Orders</span>
                  <span className="font-bold text-xs text-red-300">Direct</span>
                </div>
                <div className="w-1/4 "><span className="font-bold float-right p-2">{expired}</span></div>
              </div>
              <div className="flex flex-wrap p-1 border-green-400 border-2 rounded-2xl">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-pie-chart text-4xl text-green-400"></i></span>
                </div>
                <div className="w-2/4 p-2 grid">
                  <span className="font-bold text-lg text-gray-600">Due Orders</span>
                  <span className="font-bold text-xs text-green-400">Direct</span>
                </div>
                <div className="w-1/4 "><span className="font-bold float-right p-2">{due}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
