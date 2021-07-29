// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Menu, Dropdown } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import chart from '../../images/chart.png'
import { frontEndPoints } from '../../utils/enums'
import Residents from './pages/clients'

export default function Welcome () {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href={frontEndPoints.RESIDENT_ADD}>Add New Resident</a>
      </Menu.Item>
      <Menu.Item key="0">
        <a href={frontEndPoints.ORDER}>Order maintenance</a>
      </Menu.Item>
    </Menu>
  )

  const recent = [
    {
      Firstname: 'Anne Marly',
      Lastname: 'bench',
      Age: '19',
      Sex: 'Male',
      House: 'Bench',
      dob: '17th'
    },
    {
      Firstname: 'Anne Marly',
      Lastname: 'bench',
      Age: '19',
      Sex: 'Male',
      House: 'Bench',
      dob: '17th'
    },
    {
      Firstname: 'Anne Marly',
      Lastname: 'bench',
      Age: '19',
      Sex: 'Male',
      House: 'Bench',
      dob: '17th'
    },
    {
      Firstname: 'Anne Marly',
      Lastname: 'bench',
      Age: '19',
      Sex: 'Male',
      House: 'Bench',
      dob: '17th'
    }
  ]
  return (<>
      <div className="container p-4 md:mt-8">
        <div className="flex  flex-wrap">
          <div className="lg:w-4/6 w-full p-2 grid">
            <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link bg-red-400  px-2 text-center py-2 rounded-xl mr-4" onClick={e => e.preventDefault()}>
            <span className="text-white hover:text-black  pr-8 pl-2 border-blue-500"> Add New</span> <PlusOutlined className="text-white"/>
            </a>
       </Dropdown>
        </div>
            </div>
         <Residents/>
            <div className="flex flex-wrap md:mt-16 mt-4">
              <div className="w-full md:w-2/3 p-2 bg-white rounded-xl">
                <span className="font-bold p-2 text-blue-400">Recent recorded</span>
                <div className="mt-2">
                <table className="rounded-t-lg w-5/6 mx-auto bg-blue-100 text-gray-800">
                  <tr className="text-left border-b-2 border-blue-300">
                    <th className="px-4 py-3">Firstname</th>
                    <th className="px-4 py-3">Lastname</th>
                    <th className="px-4 py-3">Age</th>
                    <th className="px-4 py-3">Sex</th>
                    <th className="px-4 py-3">Sex</th>
                    <th className="px-4 py-3">Sex</th>
                  </tr>
                  {
                recent.map((items:any, index) => {
                  return (
                  <tr key={index} className="bg-gray-100 hover:bg-blue-100 border-b border-blue-200">
                    <td className="px-4 py-3">{items.Firstname}</td>
                    <td className="px-4 py-3">{items.Lastname}</td>
                    <td className="px-4 py-3">{items.Age}</td>
                    <td className="px-4 py-3">{items.Sex}</td>
                    <td className="px-4 py-3">{items.Sex}</td>
                    <td className="px-4 py-3">{items.Sex}</td>
                  </tr>
                  )
                })
                }
                </table>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-2 rounded-xl">
                <span className="font-bold px-2 text-green-600">Recents clients added</span>
                <div className="grid gap-2 p-1 rounded-xl">
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/6 w-full bg-white rounded-lg p-4  md:mt-16 mt-4 grid">
            <div className="p-1">
              <span className="font-bold">General Stracture</span>
              <div className="align-center item-center text-center">
              <img src={chart} alt="" className="text-center align-cente"/>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex flex-wrap p-1 border-red-300 border-2 rounded-2xl">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-pie-chart text-4xl text-red-300"></i></span>
                </div>
                <div className="w-2/4 p-2 grid">
                  <span className="font-bold text-lg text-gray-600">Missed Orders</span>
                  <span className="font-bold text-xs text-red-300">Direct</span>
                </div>
                <div className="w-1/4 "><span className="font-bold float-right p-2">12%</span></div>
              </div>
              <div className="flex flex-wrap p-1 border-green-400 border-2 rounded-2xl">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-pie-chart text-4xl text-green-400"></i></span>
                </div>
                <div className="w-2/4 p-2 grid">
                  <span className="font-bold text-lg text-gray-600">Recieved Orders</span>
                  <span className="font-bold text-xs text-green-400">Direct</span>
                </div>
                <div className="w-1/4 "><span className="font-bold float-right p-2">48%</span></div>
              </div>
              <div className="flex flex-wrap p-1 border-blue-300 border-2 rounded-2xl">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-pie-chart text-4xl text-blue-400"></i></span>
                </div>
                <div className="w-2/4 p-2 grid">
                  <span className="font-bold text-lg text-gray-600">On Date</span>
                  <span className="font-bold text-xs text-blue-400">Direct</span>
                </div>
                <div className="w-1/4 "><span className="font-bold float-right p-2">40%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
