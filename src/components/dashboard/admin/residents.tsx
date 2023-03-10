// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Tabs, Modal, Spin, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import Alert from '../../alerts'
import ruser from '../../../images/users.png'
import pill from '../../../images/Pills.jpg'
import pill1 from '../../../images/Pills1.jpg'
import pill2 from '../../../images/Pills2.jpg'
import { frontEndPoints, backEndPoints } from '../../../utils/enums'
import { useApi } from '../../../utils/api'
import { apiBaseUrl } from '../../../utils/env'
import { api } from '../../../utils/apiRequest'
const { TabPane } = Tabs
export default function ViewResidents () {
  const { residentid } : any = useParams()
  const callback = (key:any) => { console.log(key) }
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const handleOk = () => {
    setConfirmLoading(true)
    setVisible(false)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }
  // const [visible2, setVisible2] = useState(false)
  // const [confirmLoading2, setConfirmLoading2] = useState(false)
  // const handleOk2 = () => {
  //   setConfirmLoading2(true)
  //   setTimeout(() => {
  //     setVisible2(false)
  //     setConfirmLoading2(false)
  //   }, 2000)
  // }
  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleO = () => {
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  // modal did not administer
  const [DidNotModalVisible, setDidNotModalVisible] = useState(false)
  const showModalNotAdmin = () => {
    setDidNotModalVisible(true)
  }
  const handleOky = () => {
    setDidNotModalVisible(false)
  }
  const handleCancl = () => {
    setDidNotModalVisible(false)
  }
  // modal home administer
  const [HomeModalVisible, setHomeModalVisible] = useState(false)
  const showModalHome = () => {
    setHomeModalVisible(true)
  }
  const handleOkyy = () => {
    setHomeModalVisible(false)
  }
  const handleCancll = () => {
    setHomeModalVisible(false)
  }
  // self  administer
  const [SelfModalVisible, setSelfModalVisible] = useState(false)
  const showModalSelf = () => {
    setSelfModalVisible(true)
  }
  const handleOkyyy = () => {
    setSelfModalVisible(false)
  }
  const handleCanclll = () => {
    setSelfModalVisible(false)
  }
  // const { TextArea } = Input
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

  const [MedicalOrder, setMedicalOrder] = useState([])
  useEffect(() => {
    setLoading(true)
    const getAllOrder = async () => {
      const urlPath = `${backEndPoints.RESIDENT_ORDERS}/${residentid}`
      try {
        const response = await api.get(urlPath)
        console.log(response)
        if (response.data.data !== null) {
          setLoading(false)
          setMedicalOrder(response.data.data)
        }
      } catch (error) {}
    }
    getAllOrder()
  }, [])
  const imagePath = `${apiBaseUrl}/${profile}`
  const [messaging, setMessaging] = useState('')
  const [initial, setInitial] = useState('')
  const [day, setDay] = useState('')
  const [period, setPeriod] = useState('')
  const AdministerOrder = async (orderId:any, result:any) => {
    setLoading(true)
    const currentdate = new Date()
    const currentMonth = currentdate.getMonth() + 1
    const todayDate = currentdate.getDate() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getFullYear()
    const administerPath = `${backEndPoints.ADMINIST_MAR}/${orderId.toString()}`
    const signficationPath = `${backEndPoints.SIGNIFICATION}`
    const resAdmin = await api.put(administerPath, {
      initial: initial.toString(),
      time: period.toString(),
      result: result,
      date: todayDate,
      periodValue: '',
      CurrentMonth: currentMonth.toString(),
      residentID: residentid.toString(),
      day: day.toString()
    })
    try {
      if (resAdmin.data !== null) {
        const resSign = await api.post(signficationPath, {
          orderId: orderId.toString(),
          initial: initial.toString(),
          name: fullname.toString(),
          date: todayDate,
          time: period.toString(),
          residentID: residentid.toString()
        })
        try {
          if (resSign.data !== null) {
            setMessaging('Administer successfull')
            setLoading(false)
          }
        } catch (error) {
          setMessaging('Administed')
          setLoading(false)
        }
      } else {
        setTimeout(() => {
          setMessaging(resAdmin.data.message)
          setLoading(false)
        }, 2000)
      }
    } catch (error) {
      setMessaging('new order can not be added')
      setLoading(false)
    }
  }
  // ===LATE
  const [linitial, setLinitial] = useState('')
  const [lday, setLday] = useState('')
  const [lperiod, setLperiod] = useState('')
  const [why, setWhy] = useState('')
  const LateAdministerOrder = async (orderId:any, result:any) => {
    setLoading(true)
    console.log(period)
    const currentdate = new Date()
    const currentMonth = currentdate.getMonth() + 1
    const todayDate = currentdate.getDate() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getFullYear()
    const administerPath = `${backEndPoints.ADMINIST_MAR}/${orderId.toString()}`
    const response = await api.put(administerPath, {
      initial: linitial.toString(),
      time: lperiod.toString(),
      result: result,
      date: todayDate,
      periodValue: why,
      CurrentMonth: currentMonth.toString(),
      residentID: residentid.toString(),
      day: lday.toString()
    })
    try {
      if (response.data !== null) {
        setMessaging('Administered')
        setLoading(false)
      } else {
        setTimeout(() => {
          setMessaging(response.data.message)
          setLoading(false)
        }, 2000)
      }
    } catch (error) {
      setMessaging('new order can not be added')
      setLoading(false)
    }
  }
  // === Didn't administer
  const [dinitial, setdInitial] = useState('')
  const [dday, setdDay] = useState('')
  const [dperiod, setdPeriod] = useState('')
  const [dwhy, setdWhy] = useState('')
  const DidNotAdministerOrder = async (orderId:any, result:any) => {
    setLoading(true)
    console.log(period)
    const currentdate = new Date()
    const currentMonth = currentdate.getMonth() + 1
    const todayDate = currentdate.getDate() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getFullYear()
    const administerPath = `${backEndPoints.ADMINIST_MAR}/${orderId.toString()}`
    const response = await api.put(administerPath, {
      initial: dinitial.toString(),
      time: dperiod.toString(),
      result: result,
      date: todayDate,
      periodValue: dwhy,
      CurrentMonth: currentMonth.toString(),
      residentID: residentid.toString(),
      day: dday.toString()
    })
    try {
      if (response.data !== null) {
        setMessaging('Submit Successfull')
        setLoading(false)
      } else {
        setTimeout(() => {
          setMessaging(response.data.message)
          setLoading(false)
        }, 2000)
      }
    } catch (error) {
      setMessaging('new order can not be added')
      setLoading(false)
    }
  }
  // === Home health
  const [hinitial, sethInitial] = useState('')
  const [hday, sethDay] = useState('')
  const [hperiod, sethPeriod] = useState('')
  const HomeAdministerOrder = async (orderId:any, result:any) => {
    setLoading(true)
    console.log(period)
    const currentdate = new Date()
    const currentMonth = currentdate.getMonth() + 1
    const todayDate = currentdate.getDate() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getFullYear()
    const administerPath = `${backEndPoints.ADMINIST_MAR}/${orderId.toString()}`
    const response = await api.put(administerPath, {
      initial: hinitial.toString(),
      time: hperiod.toString(),
      result: result,
      date: todayDate,
      periodValue: '',
      CurrentMonth: currentMonth.toString(),
      residentID: residentid.toString(),
      day: hday.toString()
    })
    try {
      if (response.data !== null) {
        setMessaging('Submit Successfull')
        setLoading(false)
      } else {
        setTimeout(() => {
          setMessaging(response.data.message)
          setLoading(false)
        }, 2000)
      }
    } catch (error) {
      setMessaging('new order can not be added')
      setLoading(false)
    }
  }
  // === self administer
  const [sinitial, setsInitial] = useState('')
  const [sday, setsDay] = useState('')
  const [speriod, setsPeriod] = useState('')
  const SelfAdministerOrder = async (orderId:any, result:any) => {
    setLoading(true)
    console.log(period)
    const currentdate = new Date()
    const currentMonth = currentdate.getMonth() + 1
    const todayDate = currentdate.getDate() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getFullYear()
    const administerPath = `${backEndPoints.ADMINIST_MAR}/${orderId.toString()}`
    const response = await api.put(administerPath, {
      initial: sinitial.toString(),
      time: speriod.toString(),
      result: result,
      date: todayDate,
      periodValue: '',
      CurrentMonth: currentMonth.toString(),
      residentID: residentid.toString(),
      day: sday.toString()
    })
    try {
      if (response.data !== null) {
        setMessaging('Submit Successfull')
        setLoading(false)
      } else {
        setTimeout(() => {
          setMessaging(response.data.message)
          setLoading(false)
        }, 2000)
      }
    } catch (error) {
      setMessaging('new order can not be added')
      setLoading(false)
    }
  }

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
      <div className="grid md:grid-cols-2 gap-4">
      {
              MedicalOrder.map((item:any, index) => {
                return (
        <div key={index} className="flex flex-wrap md:w-4/4 p-1 bg-blue-100  border-blue-400 border-2 rounded-xl">
            <div className="w-1/4  p-5 text-center align-center item-center">
                <img src={pill} alt=""/>
            </div>
            <div className="w-3/4 gap-1 grid">
                  <div className="flex flex-wrap">
                  <div className="p-3 flex flex-wrap ">
                    <div className="w-3/4  gap-1">
                      <p className="font-bold text-lg text-gray-600">{item.routineMedOrder}</p>
                      <p className="font-bold text-xs text-black-400">{item.description}</p>
                      <p className="text-md"><span className="font-bold"><i className="fa fa-calendar  text-gray-400  rounded p-2"></i>Time Per Day:</span>{item.timesperday}</p>
                      <span className="text-md"><span className="font-bold"><i className="fa fa-thumb-tack  text-gray-500  rounded p-2"></i>Dose Per Day:</span> {item.dosePerday} </span>
                      <span className="text-md"><span className="font-bold"><i className="fa fa-clock-o  text-gray-500  rounded p-2"></i></span><b>Morning:</b> {item.morningtimes} &nbsp;&nbsp; <b>Noon:</b> {item.noontimes} &nbsp;&nbsp; <b>Night:</b> {item.nighttimes}</span>
                     </div>
                    <div className="w-1/4">
                      <span className="font-bold text-lg text-gray-600">
                        <button onClick={() => setVisible(true)} className="bg-blue-400 w-full hover:bg-blue-500 text-white font-bold p-1 m-1 rounded-xl">
                          Administer
                        </button>
                          <Modal
                              title="Administer"
                              centered
                              visible={visible}
                              onOk={handleOk}
                              confirmLoading={confirmLoading}
                              onCancel={() => setVisible(false)}
                              width={700}
                              footer={[
                                <Button key="back" onClick={handleOk}>
                                  Return
                                </Button>,
                                <Button key="submit" type="primary" loading={loading} onClick={() =>
                                  AdministerOrder(item.orderId, 'AD')} >
                                  Administer
                                </Button>

                              ]}

                          >
                           <form>
                          <Alert message={messaging}/>
                         <div className="grid">

                          <div className="p-2">
                            <label>initial</label>
                            <input type="text" value={initial} onChange={(e:any) => setInitial(e.target.value)} className="w-full p-2 border"/>
                          </div>

                          <div className="p-2">
                            <label>Day</label>
                            <select onChange={(e:any) => setDay(e.target.value)} className="w-full p-2 border">
                              <option value="1">day 1</option>
                              <option value="2">day 2</option>
                              <option value="3">day 3</option>
                              <option value="4">day 4</option>
                              <option value="5">day 5</option>
                              <option value="6">day 6</option>
                              <option value="7">day 7</option>
                              <option value="8">day 8</option>
                              <option value="9">day 9</option>
                              <option value="10">day 10</option>
                              <option value="11">day 11</option>
                              <option value="12">day 12</option>
                              <option value="13">day 13</option>
                              <option value="14">day 14</option>
                              <option value="15">day 15</option>
                              <option value="16">day 16</option>
                              <option value="17">day 17</option>
                              <option value="18">day 18</option>
                              <option value="19">day 19</option>
                              <option value="20">day 20</option>
                              <option value="21">day 21</option>
                              <option value="22">day 22</option>
                              <option value="23">day 23</option>
                              <option value="24">day 24</option>
                              <option value="25">day 25</option>
                              <option value="26">day 26</option>
                              <option value="27">day 27</option>
                              <option value="28">day 28</option>
                              <option value="29">day 29</option>
                              <option value="30">day 30</option>
                              <option value="31">day 31</option>
                            </select>
                          </div>
                          <div className="p-2">
                            <label>Period Value</label>
                            <select onChange={(e:any) => setPeriod(e.target.value)} className="w-full p-2 border">
                              <option value="">Select Time</option>
                              <option value={item.morningtimes}> Morning: {item.morningtimes} </option>
                              <option value={item.noontimes}> Noon: {item.noontimes} </option>
                              <option value={item.nighttimes}> Night: {item.nighttimes} </option>
                              <option value={item.timesperday}> Other: {item.timesperday} </option>
                            </select>
                          </div>
                          <div className="p-2">

                          </div>
                          <div className="p-2">
                          {/* {loading1
                            ? <span className='w-full p-2 text-white bg-blue-400 cursor-pointer'>Saving...</span>
                            : <button type="submit" name="send" className='w-full p-2 text-white bg-blue-400 hover:bg-blue-500 cursor-pointer'>Administer</button>} */}
                          </div>
                          </div>
                          </form>
                          </Modal>
                      </span>
                      <span className="font-bold text-lg text-gray-600">
                          <button onClick={showModal} className="bg-yellow-600 w-full hover:bg-yellow-500 text-white font-bold p-1 m-1 rounded-xl">
                          Late
                          </button>
                          <Modal title="Late To Administer" visible={isModalVisible}
                          onOk={handleO}
                          onCancel={handleCancel} width={700}
                          footer={[
                            <Button key="back" onClick={handleO}>
                              Return
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={() =>
                              LateAdministerOrder(item.orderId, 'Q')} >
                              Late Administer
                            </Button>

                          ]}
                          >
                          <form>
                          <Alert message={messaging}/>
                         <div className="grid">
                          <div className="p-2">
                            <label>initial</label>
                            <input type="text" value={linitial} onChange={(e:any) => setLinitial(e.target.value)} className="w-full p-2 border"/>
                          </div>
                          <div className="p-2">
                            <label>Why do you late (Result)</label>
                            <input type="text"value={why} onChange={(e:any) => setWhy(e.target.value)} className="w-full p-2 border"/>

                          </div>
                          <div className="p-2">
                            <label>Day</label>
                            <select onChange={(e:any) => setLday(e.target.value)} className="w-full p-2 border">
                              <option value="1">day 1</option>
                              <option value="2">day 2</option>
                              <option value="3">day 3</option>
                              <option value="4">day 4</option>
                              <option value="5">day 5</option>
                              <option value="6">day 6</option>
                              <option value="7">day 7</option>
                              <option value="8">day 8</option>
                              <option value="9">day 9</option>
                              <option value="10">day 10</option>
                              <option value="11">day 11</option>
                              <option value="12">day 12</option>
                              <option value="13">day 13</option>
                              <option value="14">day 14</option>
                              <option value="15">day 15</option>
                              <option value="16">day 16</option>
                              <option value="17">day 17</option>
                              <option value="18">day 18</option>
                              <option value="19">day 19</option>
                              <option value="20">day 20</option>
                              <option value="21">day 21</option>
                              <option value="22">day 22</option>
                              <option value="23">day 23</option>
                              <option value="24">day 24</option>
                              <option value="25">day 25</option>
                              <option value="26">day 26</option>
                              <option value="27">day 27</option>
                              <option value="28">day 28</option>
                              <option value="29">day 29</option>
                              <option value="30">day 30</option>
                              <option value="31">day 31</option>
                            </select>
                          </div>
                          <div className="p-2">
                            <label>Period Value</label>
                            <select onChange={(e:any) => setLperiod(e.target.value)} className="w-full p-2 border">
                              <option value="morning"> Morning: {item.morningtimes} </option>
                              <option value="noon"> Noon: {item.noontimes} </option>
                              <option value="might"> Night: {item.nighttimes} </option>
                            </select>
                          </div>
                          <div className="p-2">

                          </div>
                          </div>
                          </form>
                          </Modal>
                      </span>
                    </div>
                  </div>

                  </div>
            </div>
            </div>
                )
              }
              )
        }

        </div>
    </TabPane>
    <TabPane tab="Did not Administer" key="2">
    <div className="grid md:grid-cols-2 gap-4">
    {
              MedicalOrder.map((item:any, index) => {
                return (
        <div key={index} className="flex flex-wrap md:w-4/4 p-1 bg-red-100  border-red-400 border-2 rounded-xl">
            <div className="w-1/4  p-5 text-center align-center item-center">
                <img src={pill1} alt=""/>
            </div>
            <div className="w-3/4 gap-1 grid">
                  <div className="flex flex-wrap">
                  <div className="p-3 flex flex-wrap">
                    <div className="w-3/4  gap-1">
                      <p className="font-bold text-lg text-gray-600">{item.routineMedOrder}</p>
                      <p className="font-bold text-xs text-black-400">{item.description}</p>
                      <p className="text-md"><span className="font-bold"><i className="fa fa-calendar  text-gray-400  rounded p-2"></i>Time Per Day:</span>{item.timesperday}</p>
                      <span className="text-md"><span className="font-bold"><i className="fa fa-thumb-tack  text-gray-500  rounded p-2"></i>Dose Per Day:</span> {item.dosePerday} </span><br/>
                      <span className="text-md"><span className="font-bold"><i className="fa fa-clock-o  text-gray-500  rounded p-2"></i></span><b>Morning:</b> {item.morningtimes} &nbsp;&nbsp; <b>Noon:</b> {item.noontimes} &nbsp;&nbsp; <b>Night:</b> {item.nighttimes}</span>
                     </div>
                    <div className="w-1/4">
                      <span className="font-bold text-lg text-gray-600">
                        <button onClick={showModalNotAdmin} className="bg-red-400 w-full hover:bg-red-500 text-white font-bold p-1 m-1 rounded-xl">
                          Does Not
                        </button>
                        <Modal title="Doe not  Administer" visible={DidNotModalVisible}
                          onOk={handleOky}
                          onCancel={handleCancl} width={700}
                          footer={[
                            <Button key="back" onClick={handleCancl}>
                              Return
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={() =>
                              DidNotAdministerOrder(item.orderId, '/')} >
                              Does Not Administer
                            </Button>

                          ]}
                          >
                          <form>
                          <Alert message={messaging}/>
                         <div className="grid">
                         <div className="p-2">
                            <label>initial</label>
                            <input type="text" value={dinitial} onChange={(e:any) => setdInitial(e.target.value)} className="w-full p-2 border"/>
                          </div>

                          <div className="p-2">
                            <label>Day</label>
                            <select onChange={(e:any) => setdDay(e.target.value)} className="w-full p-2 border">
                              <option value="1">day 1</option>
                              <option value="2">day 2</option>
                              <option value="3">day 3</option>
                              <option value="4">day 4</option>
                              <option value="5">day 5</option>
                              <option value="6">day 6</option>
                              <option value="7">day 7</option>
                              <option value="8">day 8</option>
                              <option value="9">day 9</option>
                              <option value="10">day 10</option>
                              <option value="11">day 11</option>
                              <option value="12">day 12</option>
                              <option value="13">day 13</option>
                              <option value="14">day 14</option>
                              <option value="15">day 15</option>
                              <option value="16">day 16</option>
                              <option value="17">day 17</option>
                              <option value="18">day 18</option>
                              <option value="19">day 19</option>
                              <option value="20">day 20</option>
                              <option value="21">day 21</option>
                              <option value="22">day 22</option>
                              <option value="23">day 23</option>
                              <option value="24">day 24</option>
                              <option value="25">day 25</option>
                              <option value="26">day 26</option>
                              <option value="27">day 27</option>
                              <option value="28">day 28</option>
                              <option value="29">day 29</option>
                              <option value="30">day 30</option>
                              <option value="31">day 31</option>
                            </select>
                          </div>
                          <div className="p-2">
                            <label>Period Value</label>
                            <select onChange={(e:any) => setdPeriod(e.target.value)} className="w-full p-2 border">
                              <option value="">Select Time</option>
                              <option value={item.morningtimes}> Morning: {item.morningtimes} </option>
                              <option value={item.noontimes}> Noon: {item.noontimes} </option>
                              <option value={item.nighttimes}> Night: {item.nighttimes} </option>
                              <option value={item.timesperday}> Other: {item.timesperday} </option>
                            </select>
                          </div>
                          <div className="p-2">
                            <label>Why does not Administer</label>
                            <textarea value={dwhy} onChange={(e:any) => setdWhy(e.target.value)} className="w-full p-2 border"></textarea>
                          </div>
                          </div>
                          </form>
                          </Modal>
                      </span>
                    </div>
                  </div>

                  </div>
            </div>
            </div>
                )
              }
              )
        }
        </div>
    </TabPane>
    <TabPane tab="Home Health" key="3">
    <div className="grid md:grid-cols-2 gap-4">
    {
              MedicalOrder.map((item:any, index) => {
                return (
        <div key={index} className="flex flex-wrap md:w-4/4 p-1 bg-green-100  border-green-400 border-2 rounded-xl">
            <div className="w-1/4  p-5 text-center align-center item-center">
                <img src={pill2} className="rounded-full" alt=""/>
            </div>
            <div className="w-3/4 gap-1 grid">
                  <div className="flex flex-wrap">
                  <div className="p-3 flex flex-wrap">
                    <div className="w-3/4  gap-1">
                      <p className="font-bold text-lg text-gray-600">{item.routineMedOrder}</p>
                      <p className="font-bold text-xs text-black-400">{item.description}</p>
                      <p className="text-md"><span className="font-bold"><i className="fa fa-calendar  text-gray-400  rounded p-2"></i>Time Per Day:</span>{item.timesperday}</p>
                      <span className="text-md"><span className="font-bold"><i className="fa fa-thumb-tack  text-gray-500  rounded p-2"></i>Dose Per Day:</span> {item.dosePerday} </span><br/>
                      <span className="text-md"><span className="font-bold"><i className="fa fa-clock-o  text-gray-500  rounded p-2"></i></span><b>Morning:</b> {item.morningtimes} &nbsp;&nbsp; <b>Noon:</b> {item.noontimes} &nbsp;&nbsp; <b>Night:</b> {item.nighttimes}</span>
                     </div>
                    <div className="w-1/4">
                      <span className="font-bold text-lg text-gray-600">
                        <button onClick={showModalHome} className="bg-green-400 w-full hover:bg-green-500 text-white font-bold p-1 m-1 rounded-xl">
                          Home Health
                        </button>
                        <Modal title="Self Administer" visible={HomeModalVisible}
                          onOk={handleOkyy}
                          onCancel={handleCancll} width={700}
                          footer={[
                            <Button key="back" onClick={handleCancll}>
                              Return
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={() =>
                              HomeAdministerOrder(item.orderId, 'H/H')} >
                              Home health / Administer
                            </Button>

                          ]}
                          >
                          <form>
                          <Alert message={messaging}/>
                         <div className="grid">
                         <div className="p-2">
                            <label>initial</label>
                            <input type="text" value={hinitial} onChange={(e:any) => sethInitial(e.target.value)} className="w-full p-2 border"/>
                          </div>
                          <div className="p-2">
                            <label>Day</label>
                            <select onChange={(e:any) => sethDay(e.target.value)} className="w-full p-2 border">
                              <option value="1">day 1</option>
                              <option value="2">day 2</option>
                              <option value="3">day 3</option>
                              <option value="4">day 4</option>
                              <option value="5">day 5</option>
                              <option value="6">day 6</option>
                              <option value="7">day 7</option>
                              <option value="8">day 8</option>
                              <option value="9">day 9</option>
                              <option value="10">day 10</option>
                              <option value="11">day 11</option>
                              <option value="12">day 12</option>
                              <option value="13">day 13</option>
                              <option value="14">day 14</option>
                              <option value="15">day 15</option>
                              <option value="16">day 16</option>
                              <option value="17">day 17</option>
                              <option value="18">day 18</option>
                              <option value="19">day 19</option>
                              <option value="20">day 20</option>
                              <option value="21">day 21</option>
                              <option value="22">day 22</option>
                              <option value="23">day 23</option>
                              <option value="24">day 24</option>
                              <option value="25">day 25</option>
                              <option value="26">day 26</option>
                              <option value="27">day 27</option>
                              <option value="28">day 28</option>
                              <option value="29">day 29</option>
                              <option value="30">day 30</option>
                              <option value="31">day 31</option>
                            </select>
                          </div>
                          <div className="p-2">
                            <label>Period Value</label>
                            <select onChange={(e:any) => sethPeriod(e.target.value)} className="w-full p-2 border">
                              <option value="">Select Time</option>
                              <option value={item.morningtimes}> Morning: {item.morningtimes} </option>
                              <option value={item.noontimes}> Noon: {item.noontimes} </option>
                              <option value={item.nighttimes}> Night: {item.nighttimes} </option>
                              <option value={item.timesperday}> Other: {item.timesperday} </option>
                            </select>
                          </div>
                          </div>
                          </form>
                          </Modal>
                      </span>
                    </div>
                  </div>

                  </div>
            </div>
            </div>
                )
              }
              )
        }
        </div>
    </TabPane>
    <TabPane tab="Self Administration" key="4">
    <div className="grid md:grid-cols-2 gap-4">
    {
              MedicalOrder.map((item:any, index) => {
                return (
        <div key={index} className="flex flex-wrap md:w-4/4 p-1 bg-yellow-100  border-yellow-400 border-2 rounded-xl">
            <div className="w-1/4  p-5 text-center align-center item-center">
                <img src={pill2} className="rounded-full" alt=""/>
            </div>
            <div className="w-3/4 gap-1 grid">
                  <div className="flex flex-wrap">
                  <div className="p-3 flex flex-wrap">
                    <div className="w-3/4  gap-1">
                      <p className="font-bold text-lg text-gray-600">{item.routineMedOrder}</p>
                      <p className="font-bold text-xs text-black-400">{item.description}</p>
                      <p className="text-md"><span className="font-bold"><i className="fa fa-calendar  text-gray-400  rounded p-2"></i>Time Per Day:</span>{item.timesperday}</p>
                      <span className="text-md"><span className="font-bold"><i className="fa fa-thumb-tack  text-gray-500  rounded p-2"></i>Dose Per Day:</span> {item.dosePerday} </span><br/>
                      <span className="text-md"><span className="font-bold"><i className="fa fa-clock-o  text-gray-500  rounded p-2"></i></span><b>Morning:</b> {item.morningtimes} &nbsp;&nbsp; <b>Noon:</b> {item.noontimes} &nbsp;&nbsp; <b>Night:</b> {item.nighttimes}</span>
                     </div>
                    <div className="w-1/4">
                      <span className="font-bold text-lg text-gray-600">
                        <button onClick={showModalSelf} className="bg-yellow-500 w-full hover:bg-yellow-400 text-white font-bold p-1 m-1 rounded-xl">
                          Self Administer
                        </button>
                        <Modal title="Self Administer Administer" visible={SelfModalVisible}
                          onOk={handleOkyyy}
                          onCancel={handleCanclll} width={700}
                          footer={[
                            <Button key="back" onClick={handleCanclll}>
                              Return
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={() =>
                              SelfAdministerOrder(item.orderId, 'I/S')} >
                              Self Administer
                            </Button>

                          ]}
                          >
                          <form>
                          <Alert message={messaging}/>
                         <div className="grid">
                         <div className="p-2">
                            <label>initial</label>
                            <input type="text" value={sinitial} onChange={(e:any) => setsInitial(e.target.value)} className="w-full p-2 border"/>
                          </div>

                          <div className="p-2">
                            <label>Day</label>
                            <select onChange={(e:any) => setsDay(e.target.value)} className="w-full p-2 border">
                              <option value="1">day 1</option>
                              <option value="2">day 2</option>
                              <option value="3">day 3</option>
                              <option value="4">day 4</option>
                              <option value="5">day 5</option>
                              <option value="6">day 6</option>
                              <option value="7">day 7</option>
                              <option value="8">day 8</option>
                              <option value="9">day 9</option>
                              <option value="10">day 10</option>
                              <option value="11">day 11</option>
                              <option value="12">day 12</option>
                              <option value="13">day 13</option>
                              <option value="14">day 14</option>
                              <option value="15">day 15</option>
                              <option value="16">day 16</option>
                              <option value="17">day 17</option>
                              <option value="18">day 18</option>
                              <option value="19">day 19</option>
                              <option value="20">day 20</option>
                              <option value="21">day 21</option>
                              <option value="22">day 22</option>
                              <option value="23">day 23</option>
                              <option value="24">day 24</option>
                              <option value="25">day 25</option>
                              <option value="26">day 26</option>
                              <option value="27">day 27</option>
                              <option value="28">day 28</option>
                              <option value="29">day 29</option>
                              <option value="30">day 30</option>
                              <option value="31">day 31</option>
                            </select>
                          </div>
                          <div className="p-2">
                            <label>Period Value</label>
                            <select onChange={(e:any) => setsPeriod(e.target.value)} className="w-full p-2 border">
                              <option value="">Select Time</option>
                              <option value={item.morningtimes}> Morning: {item.morningtimes} </option>
                              <option value={item.noontimes}> Noon: {item.noontimes} </option>
                              <option value={item.nighttimes}> Night: {item.nighttimes} </option>
                              <option value={item.timesperday}> Other: {item.timesperday} </option>
                            </select>
                          </div>
                          </div>
                          </form>
                          </Modal>
                      </span>
                    </div>
                  </div>

                  </div>
            </div>
            </div>
                )
              }
              )
        }
        </div>
    </TabPane>
  </Tabs>
    </div>
               </div>

    </>
  )
}
