// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { Spin, Pagination } from 'antd'
import ruser from '../../../images/users.png'
import { backEndPoints, frontEndPoints } from '../../../utils/enums'
import { useForm } from 'react-hook-form'
import { SearchType } from '../../../utils/types'
import { apiBaseUrl } from '../../../utils/env'
import { api } from '../../../utils/apiRequest'
export default function Residents () {
  const [clients, setRecents] = useState([])
  const [loading, setLoading] = useState(false)
  const [newclient, setCurrentClients] = useState(1)
  const [postsPerPage] = useState(12)
  const [search, setSearch] = useState('')
  console.log(search)
  const { register, handleSubmit, formState: { errors } } = useForm<SearchType>()
  useEffect(() => {
    setLoading(true)
    const getResident = async () => {
      const response = await api.get(`${backEndPoints.CREATE_RESIDENT}`)
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
  if (loading) return (<><div className='justify-center  mx-auto items-center text-center'><Spin tip='Fetching.....'/></div></>)

  const handleSearch = (data:any) => {
    setSearch(data.search)
    setRecents(clients.filter((newdata:any) => {
      return newdata.firstName.toLowerCase().match(data.search.toLowerCase())
    }))
  }
  return (<>
    <form onSubmit={ handleSubmit((data) => handleSearch(data))}>
      <div className="flex flex-wrap">
    <div className="w-4/5  py-3 rounded">  <input {...register('search', { required: 'Please add type something' })}
    className="w-full px-4 py-3 rounded"
    placeholder="Search by Firstname"
    /></div>
      <div className="w-1/5 py-3 rounded">  <input type="submit"
       value="search"
       className="bg-green-400 px-4 py-3 w-full rounded-r-2xl"
       /></div>
      <span className="text-red-600 text-xs">{errors.search && errors.search.message}</span>
      </div>
    </form>
       <div className="flex flex-wrap space-between">
              {
                currentClients.map((items:any, index) => {
                  const urlPath = `${frontEndPoints.RESIDENT_INFO}/${items.residentId}`
                  const imagePath = `${apiBaseUrl}/${items.profile}`
                  const urlOrder = `${frontEndPoints.ORDER}/${items.residentId}`
                  return (
                  // eslint-disable-next-line react/jsx-key
                  <div key={index} className="w-1/2 md:w-1/3  p-1">
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
    </>)
}
