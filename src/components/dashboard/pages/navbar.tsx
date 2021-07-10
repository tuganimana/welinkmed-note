// eslint-disable-next-line no-use-before-define
import React from 'react'
import Sidebar from '../Sidebar'
import Topbar from './Topbar'

export default function Dashboard (props: any) {
  return (
        <div className="lg:flex w-full bg-lightBlue">
            <div className="lg:w-1/6 ">
                <Sidebar/>
            </div>
            <div className="lg:w-5/6 bg-gray-100">
                <Topbar/>
                <hr className="mt-1"/>
                {props.children}
            </div>
        </div>
  )
}
