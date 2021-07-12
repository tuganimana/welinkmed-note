// eslint-disable-next-line no-use-before-define
import React from 'react'
import Homenav from './homenav'

export default function Home (props: any) {
  return (
        <div className=" w-full bg-lightBlue">
                <Homenav/>
                <hr className="mt-1"/>
                {props.children}
            </div>
  )
}
