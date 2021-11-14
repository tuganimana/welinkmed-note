// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Carousel } from 'antd'
// import grp1 from '../../../images/grp1.png'
import Homenav from './homenav'
import { frontEndPoints } from '../../../utils/enums'
export default function Slider () {
  const home = [
    {
      title: 'Your are welcome to WelinkMed',
      descrip: 'Access Medication Information   Securely in Real Time  ',
      caption: 'bench'
    },
    {
      title: 'All in our Community WeLinkMed',
      descrip: 'Welinkmed has dramatically reduced medication errors, paperwork inefficiencies and administrative duties',
      caption: 'bench'
    },
    {
      title: 'With Us  WeLinkMed',
      descrip: 'Welinkmed offers inclusive medication management solutions for healthcare facilities everywhere.',
      caption: 'bench'
    }
  ]

  return (
      <>
  <div className="max-w-full h-auto bg-opacity-70">
    {/* <Carousel autoplay>
    {
      home.map((homeitem:any, index) => {
        return (
          <div key={index} className="bgImageWeb h-screen">
            <div className="md:pl-32 md:pr-32 p-4 w-full bg-red-800 h-screen bg-opacity-70">
              <Homenav/>
              <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="container md:mt-64 mx-auto grid gap-6 w-full pt-24 ">
                <span className="text-5xl md:w-1/2 font-bold text-white">{homeitem.title}</span>
                <span className="text-md md:w-1/2 font-bold text-gray-100">{homeitem.descrip}</span>
                <span>
                 <a href={frontEndPoints.LOGIN}><button className="bg-red-700 text-white font-semibold hover:bg-red-800 font-medium p-3 pl-12 pr-12 m-2 rounded-full">Get Started</button></a>
                  <button className="bg-gray-100 text-red-600 font-semibold hover:bg-gray-200 font-medium p-3 pl-12 pr-12 m-2 rounded-full">Read More</button>
                </span>
              </div>
            </div>
          </div>

        )
      })

    }
    </Carousel>
     */}
 <div className="w-full h-screen">
  <Carousel autoplay>
    <div>

    <Carousel dots={ false } autoplay>
    {
      home.map((homeitem:any, index) => {
        return (
          <div key={index} className="bgImageWeb h-screen">
            <div className="md:pl-32 md:pr-32 p-4 w-full bg-red-800 h-screen bg-opacity-70">
              <Homenav/>
              <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="container md:mt-64 mx-auto grid gap-6 w-full pt-24 ">
                <span className="text-5xl md:w-1/2 font-bold text-white">{homeitem.title}</span>
                <span className="text-md md:w-1/2 font-bold text-gray-100">{homeitem.descrip}</span>
                <span>
                 <a href={frontEndPoints.LOGIN}><button className="bg-red-700 text-white font-semibold hover:bg-red-800 font-medium p-3 pl-12 pr-12 m-2 rounded-full">Get Started</button></a>
                  <button className="bg-gray-100 text-red-600 font-semibold hover:bg-gray-200 font-medium p-3 pl-12 pr-12 m-2 rounded-full">Read More</button>
                </span>
              </div>
            </div>
          </div>

        )
      })

    }
    </Carousel>

    </div>
  </Carousel>,
  </div>
    </div>
    </>
  )
}
