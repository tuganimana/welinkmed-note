// eslint-disable-next-line no-use-before-define
import React from 'react'
import { LogoutOutlined } from '@ant-design/icons'
export default function Sidebar () {
  return (<>
  <div className="md:flex bg-green-200 flex-col md:flex-row md:min-h-screen   w-full">
    <div className="flex flex-col w-full md:w-64 text-gray-700 bg-green-400 text-gray-200 flex-shrink-0" x-data="{ open: false }">
      <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between py-4">
        <a href="#" className="text-lg mb-16 font-semibold tracking-widest text-gray-900 uppercase rounded-lg text-white focus:outline-none focus:shadow-outline">We Link Med </a>
      </div>
      <hr className="text-2 text-gray-600 font-bold"/>
        <nav className="flex-grow w-full md:block px-4 pb-4 md:pb-0 md:overflow-y-auto py-2">
          <a className="block p-2 mt-2 text-md font-bold text-gray-600 border-blue-500 mt-4 rounded-lg  hover:shadow-lg bg-green-300  hover:bg-green-400 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
            <i className="fa fa-bar-chart mr-2 text-black bg-blue-200 rounded-full p-3"></i>Resident Due </a>
          <a className="block p-2 mt-2 text-md font-bold text-gray-600 border-blue-500 rounded-lg hover:shadow-lg hover:bg-red-200 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
            <i className="fa fa-medkit mr-2 text-black bg-green-200 rounded-full p-3"></i>Latest orders <span className="float-right bg-yellow-200 rounded-full pr-2 pl-2">3</span> </a>
          <a className="block p-2 mt-2 text-md font-bold text-gray-600 border-blue-500 rounded-lg hover:shadow-lg hover:bg-red-200 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
            <i className="fa fa-medkit  mr-2 text-black bg-red-400 rounded-full p-3"></i>Missed Orders <span className="float-right bg-yellow-200 rounded-full pr-2 pl-2">3</span> </a>
          <a className="block p-2 mt-2 text-md font-bold text-gray-600 border-blue-500 rounded-lg hover:shadow-lg hover:bg-red-200 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
            <i className="fa fa-hospital-o  mr-2 text-black bg-yellow-200 rounded-full p-3"></i>Medications Due <span className="float-right bg-yellow-200 rounded-full pr-2 pl-2">0</span> </a>
       <hr/>
       <a className="block p-2 mt-2 text-md font-bold text-gray-600 border-blue-500 rounded-lg hover:shadow-lg hover:bg-red-200 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
            <i className="fa fa-user  mr-2 text-black bg-yellow-200 rounded-full p-3"></i>Profile </a>
        </nav>
        <div className="items-end p-3">
        <p className="p-3 my-1 block w-full flex items-center gap-3" ><LogoutOutlined style={{ fontSize: '17px' }} />Sign Out</p>
        </div>
    </div>
  </div>
    </>)
}
