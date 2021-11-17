// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Spin, Pagination } from 'antd'
import ruser from '../../../images/users.png'
import { backEndPoints, frontEndPoints, welinkTokens } from '../../../utils/enums'
import { apiBaseUrl } from '../../../utils/env'
import { api } from '../../../utils/apiRequest'
export default function ResidentView () {
  const [clients, setRecents] = useState([])
  const [loading, setLoading] = useState(false)
  const [newclient, setCurrentClients] = useState(1)
  const [postsPerPage] = useState(12)

  useEffect(() => {
    setLoading(true)
    const getResident = async () => {
      const userID = localStorage.getItem(welinkTokens.userID)
      const response = await api.get(`${backEndPoints.RESIDENT_DUE}/${userID}`)
      console.log(response)
      if (response.status === 201) {
        setLoading(false)
        setRecents(response.data.data)
      }
    }
    getResident()
  }, [])
  const indexOfLastPage = newclient * postsPerPage
  const indexOfFirstPost = indexOfLastPage - postsPerPage
  const currentClients = clients.slice(indexOfFirstPost, indexOfLastPage)
  const paginate = (pageNumber:any) => {
    setCurrentClients(pageNumber)
  }
  if (loading) return (<><div className='justify-center  mx-auto items-center pt-24 text-center'><Spin tip='Fetching.....'/></div></>)

  return (
    <>
    <div className="px-2 py-2">
      <h5 className="font-bold text-gray-600 px-4 py-4">Resident DUE</h5>
    </div>
    <div className=" mx-2 md:mx-4">
    <div className="flex flex-wrap space-between">
              {
                currentClients.map((items:any, index) => {
                  const urlPath = `${frontEndPoints.RESIDENT_INFO}/${items.residentId}`
                  const imagePath = `${apiBaseUrl}/${items.profile}`
                  const urlOrder = `${frontEndPoints.ORDER}/${items.residentId}`
                  return (
                  // eslint-disable-next-line react/jsx-key
                  <div key={index} className="w-1/2 md:w-1/5  p-1">
                    <div className="bg-gray-100 shadow-xl rounded-xl flex flex-wrap p-1">
                       <div className="w-full lg:w-1/2">

                         <a href={urlPath}>
                         {items.profile === null ? <img src={ruser} alt="" className="rounded-l-xl w-full" /> : <img src={imagePath} alt="" className="rounded-l-xl w-full" />}
                         </a>
                       </div>
                       <div className="w-full lg:w-1/2 grid p-1">
                         <div className="">
                      <a href={urlOrder}><img src="https://img.icons8.com/emoji/24/000000/pill-emoji.png" className="inset-x-0 float-right"/></a>
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
            <Pagination
             defaultCurrent={1}
             total={clients.length}
             defaultPageSize={postsPerPage}
             onChange={paginate}
             />
    </div>
    </>
  )
}
