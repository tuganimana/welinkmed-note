// eslint-disable-next-line no-use-before-define
import React from 'react'
export default function Topbar () {
  return (<>
    <nav className="flex items-center p-1 bg-white flex-wrap">
      <a href="#" className="p-2 mr-4 inline-flex items-center">
        <span className="text-md p-2 hover:shadow-lg rounded font-semibold text-gray-800 border-l-2 border-r-2 hover:bg-red-200 hover:text-gray-900  pr-2 pl-2 border-blue-500"><i className="fa fa-cogs"></i> Maintenance</span>
      </a>
      <button className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler" data-target="#navigation">
          <i className="material-icons">menu</i>
      </button>
      <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2  rounded text-gray-900 items-center justify-center hover:bg-gray-300 bg-gray-200 hover:text-gray-900">
            <span className="font-semibold"><i className="fa fa-user mr-2 bg-red-300 p-2 text-white rounded"></i>User Name</span>
          </a>
        </div>
      </div>
    </nav>
  </>)
}
