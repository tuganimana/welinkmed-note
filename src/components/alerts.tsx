// eslint-disable-next-line no-use-before-define
import React from 'react'
export default function Alert (props:any) {
  if (props.message) {
    return (<>
    <p className="px-2 py-1 mb-2 w-full rounded-3xl shadow-xl font-bold bg-red-400 text-gray-100 "> {props.message}</p>
    </>)
  }
  return (<>
        </>)
}
