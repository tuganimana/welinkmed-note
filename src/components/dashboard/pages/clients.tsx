// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import pe from '../../../images/pe.jpg'
import ruser from '../../../images/users.png'
import { useApi } from '../../../utils/api'
import { frontEndPoints } from '../../../utils/enums'

export default function Residents () {
  const [clients, setRecents] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)

    useApi.allResidentRequest().then((response) => {
      if (response) {
        setLoading(false)
        setRecents(response.data)
        console.log(response.data)
      }
    })
      .catch((error) => {
        console.log(`${error}`)
      })
  }, [])
  if (loading) return (<><div className='justify-center  mx-auto items-center text-center'><Spin tip='fetching.....'/></div></>)
  return (<>
       <div className="flex flex-wrap space-between">
              {
                clients.map((items:any, index) => {
                  const urlPath = `${frontEndPoints.RESIDENT_INFO}/${items.residentId}`
                  return (
                  // eslint-disable-next-line react/jsx-key
                  <div key={index} className="w-1/2 md:w-1/3  p-1">
                    <div className="bg-gray-100 shadow-xl rounded-xl flex flex-wrap p-1">
                       <div className="w-full lg:w-1/2">
                         <a href={urlPath}>
                         {items.profile === null ? <img src={ruser} alt="" className="rounded-l-xl w-full" /> : <img src={pe} alt="" className="rounded-l-xl w-full" />}
                         </a>
                       </div>
                       <div className="w-full lg:w-1/2 grid p-1">
                         <div className="">
                      <img src="https://img.icons8.com/emoji/24/000000/pill-emoji.png" className="inset-x-0 float-right"/>
                         </div>
                         <span className="lg:text-xs text-center font-bold cursor-pointer text-gray-800 float-left">{items.firstName} {items.lastName}</span>
                          <div className=" text-center items-end ">
                            <a href={urlPath}>
                            <span className="text-center w-full cursor-pointer hover:bg-green-800 rounded-full px-4 py-2 bg-green-600 font-bold cursor-pointer text-xs  text-gray-100 mt-2">resident meds</span>
                            </a>
                          </div>
                       </div>
                    </div>
                  </div>
                  )
                })
              }

            </div>
    </>)
}
