// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Tabs, Modal, Button } from 'antd'
import { useApi } from '../../../utils/api'
const { TabPane } = Tabs
export default function AdminDetailRoot () {
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
  const [userData, setUserData] = useState([])

  const callback = (key:any) => {
    console.log(key)
  }

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
  return (
    <>
    <div className="px-2 py-2">
      <h5 className="font-semibold px-4">Admin Details</h5>
    </div>
    <div className="mx-8">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="All Administrator" className="" key="1">
    <div className="p-2 bg-white rounded-xl shadows-xl">
        <div className="flex flex-wrap">
      {
    userData.map((items:any, index) => (
        <div key={index} className="sm:w-1/3 p-2">
              <div className="max-w-md py-4 px-8 bg-green-200 shadow-lg rounded-lg my-14">
                <div className="flex justify-center md:justify-end -mt-16">
                    <img className="w-20 h-20 object-cover rounded-full border-2 border-green-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Admin Image" />
                </div>
                <div className="grid">
                    <h2 className="text-blue-400 text-2xl font-semibold">{items.firstName} {items.lastName}</h2>
                    <span className="text-gray-600 text-sm font-bold text-green-900">Email: <span className="text-gray-500">{items.email}</span></span>
                    <span className="text-gray-600 text-sm font-bold text-green-900">Category: <span className="text-gray-500">{items.category}</span></span>
                    <span className="text-gray-600 text-sm font-bold text-green-900">Organization: <span className="text-gray-500">{items.organization}</span></span>
                </div>
                <div className="flex justify-end mt-4">
                    <a href="#" onClick={showModalClient} className="bg-red-300 hover:text-gray-800 text-gray-600 font-medium hover:bg-red-400 p-2 rounded-lg">20 Residents</a>
                </div>
                        <Modal title="All Resident" visible={ModalVisible}
                          onOk={handleOky}
                          onCancel={handleCancl} width={700}
                          footer={[
                            <Button key="back" onClick={handleCancl}>
                              Return
                            </Button>

                          ]}
                          >
                          <p>All Residents</p>
                          </Modal>
            </div></div>))
      }
      </div>
    </div>
    </TabPane>
    <TabPane tab="All User" key="2">
    <div>
    <table className="rounded-t-lg w-full mx-auto bg-gray-200 text-gray-800">
      <tr className="text-left border-b-2 border-blue-300">
        <th className="px-4 py-3">#</th>
        <th className="px-4 py-3">Profile</th>
        <th className="px-4 py-3">First Name</th>
        <th className="px-4 py-3">Last Name</th>
        <th className="px-4 py-3">Organization</th>
        <th className="px-4 py-3">Category</th>
        <th className="px-4 py-3">Email</th>
        <th className="px-4 py-3">Action</th>
      </tr>
      {
    userData.map((items:any, index) => (
    <tr key={index} className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
        <td className="px-4 py-3">{index + 1}</td>
        <td className="px-4 py-3">{items.profile}</td>
        <td className="px-4 py-3">{items.firstName}</td>
        <td className="px-4 py-3">{items.lastName}</td>
        <td className="px-4 py-3">{items.organization}</td>
        <td className="px-4 py-3">{items.category}</td>
        <td className="px-4 py-3">{items.email}</td>
        <td className="px-4 py-3">
          <button className="bg-green-400 text-white hover:bg-green-500 p-2 rounded-lg m-1">View All</button>
          <button className="bg-red-400 text-white hover:bg-red-500 p-2 rounded-lg m-1">Delete</button>
          <button className="bg-blue-400 text-white hover:bg-blue-500 p-2 rounded-lg m-1">Update</button>
        </td>
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
