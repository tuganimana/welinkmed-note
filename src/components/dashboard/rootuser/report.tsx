// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Tabs, Select, Modal, Button } from 'antd'
import { useApi } from '../../../utils/api'
import { backEndPoints, welinkTokens } from '../../../utils/enums'
import { api } from '../../../utils/apiRequest'
import PieChart from './../charts/Chart'
import Residents from './report/resident'
import Users from './report/user'
const { Option } = Select
const { TabPane } = Tabs
export default function PaymentsRoot () {
  const [ModalVisible, setModalVisible] = useState(false)
  const showModalClient = () => {
    setModalVisible(true)
  }
  const handleOky = () => {
    setModalVisible(false)
  }
  const handleCancl = () => {
    setModalVisible(false)
  }
  const [OrgModalVisible, setOrgModalVisible] = useState(false)
  const showModalOrg = () => {
    setOrgModalVisible(true)
  }
  const handleOkye = () => {
    setOrgModalVisible(false)
  }
  const handleCancle = () => {
    setOrgModalVisible(false)
  }
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
  const [userData, setUserData] = useState([])

  const callback = (key:any) => {
    console.log(key)
  }
  const children = []
  children.push(<Option value="" key="1" >Select</Option>)

  useEffect(() => {
    useApi.getAllUser().then((response) => {
      console.log(response)
      if (response) {
        setUserData(response.data)
      }
      console.log(userData)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  const PaymentReq = [
    {
      routine: 'Paracotitamor',
      freq: 'fr31'
    }
  ]
  return (
    <>
    <div className="px-2 py-2">
      <h5 className="font-semibold px-4">Report</h5>
    </div>
    <div className="mx-8">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="General Report" className="" key="1">
        <div className="flex flex-wrap">
            <div className="sm:w-2/6 md:w-2/6 w-full">
            <div className="mb-4 bg-white rounded-xl mx-2 p-3">
              <div className="py-2">
              <span className="font-bold text-gray-600">Med Order Structure</span>
              </div>
               <PieChart due={due} expired={expired} />
            </div>
            </div>
            <div className="sm:w-4/6 md:w-4/6 w-full">
            <div className="mb-4 bg-white rounded-xl mx-2 p-3">
              <div className="py-2">
              <span className="font-bold text-blue-600">We link Group</span>
              </div>
              <div className="flex flex-wrap">
                <div className="sm:w-1/3 p-1 cursor-pointer">
                    <div onClick={showModalClient} className="p-3 bg-green-500 hover:bg-green-600 text-gray-600 flex flex-wrap font-bold rounded">
                        <div className="w-1/3 p-2"><i className="fa fa-users text-xl text-white"></i></div>
                        <div className="w-2/3 p-2"><span className="text-center text-white">All residents</span></div>
                    </div>
                    <Modal title="All Resident" visible={ModalVisible}
                          onOk={handleOky}
                          onCancel={handleCancl} width={1300}
                          footer={[
                            <Button key="back" onClick={handleCancl}>
                              Return
                            </Button>

                          ]}
                          >
                          <Residents/>
                    </Modal>
                </div>
                <div className="sm:w-1/3 p-1 cursor-pointer">
                    <div onClick={showModalOrg} className="p-3 bg-green-400 hover:bg-green-500 text-gray-600 flex flex-wrap font-bold rounded">
                        <div className="w-1/3 p-2"><i className="fa fa-home text-xl text-gray-100"></i></div>
                        <div className="w-2/3 p-2"><span className="text-center text-gray-100">All Organization</span></div>
                    </div>
                    <Modal title="All Resident" visible={OrgModalVisible}
                          onOk={handleOkye}
                          onCancel={handleCancle} width={1300}
                          footer={[
                            <Button key="back" onClick={handleCancle}>
                              Return
                            </Button>
                          ]}
                          >
                          <Users/>
                    </Modal>
                </div>
                <div className="sm:w-1/3 p-1 cursor-pointer">
                    <div className="p-3 bg-green-200 hover:bg-green-300 text-gray-600 flex flex-wrap font-bold rounded">
                        <div className="w-1/3 p-2"><i className="fa fa-user-circle-o text-xl text-gray-600"></i></div>
                        <div className="w-2/3 p-2"><span className="text-center text-gray-600">All Users</span></div>
                    </div>
                </div>
                <div className="sm:w-1/3 p-1 cursor-pointer">
                    <div className="p-3 bg-blue-300 hover:bg-blue-400 text-gray-600 flex flex-wrap font-bold rounded">
                        <div className="w-1/3 p-2"><i className="fa fa-medkit text-xl text-gray800"></i></div>
                        <div className="w-2/3 p-2"><span className="text-center text-gray800">Orders</span></div>
                    </div>
                </div>
                <div className="sm:w-1/3 p-1 cursor-pointer">
                    <div className="p-3 bg-red-200 hover:bg-red-300 text-gray-600 flex flex-wrap font-bold rounded">
                        <div className="w-1/3 p-2"><i className="fa fa-medkit text-xl text-gray800"></i></div>
                        <div className="w-2/3 p-2"><span className="text-center text-gray800">Missed Orders</span></div>
                    </div>
                </div>
                <div className="sm:w-1/3 p-1 cursor-pointer">
                    <div className="p-3 bg-yellow-300 hover:bg-yellow-400 text-gray-600 flex flex-wrap font-bold rounded">
                        <div className="w-1/3 p-2"><i className="fa fa-medkit text-xl text-gray-800"></i></div>
                        <div className="w-2/3 p-2"><span className="text-center text-gray800">Due Orders</span></div>
                    </div>
                </div>
                <div className="sm:w-1/3 p-1 cursor-pointer">
                    <div className="p-3 bg-indigo-400 hover:bg-indigo-500 text-gray-600 flex flex-wrap font-bold rounded">
                        <div className="w-1/3 p-2"><i className="fa fa-credit-card text-xl text-white"></i></div>
                        <div className="w-2/3 p-2"><span className="text-center text-white">All Payment Apllied</span></div>
                    </div>
                </div>
                <div className="sm:w-1/3 p-1 cursor-pointer">
                    <div className="p-3 bg-purple-200 hover:bg-purple-300 text-gray-600 flex flex-wrap font-bold rounded">
                        <div className="w-1/3 p-2"><i className="fa fa-credit-card text-xl text-gray800"></i></div>
                        <div className="w-2/3 p-2"><span className="text-center text-gray800">Approved Payments </span></div>
                    </div>
                </div>
                <div className="sm:w-1/3 p-1 cursor-pointer">
                    <div className="p-3 bg-red-200 hover:bg-red-300 text-gray-600 flex flex-wrap font-bold rounded">
                        <div className="w-1/3 p-2"><i className="fa fa-credit-card text-xl text-gray800"></i></div>
                        <div className="w-2/3 p-2"><span className="text-center text-gray800">None Approved Payments</span></div>
                    </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    </TabPane>
    <TabPane tab="Latest" key="2">
    <div className="bg-white p-2 rounded-xl">
              <div className="py-2">
              <span className="font-bold">All Payments Request</span>
              </div>
    <table className="table-auto rounded-t-xl bg-blue-200 text-gray-800">
                <tr className="text-left  border-b-2 border-blue-300">
                  <th className="px-4 py-3">Organization</th>
                  <th className="px-4 py-3">Resident</th>
                  <th className="px-4 py-3">Order</th>
                  <th className="px-4 py-3">category</th>
                  <th className="px-4 py-3">Payment Method</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
                {
                    PaymentReq.map((items:any, index) => (
                    <tr key={index} className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
                        <td className="px-4 py-3">Bench</td>
                        <td className="px-4 py-3">philbert</td>
                        <td className="px-4 py-3">Routin Az</td>
                        <td className="px-4 py-3">Prn</td>
                        <td className="px-4 py-3">Online Banking</td>
                        <td className="px-4 py-3">49$</td>
                        <td className="px-4 py-3">17/5/2020</td>
                        <td className="px-4 py-3"><span className="bg-green-400 px-2 py-1 rounded-full font-bold text-gray-100">Approved</span></td>
                   <td className="px-4 py-3">
                            <button className="bg-green-400 text-white hover:bg-green-500 p-2 rounded-lg m-1">Approve</button>
                            <button className="bg-red-400 text-white hover:bg-red-500 p-2 rounded-lg m-1">Cancel</button>
                        </td>
                    </tr>
                    ))
                }
              </table>
    </div>
    </TabPane>
    </Tabs>
    </div>
    </>
  )
}
