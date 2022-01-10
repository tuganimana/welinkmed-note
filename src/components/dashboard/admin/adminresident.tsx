// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { welinkTokens, backEndPoints } from '../../../utils/enums'
import { api } from '../../../utils/apiRequest'

export default function AdminiResidents (props:any) {
  const [clients, setRecents] = useState([])
  const [messaging, setMessaging] = useState('')
  console.log(messaging)
  const userId = localStorage.getItem(welinkTokens.userID) || ''
  useEffect(() => {
    const getResident = async () => {
      const response = await api.get(`${backEndPoints.RESIDENT_ORGANIZATION}/${userId}`)
      if (response.status === 201) {
        setRecents(response.data.data)
      }
    }
    getResident()
  }, [])
  return (
        <>
        {messaging}
        <table className="rounded-t-lg table-auto  bg-gray-200 text-gray-800">
          <tr className="text-left border-b-2 border-blue-300">
            <th className="px-4 py-3">Full Names</th>
            <th className="px-4 py-3">Date of Birth</th>
            <th className="px-4 py-3">Maritial Status</th>
            <th className="px-4 py-3">Resident State</th>
            <th className="px-4 py-3">Religion</th>
            <th className="px-4 py-3">addedDate</th>
            <th className="px-4 py-3">Admitting Physician</th>
            <th className="px-4 py-3">Additional Physician</th>
            <th className="px-4 py-3">Drugs Medication</th>
            <th className="px-4 py-3">Medication Type</th>
            <th className="px-4 py-3">Health AZ</th>
            <th className="px-4 py-3">Action</th>
          </tr>
          {
        clients.map((items:any, index) => {
          const deleteResident = async () => {
            const urldeletePath = `${backEndPoints.CREATE_RESIDENT}/${items.residentId}`
            try {
              const response = await api.delete(urldeletePath)
              if (response.data !== null) {
                setMessaging(response.data)
              }
            } catch (error) {}
          }
          return (
          <tr key={index} className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
            <td className="px-4 py-3">{items.firstName} {items.lastName}</td>
            <td className="px-4 py-3">{items.dateOfBirth}</td>
            <td className="px-4 py-3">{items.maritialStatus}</td>
            <td className="px-4 py-3">{items.residentSate}</td>
            <td className="px-4 py-3">{items.religion}</td>
            <td className="px-4 py-3">{items.addedDate}</td>
            <td className="px-4 py-3">{items.admittingPhysician}</td>
            <td className="px-4 py-3">{items.additionalPhysician}</td>
            <td className="px-4 py-3">{items.drugsMedication}</td>
            <td className="px-4 py-3">{items.medicationType}</td>
            <td className="px-4 py-3">{items.HealthAZ}</td>
            <td className="p-2"><button onClick={deleteResident} className="bg-red-500 hover:bg-red-400 p-2 m-2 text-white hover:text-gray-100 font-bold rounded">Delete</button></td>
            </tr>)
        }) }
          </table>
          </>
  )
}
