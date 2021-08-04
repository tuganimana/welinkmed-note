// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Tabs } from 'antd'
import { useForm } from 'react-hook-form'
import { RegisterType } from '../../../utils/types'
import { useApi } from '../../../utils/api'
import Alert from '../../alerts'
const { TabPane } = Tabs
export default function UserMaintenance () {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterType>()
  const [loading, setLoading] = useState(false)
  const [messaging, setMessaging] = useState('')
  const registerUser = async (data:any) => {
    setLoading(true)
    try {
      const response = await useApi.UserRegisterRequest(
        data.firstname,
        data.lastname,
        data.email,
        data.password,
        data.category,
        data.organization
      )
      if (response === 'undefined') {
        setMessaging(response.message)
        setLoading(false)
      }
      setTimeout(() => {
        setMessaging(response.message)
        setLoading(false)
      }, 2000)
    } catch (error) {
      setMessaging('New User can not be added')
      setLoading(false)
    }
  }
  const callback = (key:any) => {
    console.log(key)
  }
  const recent = [
    {
      id: '1',
      profile: 'photo.jg',
      firstname: 'Alexander',
      lastname: 'Martin',
      gender: 'Male',
      dob: '17/5/1989',
      phone: '+1 230 403 500',
      email: 'alexabdel@gmail.com'
    }
  ]
  return (
    <>
     <div className="px-2 py-2">
      <h5 className="font-semibold px-4">User Maintenance</h5>
    </div>
    <div className="mx-8">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Add user" className="" key="1">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="User Detail" key="1">
    <div className="p-4 bg-white rounded-xl shadows-xl">
    <Alert message={messaging}/>
          <form onSubmit={handleSubmit((data) => registerUser(data))}>
      <div className="grid md:grid-cols-2 gap-4">
          <div className="p-2">
            <label className="text-md">Firstname</label>
            <input type="text" {...register('firstname', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.firstname && errors.firstname.message}</span>
          </div>
          <div className="p-2">
            <label>Lastname</label>
            <input type="text" {...register('lastname', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.lastname && errors.lastname.message}</span>
          </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
          <div className="p-2">
            <label className="text-md">Email</label>
            <input type="text" {...register('email', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.email && errors.email.message}</span>
          </div>
          <div className="p-2">
            <label>Category</label>
            <input type="text" {...register('category', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.category && errors.category.message}</span>
          </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
          <div className="p-2">
            <label className="text-md">Origanization</label>
            <input type="text" {...register('organization', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.organization && errors.organization.message}</span>
          </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
          <div className="p-2">
            <label className="text-md">Password</label>
            <input type="password" {...register('password', { required: '* This field is required' })} className="w-full p-2 border"/>
            <span className="text-red-600 text-xs">{errors.password && errors.password.message}</span>
          </div>
          <div className="p-2">
            <label>Confirm Password</label>
            <input type="password" name="" className="w-full p-2 border"/>
          </div>
      </div>
      <div className="mb-4">
             {loading ? <span className='px-8 bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500'>Adding.....</span> : <input type="submit" value="Add New User" className="bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />}
          </div>
          </form>
    </div>
    </TabPane>
    <TabPane tab="Web Maintain / Update" key="3">
    <div className="">
      <label className="block text-sm font-medium text-gray-700">
                Profile photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              <label className="block text-sm font-medium text-gray-700">
                 Welcome background photo
              </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer pr-2 pl-2 bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              <label className="block text-sm mt-2 font-medium text-gray-700">
                Maintain Color
                </label>
              <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-2">
                    <label className="text-md">Background Color</label>
                    <div className="grid-cols-2  pt-4 gap-2">
                      <span className="bg-blue-700 m-1 rounded-full p-3"><input type="radio" name="bgcolor" value="bg-blue-700"/></span>
                      <span className="bg-green-700 m-1 rounded-full p-3"><input type="radio" name="bgcolor" value="bg-green-700"/></span>
                      <span className="bg-purple-800 m-1 rounded-full p-3"><input type="radio" name="bgcolor" value="bg-purple-800"/></span>
                      <span className="bg-pink-700 m-1 rounded-full p-3"><input type="radio" name="bgcolor" value="bg-pink-700"/></span>
                      <span className="bg-yellow-700 m-1 rounded-full p-3"><input type="radio" name="bgcolor" value="bg-yellow-700"/></span>
                      <span className="bg-gray-900 m-1 rounded-full p-3"><input type="radio" name="bgcolor" value="bg-gray-900"/></span>
                    </div>
                    <div className="grid-cols-2 mt-2 pt-4 gap-2">
                      <span className="bg-blue-400 m-1 rounded-full p-3"><input type="radio" name="bgcolor" value="bg-blue-400"/></span>
                      <span className="bg-green-400 m-1 rounded-full p-3"><input type="radio" name="bgcolor" value="bg-green-400"/></span>
                      <span className="bg-purple-400 m-1 rounded-full p-3"><input type="radio" name="bgcolor" value="bg-purple-400"/></span>
                      <span className="bg-pink-400 m-1 rounded-full p-3"><input type="radio" name="bgcolor" value="bg-pink-400"/></span>
                      <span className="bg-yellow-400 m-1 rounded-full p-3"><input type="radio" name="bgcolor" value="bg-yellow-400"/></span>
                      <span className="bg-gray-400 m-1 rounded-full p-3"><input type="radio" name="bgcolor" value="bg-gray-400"/></span>
                    </div>
                  </div>
                  <div className="p-2">
                    <label className="text-md">Text Color</label>
                    <div className="grid-cols-2  pt-4 gap-2">
                      <span className="bg-blue-600 m-1 rounded-full p-3"><input type="radio" name="textcolor" value="bg-pink-700"/></span>
                      <span className="bg-gray-200 m-1 rounded-full p-3"><input type="radio" name="textcolor" value="bg-yellow-700"/></span>
                      <span className="bg-gray-900 m-1 rounded-full p-3"><input type="radio" name="textcolor" value="bg-gray-900"/></span>
                    </div>
                    <div className="grid-cols-2 mt-2 pt-4 gap-2">
                      <span className="bg-blue-400 m-1 rounded-full p-3"><input type="radio" name="textcolor" value="bg-pink-400"/></span>
                      <span className="bg-white m-1 rounded-full p-3"><input type="radio" name="textcolor" value="bg-yellow-400"/></span>
                      <span className="bg-gray-400 m-1 rounded-full p-3"><input type="radio" name="textcolor" value="bg-gray-400"/></span>
                    </div>
                  </div>
              </div>

              <div className="mb-4">
               <input type="submit" value="Save" className="bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />
              </div>
        </div>
    </TabPane>
  </Tabs>
    </TabPane>
    <TabPane tab="All User" key="2">
    <div>
    <table className="rounded-t-lg w-full mx-auto bg-gray-200 text-gray-800">
      <tr className="text-left border-b-2 border-blue-300">
        <th className="px-4 py-3">#</th>
        <th className="px-4 py-3">Profile</th>
        <th className="px-4 py-3">First Name</th>
        <th className="px-4 py-3">Last Name</th>
        <th className="px-4 py-3">Gender</th>
        <th className="px-4 py-3">Dob</th>
        <th className="px-4 py-3">Phone</th>
        <th className="px-4 py-3">Email</th>
        <th className="px-4 py-3">Action</th>
      </tr>
      {
    recent.map((items:any, index) => (
    <tr key={index} className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
        <td className="px-4 py-3">{items.id}</td>
        <td className="px-4 py-3">{items.profile}</td>
        <td className="px-4 py-3">{items.firstname}</td>
        <td className="px-4 py-3">{items.lastname}</td>
        <td className="px-4 py-3">{items.gender}</td>
        <td className="px-4 py-3">{items.dob}</td>
        <td className="px-4 py-3">{items.phone}</td>
        <td className="px-4 py-3">{items.email}</td>
        <td className="px-4 py-3">
          <button className="bg-green-400 text-white hover:bg-green-500 p-2 rounded-lg m-1">View All</button>
          <button className="bg-red-400 text-white hover:bg-red-500 p-2 rounded-lg m-1">Delete</button>
          <button className="bg-blue-400 text-white hover:bg-blue-500 p-2 rounded-lg m-1">Update</button>
        </td>
      </tr>))
      }
    </table>
    </div>
    </TabPane>
    </Tabs>
    </div>
    </>
  )
}
