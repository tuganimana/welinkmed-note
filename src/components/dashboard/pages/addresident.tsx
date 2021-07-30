// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Tabs } from 'antd'
import Overview from './overview'
const { TabPane } = Tabs
export default function Addresident () {
  const callback = (key:any) => {
    console.log(key)
  }
  return (
    <>
    <div className="px-2 py-2">
      <h5 className="font-semibold">Add Resident Information</h5>
    </div>
    <div className="mx-4">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Overview" key="1">
     <Overview/>
    </TabPane>
  </Tabs>
    </div>
    </>
  )
}
