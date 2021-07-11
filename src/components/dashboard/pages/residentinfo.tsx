// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Tabs } from 'antd'
import person1 from '../../../images/person1.jpg'
import pill from '../../../images/Pills.jpg'
import pill1 from '../../../images/Pills1.jpg'
import pill2 from '../../../images/Pills2.jpg'
const { TabPane } = Tabs
export default function ResidentInfo () {
  const callback = (key:any) => {
    console.log(key)
  }
  return (
    <>
    <div className="p-2">
    <div className="px-2 py-2">
      <h5 className="font-semibold">Resident Information</h5>
    </div>
    <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 w-full p-1 shadow-md">
        <div className="bg-gray-100  rounded-xl flex flex-wrap p-1">
            <div className="w-full lg:w-1/2">
                <img src={person1} alt="" className="rounded" />
            </div>
            <div className="w-full lg:w-1/2 grid p-2 ">
                <span className="font-bold text-xl">Mike Rickson</span>
                <span className="text-md"><span className="font-bold"><i className="fa fa-home  text-blue-500  rounded p-2"></i>Room:</span> Bench home </span>
                <span className="text-md"><span className="font-bold"><i className="fa fa-calendar  text-yellow-500  rounded p-2"></i>DOB:</span> 14th july 1989 </span>
                <span className="text-md"><span className="font-bold"><i className="fa fa-calendar-check-o  text-green-600  rounded p-2"></i>Age:</span> 41 </span>
                <span className="text-md"><span className="font-bold"><i className="fa fa-user-md  text-yellow-600  rounded p-2"></i>Allergies:</span> noe </span>
            </div>
        </div>
        </div>
    </div>

    <h5 className="font-semibold text-blue-400 mt-4 text-2xl">PRNs Available <span className="text-sm font-normal text-gray-400">/ All order Type</span></h5>
    <div className="mx-4">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Administer" key="1">
        <div className="flex flex-wrap md:w-2/3 p-1 bg-blue-100  border-blue-400 border-2 rounded-xl">
            <div className="w-1/4  p-5 text-center align-center item-center">
                <img src={pill} alt=""/>
            </div>
            <div className="w-3/4 gap-1 grid">
            <span className="font-bold text-lg text-gray-600">HYPDROXYNEZ PARM 25 MG CAP</span>
            <span className="font-bold text-xs text-black-400">Tare 1 Capsulle by mount three times as need for ancety</span>
            <span className="text-md"><span className="font-bold"><i className="fa fa-calendar  text-gray-400  rounded p-2"></i>Last Administed:</span> 14th july 2021 </span>
            <span className="text-md"><span className="font-bold"><i className="fa fa-thumb-tack  text-gray-500  rounded p-2"></i>Last Quality:</span> 1 </span>
            </div>
        </div>
    </TabPane>
    <TabPane tab="Did not Administer" key="2">
    <div className="flex flex-wrap md:w-2/3 p-1 bg-red-100  border-red-400 border-2 rounded-xl">
            <div className="w-1/4  p-5 text-center align-center item-center">
                <img src={pill1} alt=""/>
            </div>
            <div className="w-3/4 gap-1 grid">
            <span className="font-bold text-lg text-gray-600">AMOXLINE KoP 21 CaP</span>
            <span className="font-bold text-xs text-black-400">Tare 1 Capsulle by mounth three times per day</span>
            <span className="text-md"><span className="font-bold"><i className="fa fa-calendar  text-gray-400  rounded p-2"></i>Last Administed :</span> 4th May 2021 </span>
            <span className="text-md"><span className="font-bold"><i className="fa fa-thumb-tack  text-gray-500  rounded p-2"></i>Last Quality:</span> 1 </span>
            </div>
        </div>
    </TabPane>
    <TabPane tab="Home Health" key="3">
    <div className="flex flex-wrap md:w-2/3 p-1 bg-green-100  border-green-400 border-2 rounded-xl">
            <div className="w-1/4  p-5 text-center align-center item-center">
                <img src={pill2} alt="" className="rounded-full"/>
            </div>
            <div className="w-3/4 gap-1 grid">
            <span className="font-bold text-lg text-gray-600">Home Health</span>
            <span className="font-bold text-xs text-black-400">Take Medical on time</span>
            <span className="font-bold text-xs text-black-400">Socail Activity</span>
            <span className="font-bold text-xs text-black-400">Sporty activity</span>
            </div>
        </div>
    </TabPane>
    <TabPane tab="Self Administration" key="4">

    <div className="flex flex-wrap md:w-2/3 p-1 bg-blue-100  border-blue-100 border-2 rounded-xl">
            <div className="w-1/4  p-5 text-center align-center item-center">
                <img src={pill2} alt="" className="rounded-full"/>
            </div>
            <div className="w-3/4 gap-1 grid">
            <span className="font-bold text-lg text-gray-600">Self Administration</span>
            <span className="font-bold text-xs text-black-400">Nehjds chjds hjsx nca jcxqw nmcsh xsjhw cnmscw chj xwqoiui cwiu csjhuiw
                h xsjhw cnmscw chj xwqoiui cwiu csjhuiw
                h xsjhw cnmscw chj xwqoiui cwiu csjhuiwh xsjhw cnmscw chj xwqoiui
                cwiu csjhuiwh xsjhw cnmscw chj xwqoiui cwiu csjhuiwh xsjhw cnmscw chj xwqoiui cwiu csjhuiwh xsjhw cnmscw chj xwqoiui cwiu csjhuiwh xsjhw cnmscw chj xwqoiui cwiu csjhuiwh xsjhw cnmscw chj xwqoiui cwiu csjhuiwh xsjhw cnmscw chj xwqoiui cwiu csjhuiwh xsjhw cnmscw chj xwqoiui cwiu csjhuiwh xsjhw cnmscw chj xwqoiui cwiu csjhuiwh xsjhw cnmscw chj xwqoiui cwiu csjhuiwh xsjhw cnmscw chj
                xwqoiui cwiu csjhuiwh xsjhw cnmscw chj
                xwqoiui cwiu csjhuiw
            </span>
            </div>
        </div>
    </TabPane>
  </Tabs>
    </div>
    </div>
    </>
  )
}
