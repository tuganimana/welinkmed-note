// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Menu, Dropdown } from 'antd'
import { DownOutlined, SearchOutlined } from '@ant-design/icons'

export default function Topbar () {
  const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/">Resident maintenance</a>
    </Menu.Item>
    <Menu.Item key="0">
      <a href="/">User maintenance</a>
    </Menu.Item>
  </Menu>
  )
  return (<>
    <nav className="flex items-center p-1  flex-wrap mt-2">

      <div className="bg-white rounded-full ml-2">
        <input className="w-64 p-2 rounded-full focus:outline-none"/><span className="bg-blue-400 rounded-full px-3 py-2  text-gray-100  font-bold"><SearchOutlined className="rounded-full w-4"/></span>
      </div>
      <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link bg-white px-2 text-center py-2 rounded-xl mr-4" onClick={e => e.preventDefault()}>
            <span className=" hover:text-gray-900  pr-8 pl-2 border-blue-500">
              <i className="fa fa-cogs"></i> Maintenance</span> <DownOutlined />
            </a>
       </Dropdown>
        </div>
      </div>
    </nav>
  </>)
}
