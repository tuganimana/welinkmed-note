// eslint-disable-next-line no-use-before-define
import React from 'react'
import Residents from './clients'
import { UserAddOutlined, DollarCircleOutlined, AreaChartOutlined, FolderAddOutlined, PlusOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'
import { frontEndPoints } from '../../../utils/enums'
export default function ClientWelcome () {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href={frontEndPoints.ADDCLIENT}>Add New Client</a>
      </Menu.Item>
    </Menu>
  )
  return (<>
      <div className="container p-4 md:mt-8">
        <div className="flex  flex-wrap">
          <div className="lg:w-4/6 w-full p-2 grid">
            <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link  px-2 text-center py-2 rounded-xl mr-4" onClick={e => e.preventDefault()}>
            <span className="text-red-700 hover:text-black  pr-8 pl-2 border-blue-500"> Add New</span> <PlusOutlined className="text-red-700"/>
            </a>
       </Dropdown>
        </div>
            </div>
            <div className="mb-4 bg-white rounded-xl mx-2 ">
              <div className="grid  md:grid-cols-3 gap-4 p-3">
                <a href={frontEndPoints.RESIDENT_ADD}><div className="p-3 bg-red-200 text-gray-600 flex flex-wrap font-bold rounded-xl shadow">
                <div className="bg-white rounded-full h-8 w-8 items-center"><UserAddOutlined className="ml-2" /></div>
                <span className="inline-block mt-2 mx-3"> Add residents</span>
                </div>
                </a>
                <a href={frontEndPoints.ORDER}><div className="p-3 bg-green-200 text-gray-600 flex flex-wrap font-bold rounded-xl shadow">
                <div className="bg-white rounded-full h-8 w-8 items-center"><FolderAddOutlined className="ml-2" /></div>
                <span className="inline-block mt-2 mx-3"> Add order</span>
                </div>
                </a>
                <div className="p-3 bg-gray-200 text-gray-600 flex flex-wrap font-bold rounded-xl shadow">
                <div className="bg-white rounded-full h-8 w-8 items-center"><AreaChartOutlined className="ml-2" /></div>
                <span className="inline-block mt-2 mx-3"> Reports</span>
                </div>
                <a href={frontEndPoints.MAR} ><div className="p-3 bg-yellow-200 text-gray-600 flex flex-wrap font-bold rounded-xl shadow">
                <div className="bg-white rounded-full h-8 w-8 items-center"><AreaChartOutlined className="ml-2" /></div>
                <span className="inline-block mt-2 mx-3"> MRN</span>
                </div>
                </a>
                <div className="p-3 bg-blue-200 text-gray-600 flex flex-wrap font-bold rounded-xl shadow">
                <div className="bg-white rounded-full h-8 w-8 items-center"><DollarCircleOutlined size={40} className="ml-2" /></div>
                <span className="inline-block mt-2 mx-3"> Payments</span>
                </div>
              </div>
            </div>
            <div className="">
              <Residents/>
            </div>
          </div>
          <div className="lg:w-2/6 w-full bg-white rounded-lg md:mt16 mt-4 grid">
            <div className="md:mt-4 p-2">
              <span className="font-bold">Alerts</span>
            </div>
            <div className="grid gap-2 mb-4">
              <div className="flex flex-wrap p-2 bg-green-100 shadow-md rounded-xl mx-4">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-check text-4xl text-green-400"></i></span>
                </div>
                <div className="w-3/4 p-2 grid">
                <p className="text-sm">welcome to WELINK MED,seems like you have now completed your dosage program.</p>
                </div>
              </div>
              <div className="flex flex-wrap p-2 bg-green-100 shadow-md rounded-xl mx-4">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-exclamation text-4xl text-red-400"></i></span>
                </div>
                <div className="w-3/4 p-2 grid">
                   <p className="text-sm">welcome to WELINK MED,seems like you have failed to take  your medication.</p>
                </div>
              </div>
              <div className="flex flex-wrap p-2 bg-green-100 shadow-md rounded-xl mx-4">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-envelope-open text-4xl text-purple-400"></i></span>
                </div>
                <div className="w-3/4 p-2 grid">
                <p className=" text-sm">welcome to WELINK MED,seems like you have some pending messages for your medication.</p>
                </div>
              </div>
              <div className="flex flex-wrap p-2 bg-green-100 shadow-sm rounded-xl mx-4">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-clock-o text-4xl text-yellow-400"></i></span>
                </div>
                <div className="w-3/4 p-2 grid">
                <p className=" text-sm">welcome to WELINK MED, you can change some hours for your medication.</p>
                </div>
              </div>
              <div className="text-center item-center">
              <span className="font-bold text-green-500 "><a href="#">Load More</a></span>
            </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
