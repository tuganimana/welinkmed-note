// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { backEndPoints } from '../../../../utils/enums'
import { api } from '../../../../utils/apiRequest'

export default function Residents () {
  const [clients, setRecents] = useState([])
  useEffect(() => {
    const getResident = async () => {
      const response = await api.get(`${backEndPoints.CREATE_RESIDENT}`)
      if (response.status === 201) {
        setRecents(response.data.data)
      }
    }
    getResident()
  }, [])
  return (
        <>
        <table className="rounded-t-lg table-auto  bg-gray-200 text-gray-800">
          <tr className="text-left border-b-2 border-blue-300">
            <th className="px-4 py-3">Full Name</th>
            <th className="px-4 py-3">Date of Birth</th>
            <th className="px-4 py-3">Maritial Status</th>
            <th className="px-4 py-3">resident State</th>
            <th className="px-4 py-3">Religion</th>
            <th className="px-4 py-3">addedDate</th>
            <th className="px-4 py-3">Admitting Physician</th>
            <th className="px-4 py-3">Additional Physician</th>
            <th className="px-4 py-3">Drugs Medication</th>
            <th className="px-4 py-3">Medication Type</th>
            <th className="px-4 py-3">Health AZ</th>
            <th className="px-4 py-3">Organization</th>
          </tr>
          {
        clients.map((items:any, index) => (
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
            <td className="px-4 py-3">{items.HealthAZ}</td>
            </tr>))
          }
        </table>
          </>
  )
}
