// eslint-disable-next-line no-use-before-define
import React from 'react'
import Sidebar from '../Sidebar'
import Topbar from './Topbar'

export default function Dashboard (props: any) {
  return (
        <div className="lg:flex w-full bg-lightBlue  gap-5">
            <div className="lg:w-1/6 ">
                <Sidebar/>
            </div>
            <div className="lg:w-5/6 bg-gray-100">
                <Topbar/>
                {props.children}
            </div>
        </div>
  )
}
