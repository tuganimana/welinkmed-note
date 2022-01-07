// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Tabs } from 'antd'
import OverviewUser from './overview'
import AdminiResidents from './adminresident'
const { TabPane } = Tabs
export default function AddresidentUser () {
  const callback = (key:any) => {
    console.log(key)
  }
  return (
    <>
    <div className="px-2 py-2">
      <h5 className="font-semibold">Edit Resident Information</h5>
    </div>
    <div className="mx-4">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Overview" key="1">
     <OverviewUser/>
    </TabPane>
    <TabPane tab="All residents" key="2">
    <div>
              <label className="block text-sm font-medium text-gray-700">
              All residents
              </label>
              <div className="mb-4">
              <AdminiResidents/>
              </div>
            </div>
    </TabPane>
  </Tabs>
    </div>
    </>
  )
}
