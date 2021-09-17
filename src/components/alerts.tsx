// eslint-disable-next-line no-use-before-define
import React from 'react'
export default function Alert (props:any) {
  if (props.message) {
    return (<>
    <p className="px-2 py-1 mb-2 w-full rounded-3xl shadow-xl font-bold bg-green-400 text-gray-100 text-center"> {props.message}</p>
    </>)
  } else {
    return (<></>)
  }
}
