// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Progress } from 'antd'
export default function ClientWelcome () {
  return (<>
      <div className="container p-4 md:mt-8">
        <div className="flex  flex-wrap">
          <div className="lg:w-4/6 w-full p-2 grid">
            <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
            </div>
            <div className="flex flex-wrap space-between">
                  <div className="w-1/2 md:w-1/3 w-full p-1">
                    <div className="bg-white shadow-2xl p-4">
                       <div className="">
                         <h3 className="text-green-500 text-4xl text-center"><i className="fa fa-bar-chart" aria-hidden="true"></i></h3>
                         <h5 className="text-center text-lg font-bold">32 Dosages</h5>
                       </div>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/3 w-full p-1">
                    <div className="bg-white shadow-2xl p-4">
                       <div className="">
                         <h3 className="text-yellow-500 text-4xl text-center"><i className="fa fa-clock-o" aria-hidden="true"></i></h3>
                         <h5 className="text-center text-lg font-bold">2 times/day</h5>
                       </div>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/3 w-full p-1">
                    <div className="bg-white shadow-2xl p-4">
                       <div className="">
                         <h3 className="text-red-500 text-4xl text-center"><i className="fa fa-calendar-check-o" aria-hidden="true"></i></h3>
                         <h5 className="text-center text-lg font-bold">9 Days</h5>
                       </div>
                    </div>
                  </div>
            </div>
            <div className="flex flex-wrap md:mt-16 mt-4">
              <div className="w-full md:w-3/3 p-2 bg-white rounded-xl">
                <span className="font-bold p-2 text-green-00">Medication Progress recorded</span>
                <div className="mt-8">
                <div className="flex flex-wrap p-1">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span>Amoxicilyn</span>
                </div>
                <div className="w-3/4 p-2 grid">
                <Progress percent={30} />
                 </div>
              </div>
              <div className="flex flex-wrap p-1">
                <div className="w-1/4  text-center align-center item-center">
                  <span>Amoxicilyn</span>
                </div>
                <div className="w-3/4 p-2 grid">
                <Progress percent={50} status="active" />
                 </div>
              </div>
              <div className="flex flex-wrap p-1">
                <div className="w-1/4  text-center align-center item-center">
                  <span>Paracetamol</span>
                </div>
                <div className="w-3/4 p-2 grid">
                <Progress percent={70} status="exception" />
                 </div>
              </div>
              <div className="flex flex-wrap p-1">
                <div className="w-1/4  text-center align-center item-center">
                  <span>Injection due</span>
                </div>
                <div className="w-3/4 p-2 grid">
                <Progress percent={100} />
                 </div>
              </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/6 w-full bg-white rounded-lg md:mt16 mt-4 grid">
            <div className="md:mt-4 p-2">
              <span className="font-bold">Alerts</span>
            </div>
            <div className="grid gap-2 mb-4">
              <div className="flex flex-wrap p-2 bg-green-100 shadow-md rounded-xl mx-4">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-check text-4xl text-green-400"></i></span>
                </div>
                <div className="w-3/4 p-2 grid">
                <p className="text-sm">welcome to WELINK MED,seems like you have now completed your dosage program.</p>
                </div>
              </div>
              <div className="flex flex-wrap p-2 bg-green-100 shadow-md rounded-xl mx-4">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-exclamation text-4xl text-red-400"></i></span>
                </div>
                <div className="w-3/4 p-2 grid">
                   <p className="text-sm">welcome to WELINK MED,seems like you have failed to take  your medication.</p>
                </div>
              </div>
              <div className="flex flex-wrap p-2 bg-green-100 shadow-md rounded-xl mx-4">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-envelope-open text-4xl text-purple-400"></i></span>
                </div>
                <div className="w-3/4 p-2 grid">
                <p className=" text-sm">welcome to WELINK MED,seems like you have some pending messages for your medication.</p>
                </div>
              </div>
              <div className="flex flex-wrap p-2 bg-green-100 shadow-sm rounded-xl mx-4">
                <div className="w-1/4  p-2 text-center align-center item-center">
                  <span><i className="fa fa-clock-o text-4xl text-yellow-400"></i></span>
                </div>
                <div className="w-3/4 p-2 grid">
                <p className=" text-sm">welcome to WELINK MED, you can change some hours for your medication.</p>
                </div>
              </div>
              <div className="text-center item-center">
              <span className="font-bold text-green-500 "><a href="#">Load more</a></span>
            </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
