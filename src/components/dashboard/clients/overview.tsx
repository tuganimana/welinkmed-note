// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Select } from 'antd'
const { Option } = Select

export default function Overview () {
  const children = []
  for (let i = 10; i < 36; i++) {
    children.push(<Option value={i.toString(36) + i} key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
  }

  function handleChange (value:any) {
    console.log(`selected ${value}`)
  }
  return (
        <>
         <div className="p-4 bg-white rounded-xl shadows-xl mx-4">
    <div className="grid md:grid-cols-2 gap-4">
          <div className="p-2">
            <label className="text-md">Firstname</label>
            <input type="text" name="" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Lastname</label>
            <input type="text" name="" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Resident State</label>
            <select className="w-full p-2 border">
              <option>Select here</option>
              <option>Newyork</option>
              <option>Atlanta</option>
              <option>Maine</option>
              <option>Texas</option>
              <option>Georgia</option>
              <option>Mossachussets</option>
            </select>
          </div>
          <div className="p-2">
            <label> Religion</label>
            <input type="text" name="" className="w-full p-2 border" />
          </div>
          <div className="p-2">
            <label>Maritial Status</label>
            <select className="w-full p-2 border">
              <option>Select here</option>
              <option>Single</option>
              <option>Divorced</option>
              <option>None of above</option>
            </select>
          </div>
          <div className="p-2">
            <label>Date of Birth</label>
            <input type="date" name="" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Attending Physician</label>
            <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['Aron10']}
      onChange={handleChange}
    >
      {children}
    </Select>
          </div>
          <div className="p-2">
            <label>Added Date</label>
            <input type="date" className="w-full p-2 border"/>
          </div>
          <div className="p-2">
            <label>Additional Physician</label>
            <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['Aron10']}
      onChange={handleChange}
    >
      {children}
    </Select>
          </div>
          <div className="p-2">
            <label>Admitting Physician</label>
            <select className="w-full p-2 borderl">
              <option>Select here</option>
              <option>Karori</option>
              <option>Kewe</option>
              <option>None of above</option>
            </select>
          </div>
          <div className="mb-4">
               <input type="submit" value="Add Resident" className="bg-green-400 cursor-pointer appearance-none  rounded-full w-full md:w-64 mt-8 py-2 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />
          </div>
        </div>
      </div>
        </>
  )
}
