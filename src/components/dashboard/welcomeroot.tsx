// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import PieChart from './charts/Chart'
import { backEndPoints, frontEndPoints, welinkTokens } from '../../utils/enums'
import { api } from '../../utils/apiRequest'

export default function WelcomeRoot () {
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
        <div className="flex flex-wrap">
          <div className="lg:w-4/6 w-full p-2 grid">
            <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
        </div>
            </div>
            <div className="mb-4 bg-gray-200 rounded-xl mx-2 ">
              <div className="grid  md:grid-cols-3 gap-4 p-3">
              <a href={frontEndPoints.ROOT_ADMINDETAILS}>
                <div className="p-3 bg-blue-400 text-gray-600 flex flex-wrap  text-center font-bold rounded-xl shadow">
                  <i className="fa fa-users text-white ml-20 text-3xl rounded-lg p-2"></i>
                  <div className="w-full bg-white hover:bg-gray-200 rounded-full shadow-xl p-2 items-center">
                     <span className="text-center items-center">Administrators</span>
                  </div>
                </div>
              </a>
              <a href={frontEndPoints.ROOT_ADMINDETAILS}>
                <div className="p-3 bg-green-500 text-gray-600 flex flex-wrap  text-center font-bold rounded-xl shadow">
                  <i className="fa fa-user-plus text-white ml-20 text-3xl rounded-lg p-2"></i>
                  <div className="w-full bg-white hover:bg-gray-200 rounded-full shadow-xl p-2 items-center">
                     <span className="text-center items-center">Add Resident</span>
                  </div>
                </div>
              </a>
              <a href={frontEndPoints.ROOT_ADMINDETAILS}>
                <div className="p-3 bg-indigo-300 text-gray-600 flex flex-wrap  text-center font-bold rounded-xl shadow">
                  <i className="fa fa-file-text text-white ml-20 text-3xl font-bold rounded-lg p-2"></i>
                  <div className="w-full bg-white hover:bg-gray-200 rounded-full shadow-xl p-2 items-center">
                     <span className="text-center items-center ">Report</span>
                  </div>
                </div>
              </a>
              <a href={frontEndPoints.ROOT_ADMINDETAILS}>
                <div className="p-3 bg-yellow-400 text-gray-600 flex flex-wrap text-center font-bold rounded-xl shadow">
                  <i className="fa fa-credit-card text-white ml-20 text-3xl font-bold rounded-lg p-2"></i>
                  <div className="w-full bg-white hover:bg-gray-200 rounded-full shadow-xl p-2 items-center">
                     <span className="text-center items-center">Payments</span>
                  </div>
                </div>
              </a>
              </div>
            </div>
            <div className="mb-4 bg-white rounded-xl mx-2 p-3">
              <div className="py-2">
              <span className="font-bold">Latest Payments</span>
              </div>
              <table className="table-auto rounded-t-xl  bg-blue-200 text-gray-800">
                <tr className="text-left  border-b-2 border-blue-300">
                  <th className="px-4 py-3">Organization</th>
                  <th className="px-4 py-3">Resident</th>
                  <th className="px-4 py-3">Order</th>
                  <th className="px-4 py-3">Payment Method</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
                  <td className="px-4 py-3">Bench</td>
                  <td className="px-4 py-3">philbert</td>
                  <td className="px-4 py-3">Routin Az</td>
                  <td className="px-4 py-3">Online Banking</td>
                  <td className="px-4 py-3">49$</td>
                  <td className="px-4 py-3">17/5/2020</td>
                  <td className="px-4 py-3"><span className="bg-green-400 px-2 py-1 rounded-full font-bold text-gray-100">Approved</span></td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
                  <td className="px-4 py-3">Ida Homes</td>
                  <td className="px-4 py-3">Linca</td>
                  <td className="px-4 py-3">par Az</td>
                  <td className="px-4 py-3">Banking</td>
                  <td className="px-4 py-3">20$</td>
                  <td className="px-4 py-3">12/5/2021</td>
                  <td className="px-4 py-3"><span className="bg-red-400 px-2 py-1 rounded-full font-bold text-gray-100">None</span></td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
                  <td className="px-4 py-3">Welink</td>
                  <td className="px-4 py-3">dinne</td>
                  <td className="px-4 py-3">Whites Az</td>
                  <td className="px-4 py-3">Bank</td>
                  <td className="px-4 py-3">49$</td>
                  <td className="px-4 py-3">17/5/2020</td>
                  <td className="px-4 py-3"><span className="bg-red-400 px-2 py-1 rounded-full font-bold text-gray-100">None</span></td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
                  <td className="px-4 py-3">First Step</td>
                  <td className="px-4 py-3">Kenny</td>
                  <td className="px-4 py-3">Sympot ks</td>
                  <td className="px-4 py-3">Online Banking</td>
                  <td className="px-4 py-3">49$</td>
                  <td className="px-4 py-3">17/5/2020</td>
                  <td className="px-4 py-3"><span className="bg-green-400 px-2 py-1 rounded-full font-bold text-gray-100">Approved</span></td>
                </tr>
              </table>
            </div>
          </div>
          <div className="lg:w-2/6 w-full bg-white rounded-lg p-4  md:mt-16 mt-4 grid">
            <div className="p-1">
              <span className="font-bold">General Stracture</span>
              <div className="align-center item-center text-center">
              <PieChart due={due} expired={expired} />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex flex-wrap p-1 border-red-300 border-b-2 rounded-2xl">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-bar-chart text-4xl text-red-300"></i></span>
                </div>
                <div className="w-2/4 p-2 grid">
                  <span className="font-bold text-lg text-gray-600">Missed Orders</span>
                  <span className="font-bold text-xs text-red-300">12%</span>
                </div>
                <div className="w-1/4 "><span className="font-bold bg-green-300 rounded-br-3xl text-xs text-gray-800 rounded-tl-3xl float-right px-4 py-1">Activated</span></div>
              </div>
              <div className="flex flex-wrap p-1 border-green-400 border-b-2 rounded-2xl">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-bar-chart text-4xl text-green-400"></i></span>
                </div>
                <div className="w-2/4 p-2 grid">
                  <span className="font-bold text-lg text-gray-600">Recieved Orders</span>
                  <span className="font-bold text-xs text-green-400">48%</span>
                </div>
                <div className="w-1/4 "><span className="font-bold bg-yellow-200 rounded-br-3xl text-xs text-gray-800 rounded-tl-3xl float-right px-4 py-1">None</span></div>
              </div>
              <div className="flex flex-wrap p-1 border-blue-300 border-b-2 rounded-2xl">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-bar-chart text-4xl text-blue-400"></i></span>
                </div>
                <div className="w-2/4 p-2 grid">
                  <span className="font-bold text-lg text-gray-600">On Date</span>
                  <span className="font-bold text-xs text-blue-400">40%</span>
                </div>
                <div className="w-1/4 "><span className="font-bold bg-yellow-200 rounded-br-3xl text-xs text-gray-800 rounded-tl-3xl float-right px-4 py-1">None</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
