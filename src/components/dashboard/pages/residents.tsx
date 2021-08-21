// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Tabs, Statistic, Input, Modal, Spin } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import ruser from '../../../images/users.png'
import pill from '../../../images/Pills.jpg'
import pill1 from '../../../images/Pills1.jpg'
import pill2 from '../../../images/Pills2.jpg'
import { frontEndPoints } from '../../../utils/enums'
import { useApi } from '../../../utils/api'
import { apiBaseUrl } from '../../../utils/env'
const { TabPane } = Tabs
export default function ViewResidents () {
  const { residentid } : any = useParams()

  const { Countdown } = Statistic
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
  function onFinish () { console.log('finished!') }
  const callback = (key:any) => { console.log(key) }
  function overChange (val: any) {
    if (4.95 * 1000 > val && val > 5 * 1000) {
      console.log('changed!')
    }
  }
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }
  const [visible2, setVisible2] = useState(false)
  const [confirmLoading2, setConfirmLoading2] = useState(false)
  const handleOk2 = () => {
    setConfirmLoading2(true)
    setTimeout(() => {
      setVisible2(false)
      setConfirmLoading2(false)
    }, 2000)
  }
  const { TextArea } = Input
  const urlPath = `${frontEndPoints.RESIDENT_EDIT}/${residentid}`
  const [fullname, setFullname] = useState('')
  const [profile, setProfile] = useState('')
  const [loading, setLoading] = useState(false)
  const [dob, setDob] = useState('')
  useEffect(() => {
    setLoading(true)
    useApi.getSingleresident(`/${residentid}`)
      .then((res:any) => {
        if (res) {
          setLoading(false)
          setFullname(`${res.data.firstName} ${res.data.lastName}`)
          setProfile(res.data.profile)
          setDob(res.data.dateOfBirth)
        }
        setLoading(false)
      })
      .catch((error) => {
        console.log(`${error}`)
      })
  }, [])
  const imagePath = `${apiBaseUrl}/${profile}`
  if (loading) return (<><div className='justify-center mt-64 mx-auto items-center text-center'><Spin tip='Fetching.....'/></div></>)
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
            {profile === null ? <img src={ruser} alt="" className="rounded-l-xl w-full" /> : <img src={imagePath} alt="" className="rounded-l-xl w-full" />}
            </div>
            <div className="w-full lg:w-1/2 grid p-2 ">
                <span className="font-bold text-xl">{fullname}</span>
                <span className="text-md"><span className="font-bold"><i className="fa fa-home  text-blue-500  rounded p-2"></i>Room:</span> Bench home </span>
                <span className="text-md"><span className="font-bold"><i className="fa fa-calendar  text-yellow-500  rounded p-2"></i>DOB:</span> {dob} </span>
                <span className="text-md"><span className="font-bold"><i className="fa fa-calendar-check-o  text-green-600  rounded p-2"></i>Age:</span> 41 </span>
                <span className="text-md"><span className="font-bold"><i className="fa fa-user-md  text-yellow-600  rounded p-2"></i>Allergies:</span> noe </span>
            </div>
        </div>
        </div>
        <div className="w-full md:w-1/2 w-full p-1">
              <a href={urlPath}><div className="float-right"> <span className="bg-gray-600  font-bold px-4 text-gray-100 py-2 w-64">
              <EditOutlined/> Edit resident infos</span> </div></a>
        </div>
    </div>

    <h5 className="font-semibold text-blue-400 mt-4 text-2xl">PRNs Available <span className="text-sm font-normal text-gray-400">/ All order Type</span></h5>
    <div className="mx-4">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Administer" key="1">
        <div className="flex flex-wrap md:w-3/4 p-1 bg-blue-100  border-blue-400 border-2 rounded-xl">
            <div className="w-1/4  p-5 text-center align-center item-center">
                <img src={pill} alt=""/>
            </div>
            <div className="w-2/4 gap-1 grid">
            <span className="font-bold text-lg text-gray-600">HYPDROXYNEZ PARM 25 MG CAP</span>
            <span className="font-bold text-xs text-black-400">Tare 1 Capsulle by mount three times as need for ancety</span>
            <span className="text-md"><span className="font-bold"><i className="fa fa-calendar  text-gray-400  rounded p-2"></i>Last Administed:</span> 14th july 2021 </span>
            <span className="text-md"><span className="font-bold"><i className="fa fa-thumb-tack  text-gray-500  rounded p-2"></i>Last Quality:</span> 1 </span>
            </div>
            <div className="w-1/4 gap-1 grid">
             <span className="font-bold text-lg text-gray-600">
                 <button className="bg-blue-400 w-full hover:bg-blue-500 text-white font-bold p-2 rounded-xl">
                 <Countdown value={deadline} onFinish={onFinish} />Administer</button>
             </span>
             <span className="font-bold text-lg text-gray-600">
                 <button onClick={() => setVisible(true)} className="bg-yellow-600 w-full hover:bg-yellow-500 text-white font-bold p-2 rounded-xl">
                 <Countdown onChange={overChange} value={Date.now() + 3 * 1000} />
                 Late Administer
                 </button>
                 <Modal
                    title="Late To Administer"
                    centered
                    visible={visible}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={() => setVisible2(false)}
                    width={700}
                >
                <div className="grid">
                <div className="p-2">
                    <label>Why do you late not Administer (*required)</label>
                    <TextArea rows={4} />
                </div>
                    </div>
                </Modal>
             </span>
            </div>
        </div>
    </TabPane>
    <TabPane tab="Did not Administer" key="2">
    <div className="flex flex-wrap md:w-2/3 p-1 bg-red-100  border-red-400 border-2 rounded-xl">
            <div className="w-1/4  p-5 text-center align-center item-center">
                <img src={pill1} alt=""/>
            </div>
            <div className="w-2/4 gap-1 grid">
            <span className="font-bold text-lg text-gray-600">AMOXLINE KoP 21 CaP</span>
            <span className="font-bold text-xs text-black-400">Tare 1 Capsulle by mounth three times per day</span>
            <span className="text-md"><span className="font-bold"><i className="fa fa-calendar  text-gray-400  rounded p-2"></i>Last Administed :</span> 4th May 2021 </span>
            <span className="text-md"><span className="font-bold"><i className="fa fa-thumb-tack  text-gray-500  rounded p-2"></i>Last Quality:</span> 1 </span>
            </div>
            <div className="w-1/4 gap-1 grid">
             <span className="font-bold text-lg text-gray-600">
                 <button onClick={() => setVisible2(true)} className="bg-red-300 w-full hover:bg-red-400 text-white font-bold p-3 rounded-xl">
                 Did not Administer</button>
                <Modal
                    title="Did not Administer"
                    centered
                    visible={visible2}
                    onOk={handleOk2}
                    confirmLoading={confirmLoading2}
                    onCancel={() => setVisible2(false)}
                    width={700}
                >
                <div className="grid">
                <div className="p-2">
                    <label>Why did not Administer (*required)</label>
                    <TextArea rows={4} />
                </div>
                    </div>
                </Modal>
             </span>
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
