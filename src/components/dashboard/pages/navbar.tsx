// eslint-disable-next-line no-use-before-define
import React from 'react'
import Sidebar from '../Sidebar'
export default function Dashboard (props: any) {
  return (
        <div className="lg:flex w-full bg-lightBlue gap-5">
            <div className="lg:w-1/5">
                <Sidebar/>
            </div>
            {/* main body */}
            <div className="lg:w-4/5 bg-green-400 p-3 lg:p-5">
                {props.children}
            </div>
        </div>
  )
}
