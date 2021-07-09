// eslint-disable-next-line no-use-before-define
import React from 'react'
import '../../css/dashboard.css'
import { useForm } from 'react-hook-form'
import { LoginType } from '../../utils/types'
export default function Signin () {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginType>()
  const handleLogin = async (data:LoginType) => {
    console.log(data.username)
  }
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
                                   <input type="submit" value="Sign In" placeholder="Password" className="bg-green-500 cursor-pointer appearance-none  rounded-full w-full py-2 px-4 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />
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
