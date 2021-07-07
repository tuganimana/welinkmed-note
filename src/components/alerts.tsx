// eslint-disable-next-line no-use-before-define
import React from 'react'
export default function Alert (props:any) {
  if (props.message) {
    return (<>
    <p className="px-4 md:px-8 lg:px-8  rounded-xl shadow-xl font-bold bg-green-400 text-gray-100 w-full md:w-1/2"> {props.message}</p>
    </>)
  }
  return (<>
        </>)
}
