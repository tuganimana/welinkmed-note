// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import '../../css/dashboard.css'
import { useForm } from 'react-hook-form'
import { LoginType } from '../../utils/types'
import { useHistory } from 'react-router-dom'
import { Spin } from 'antd'
import { frontEndPoints, welinkTokens, accountCategory } from '../../utils/enums'
import { useApi } from '../../utils/api'
import Alert from '../alerts'
export default function Signin () {
  const history = useHistory()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginType>()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrormessage] = useState('')
  const existingToken = localStorage.getItem(welinkTokens.userToken)
  if (existingToken) {
    const category = localStorage.getItem(welinkTokens.accountType)
    switch (category) {
      case accountCategory.ADMIN:
        history.push(frontEndPoints.DASHBOARD)
        break
      case accountCategory.CLIENTS:
        history.push(frontEndPoints.USERADMIN)
        break
      case accountCategory.ROOT:
        history.push(frontEndPoints.ROOT)
        break
    }
  }
  const handleLogin = async (data:LoginType) => {
    setLoading(true)
    const api = await useApi.loginApiRequest(data.username, data.password)
    const myaccount = api?.token || 'undefined'
    const jwt = require('jsonwebtoken')
    if (myaccount === 'undefined') {
      setErrormessage(api.messages)
      setLoading(false)
    } else {
      const decoded = jwt.decode(myaccount)
      const { accountType, id } = decoded

      localStorage.setItem(welinkTokens.userToken, api.token)
      localStorage.setItem(welinkTokens.accountType, accountType)
      localStorage.setItem(welinkTokens.userID, id)
      setTimeout(() => {
        setLoading(false)
        if (accountType === accountCategory.ADMIN) {
          history.push(frontEndPoints.DASHBOARD)
          setErrormessage(api.message)
        } else if (accountType === accountCategory.CLIENTS) {
          history.push(frontEndPoints.USERADMIN)
          setErrormessage(api.message)
        } else if (accountType === accountCategory.ROOT) {
          history.push(frontEndPoints.ROOT)
          setErrormessage(api.message)
        }
      }, 2000)
    }
    //
  }
  if (loading) return (<><div className='justify-center pt-96 mx-auto items-center text-center'><Spin size='large' tip='signin.....'/></div></>)
  return (<>
   <div className="bg-gray-100 flex flex-col justify-center items-center h-screen py-10">
       <div className="bgImage max-w-5xl bg-gray-300 h-64 w-full rounded-tl-3xl rounded-br-3xl shadow-2xl">
         <div className="text-center justify-center items-center p-14">
             <span className="font-bold text-4xl text-gray-400">WeLink Med</span>
         </div>
       </div>
       <div className="bg-white -mt-24 shadow-2xl rounded-tl-3xl rounded-br-3xl  overflow-hidden">
            <div className="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-tl-3xl rounded-br-3xl  mx-auto text-center">
                <div className="px-2 -mt-6">
                    <div className="">
                        <h1 className="font-normal text-center text-3xl text-gray-400 font-medium leading-loose my-3 w-full">Sign In</h1>
                        <div className="w-full">
                          <Alert message={errorMessage}/>
                            <form onSubmit={ handleSubmit((data) => { handleLogin(data) })}>
                                <div className="mb-2">
                                   <input type="email" {...register('username', { required: '* This field is required' })} placeholder="User Name or Email" className="bg-gray-100 appearance-none border-2 border-green-500 rounded-full w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-green-500" />
                                </div>
                                  <span className="text-red-600 text-xs">{errors.username && errors.username.message}</span>
                                <div className="mb-2">
                                   <input type="password" {...register('password', { required: '* This field is required', minLength: { value: 6, message: 'The minimum character is 6' } })} placeholder="Password" className="bg-gray-100 appearance-none border-2 border-green-500 rounded-full w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-green-500" />
                                </div>
                                <span className="text-red-600 text-xs">{errors.password && errors.password.message}</span>
                                <div className="mb-4">
                                   <span className=" text-sm mb-4"><a href="" className="text-blue-400">forgot password?</a></span>
                                </div>
                                <div className="mb-4">
                                  {loading ? <span>Logging.....</span> : <input type="submit" value="Sign In" placeholder="Password" className="bg-red-400 cursor-pointer appearance-none  rounded-full w-full py-2 px-4 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />}
                                </div>
                                <div className="">
                                    <a href="" className="mr-6">
                                       <i className="fa fa-facebook border-b-4 border-blue-500 text-blue-500 hover:border-blue-900 hover:text-blue-900  text-xl rounded-tl-3xl rounded-br-3xl p-2"></i>
                                    </a>
                                    <a href="" className="mr-6">
                                       <i className="fa fa-twitter border-b-4 border-blue-400 text-blue-300 hover:border-blue-500 hover:text-blue-500 text-xl rounded-tl-3xl rounded-br-3xl p-2" aria-hidden="true"></i>
                                    </a>
                                    <a href="" className="mr-4">
                                       <i className="fa fa-linkedin border-b-4 border-blue-600 text-blue-600 hover:border-blue-400 hover:text-blue-400 text-xl rounded-tl-3xl rounded-br-3xl p-2"></i>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
  </>)
}
