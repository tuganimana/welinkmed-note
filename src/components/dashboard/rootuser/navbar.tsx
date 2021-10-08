// eslint-disable-next-line no-use-before-define
import React from 'react'
import Sidebar from '../Sidebar'
import Topbar from './Topbar'
import { useHistory } from 'react-router-dom'

import { frontEndPoints, welinkTokens, accountCategory } from '../../../utils/enums'
export default function DashboardRoot (props: any) {
  const history = useHistory()
  const accountType = localStorage.getItem(welinkTokens.accountType)
  const token = localStorage.getItem(welinkTokens.userToken)
  if (accountType === null || accountType !== accountCategory.ROOT || token === null) {
    localStorage.removeItem(welinkTokens.userToken)
    localStorage.removeItem(welinkTokens.accountType)
    history.push(frontEndPoints.LOGIN)
  }
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
