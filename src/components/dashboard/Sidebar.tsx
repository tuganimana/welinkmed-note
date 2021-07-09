// eslint-disable-next-line no-use-before-define
import React from 'react'
export default function Sidebar () {
  return (<>
  <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <div className="flex flex-col w-full md:w-64 text-gray-700 bg-white text-gray-200 flex-shrink-0" x-data="{ open: false }">
      <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg text-white focus:outline-none focus:shadow-outline">We Link Med </a>
      </div>
      <hr className="text-2 text-red-800 font-bold"/>
        <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
          <a className="block p-2 mt-2 text-md font-bold text-gray-600 border-blue-500 rounded-lg  hover:shadow-lg bg-red-200  hover:bg-red-300 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"><i className="fa fa-bar-chart mr-2 text-black bg-blue-200 p-2"></i>Resident Due </a>
          <a className="block p-2 mt-2 text-md font-bold text-gray-600 border-blue-500 rounded-lg hover:shadow-lg hover:bg-red-200 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"><i className="fa fa-medkit mr-2 text-black bg-green-200 p-2"></i>Latest orders <span className="float-right bg-yellow-200 rounded-full pr-2 pl-2">3</span> </a>
          <a className="block p-2 mt-2 text-md font-bold text-gray-600 border-blue-500 rounded-lg hover:shadow-lg hover:bg-red-200 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"><i className="fa fa-medkit  mr-2 text-black bg-red-400 p-2"></i>Missed Orders <span className="float-right bg-yellow-200 rounded-full pr-2 pl-2">3</span> </a>
          <a className="block p-2 mt-2 text-md font-bold text-gray-600 border-blue-500 rounded-lg hover:shadow-lg hover:bg-red-200 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"><i className="fa fa-hospital-o  mr-2 text-black bg-yellow-200 p-2"></i>Medications Due</a>
        </nav>
    </div>
  </div>
    </>)
}
