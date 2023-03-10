// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { LogoutOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { welinkTokens, frontEndPoints, backEndPoints } from '../../utils/enums'
import { api } from '../../utils/apiRequest'
import Logo from '../../images/logo192.png'
export default function Sidebar () {
  const history = useHistory()
  const [small, setSmall] = useState(false)
  const [due, setDue] = useState(0)
  const handleClick = () => {
    setSmall(true)
  }
  const handleSmall = () => {
    setSmall(false)
  }
  const handleLogout = () => {
    localStorage.removeItem(welinkTokens.userToken)
    localStorage.removeItem(welinkTokens.accountType)
    history.push(frontEndPoints.LOGIN)
  }
  useEffect(() => {
    const getAllOrder = async () => {
      const userId = localStorage.getItem(welinkTokens.userID) || null
      const urlPath = `${backEndPoints.DUE_ORDERS}/${userId}`
      const resDue = await api.get(urlPath)
      setDue(resDue.data.data.length)
    }
    getAllOrder()
  }, [])

  return (<>
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <div className="flex flex-col w-full md:w-full text-gray-700 bg-gray-400 text-gray-200 flex-shrink-0">
        <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between py-4">
          <div className="">
          <a href={frontEndPoints.ROOT} className="text-lg mb-16 font-semibold tracking-widest text-gray-900 uppercase rounded-lg text-white focus:outline-none focus:shadow-outline">
            <img src={Logo} alt="logo" />
             </a>
          </div>
          <div className="md:hidden">
          <button type="button" onClick={handleClick} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-600 hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 focus:text-yellow-600 transition duration-150 ease-in-out">
              {/* <!-- Heroicon name: menu --> */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
          </button>
          </div>
        </div>
        <hr className="text-2 text-gray-600 font-bold"/>
          <nav className="hidden md:flex-grow lg:flex-grow w-full md:block px-4 pb-4 md:pb-0 md:overflow-y-auto py-2">
            <a href={frontEndPoints.ROOT} className="block p-2 mt-2 text-md font-bold text-gray-900 border-blue-500 mt-4 rounded-lg  hover:shadow-lg bg-gray-100  hover:bg-blue-200 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
              <i className="fa fa-line-chart mr-2 text-black bg-red-300 rounded-lg p-3"></i>Dashboard</a>
              <a href={frontEndPoints.DUE_ORDERS} className="block p-2 mt-2 text-md font-bold text-gray-600 border-blue-500 rounded-lg hover:shadow-lg bg-gray-100 hover:bg-blue-200 hover:bg-red-200 focus:bg-red-200 focus:text-white hover:text-white text-gray-200
            hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
              <i className="fa fa-users  mr-2 text-green-800 bg-green-300 rounded-lg p-3"></i>Accounts<span className="float-right bg-red-200 rounded-full pr-2 pl-2">{due}</span></a>
            <a href={frontEndPoints.DUE_ORDERS} className="block p-2 mt-2 text-md font-bold text-gray-600 border-blue-500 mt-4 rounded-lg  hover:shadow-lg bg-gray-100  hover:bg-blue-200
            focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
              <i className="fa fa-credit-card-alt  mr-2 text-gray-900 bg-yellow-400 rounded-lg p-3"></i>Payments</a>
            <a href="/medication-due" className="block p-2 mt-2 text-md font-bold text-gray-600 border-blue-500 rounded-lg hover:shadow-lg bg-gray-100 hover:bg-blue-200 hover:bg-red-200 focus:bg-red-200 focus:text-white hover:text-white text-gray-200
            hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
              <i className="fa fa-cogs  mr-2 text-gray-100 bg-gray-900 rounded-lg p-3"></i>Settings</a>
          </nav>
          <div className="items-end">
          <nav className="hidden md:flex-grow lg:flex-grow w-full md:block px-4 pb-4 md:pb-0 md:overflow-y-auto py-2">
           <a onClick={handleLogout} className="p-3 my-1 block  border-2 border-blue-300 text-black hover:text-black hover:bg-blue-300 font-bold rounded-full w-full flex items-center gap-3" ><LogoutOutlined style={{ fontSize: '17px' }} />Sign Out</a>
          </nav>
          </div>
          {small
            ? <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500" className="relative bg-gray-100 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="">
          <div className="rounded-md divide-y-2 ">
            <div className="pt-5 pb-6 px-5 space-y-6">
              <div className="flex items-center justify-between">
                <div>
               <h4 className="text-black font-bold">Welink</h4>
                </div>
                <div className="-mr-2">
                  <button type="button" onClick={handleSmall} className="inline-flex items-center justify-center p-2 rounded-md text-red-500 hover:text-yellow-600 hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 focus:text-yellow-600 transition duration-150 ease-in-out">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  </button>
              </div>
            </div>
            <div>
              <nav className="grid gap-y-5">
                <a href="/" className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                Resident Due
                </a>
                <a href="#" className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                 Latest Orders
                </a>
                <a href="#" className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                 Due Orders
                </a>
                <a href="#" className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                 Missed Orders
                </a>
                <a href="#" className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                 Medications Due
                </a>
                <a onClick={handleLogout} className="text-sm  leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                Sign out
                </a>

              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
            : <span></span>}
      </div>
    </div>
      </>)
}
