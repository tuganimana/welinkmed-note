// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Tabs, Spin } from 'antd'
import Overview from './overview'
import { useApi } from '../../../utils/api'
import { useParams } from 'react-router-dom'
import Alert from '../../alerts'
const { TabPane } = Tabs
export default function Editresident () {
  const { residentid } : any = useParams()
  const callback = (key:any) => {
    console.log(key)
  }
  const [profile, setProfile] = useState('')
  const [loading, setLoading] = useState(false)
  const [messaging, setMessage] = useState('')
  const updateProfile = async (event:any) => {
    event.preventDefault()
    setLoading(true)
    const data = new FormData()
    data.append('profile', profile)
    const response = await useApi.residentProfileUpdateRequest(`/${residentid}`, data)
    if (response) {
      setLoading(true)
      setMessage(response.message)
    }
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  if (loading) return (<><div className='justify-center mt-64 mx-auto items-center text-center'><Spin tip='editing.....'/></div></>)
  return (
    <>
    <div className="px-2 py-2">
      <h5 className="font-semibold">Edit Resident Information</h5>
    </div>
    <div className="mx-4">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Overview" key="1">
     <Overview/>
    </TabPane>
    <TabPane tab="Profile Picture" key="2">
    <div>
      <Alert message={messaging}/>
              <label className="block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <form method="POST" encType='multipart/form-data'>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" onChange={(e:any) => { setProfile(e.target.files[0]) }} className="sr-only"/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>

              <div className="mb-4">
               <input type="submit" onClick={updateProfile} value="Save" className="bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />
          </div>
          </form>
            </div>
    </TabPane>
    <TabPane tab="Medication" key="3">
    <div className="grid md:grid-cols-2 gap-4">
          <div className="p-2">
            <label>Drugs & medication</label>
            <input type="text" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Medication Type</label>
            <input type="text" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Health A-Z</label>
            <input type="text" className="w-full p-2 border"/>
          </div>
          <br></br>
          <div className="mb-4">
               <input type="submit" value="Save" className="bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />
          </div>
        </div>
    </TabPane>
  </Tabs>
    </div>
    </>
  )
}
