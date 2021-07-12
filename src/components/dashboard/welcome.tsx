// eslint-disable-next-line no-use-before-define
import React from 'react'
import pe from '../../images/pe.jpg'
import chart from '../../images/chart.png'
import person1 from '../../images/person1.jpg'
import { frontEndPoints } from '../../utils/enums'
export default function Welcome () {
  const resident = [
    {
      fullname: 'Anne Marly',
      houses: ' bench'
    },
    {
      fullname: 'Bianna Mackenz',
      houses: ' bench'
    },
    {
      fullname: 'Kevin Armony',
      houses: ' bench'
    }
  ]
  const clients = [
    {
      fullname: 'Mikey Diaz',
      houses: 'bench'
    },
    {
      fullname: 'Neymar Santos',
      houses: 'bench'
    },
    {
      fullname: 'leo Martinez',
      houses: 'bench'
    }
  ]
  return (<>
      <div className="container p-4 md:mt-8">
        <div className="flex  flex-wrap">
          <div className="lg:w-4/6 w-full p-2 grid">
            <div className="container mb-2">
              <span className="font-semibold text-md float-left">Resident Pannel</span>
              <a href={frontEndPoints.RESIDENT_ADD}><span className="font-semibold text-md float-right bg-blue-400 text-white hover:bg-blue-500  rounded-lg p-2"><i className="fa fa-plus"></i> Add New Resident</span></a>
            </div>
            <div className="flex flex-wrap space-between">
              {
                resident.map((items:any, index) => {
                  return (
                  // eslint-disable-next-line react/jsx-key
                  <div key={index} className="w-1/2 md:w-1/3 w-full p-1">
                    <div className="bg-gray-100 shadow-2xl rounded-xl flex flex-wrap p-1">
                       <div className="w-full lg:w-1/2">
                         <a href="/resident-info">
                         <img src={pe} alt="" className="rounded-lg" />
                         </a>
                       </div>
                       <div className="w-full lg:w-1/2 grid p-1">
                         <div className="">
                            <i className="fa fa-plus float-right cursor-pointer p-2 text-gray-500 bg-red-200 rounded-full"></i>
                         </div>
                         <span className="lg:text-xs text-center font-bold cursor-pointer text-gray-800 float-left">{items.fullname}</span>
                          <div className=" text-center items-end ">
                            <a href="/resident-info">
                            <span className="text-center cursor-pointer hover:bg-gray-600 rounded-full px-4 py-2 bg-gray-500 font-bold cursor-pointer  text-gray-100 mt-2">{items.houses}</span>
                            </a>
                          </div>
                       </div>
                    </div>
                  </div>
                  )
                })
              }

            </div>
            <div className="flex flex-wrap mt-8">
              <div className="w-full md:w-2/3 p-24 bg-white rounded-xl">
                <span className="font-bold">Recent recorded / table</span>
                <div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-2 rounded-xl">
                <span className="font-bold">Recents clients added</span>
                <div className="grid gap-2 p-1 rounded-xl">
                  {
                    clients.map((clientitem:any, index) => {
                      return (
                        <div key={index} className="flex flex-wrap p-1 border-gray-400 border-b-2 rounded-full">
                          <div className="w-1/4   text-center align-center item-center">
                            <span>
                              <img src={person1} alt="" className="rounded-full" />
                            </span>
                          </div>
                          <div className="w-3/4 p-2 grid">
                            <span className="font-bold text-xs text-gray-600">{clientitem.fullname}</span>
                            <span className="font-bold text-xs text-green-500">Bench</span>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/6 w-full bg-white rounded-lg p-4  mt-8 grid">
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
