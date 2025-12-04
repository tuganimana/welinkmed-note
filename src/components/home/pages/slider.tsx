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
 <div className="w-full h-screen relative overflow-hidden">
  <Carousel autoplay dots={false} effect="fade" className="h-full">
    {
      home.map((homeitem:any, index) => {
        return (
          <div key={index} className="bgImageWeb h-screen relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-red-800/75 to-blue-900/70"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="md:pl-32 md:pr-32 p-4 w-full">
                <Homenav/>
              </div>
              <div className="flex-1 flex items-center">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
                  <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="max-w-3xl space-y-6 md:space-y-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      {homeitem.title}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-100 leading-relaxed">
                      {homeitem.descrip}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a href={frontEndPoints.LOGIN}>
                        <button className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-110 text-lg">
                          <span className="relative z-10">Get Started</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </a>
                      <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-110 text-lg">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    }
  </Carousel>
  </div>
    </div>
    </>
  )
}
