// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Tabs, Select, Modal, Button } from 'antd'
import { useApi } from '../../../utils/api'
import bank from '../../../images/bank-transfer.png'
import visa from '../../../images/visa.png'
import cashless from '../../../images/cashless-payment.png'
import paypal from '../../../images/paypal.png'
import maestro from '../../../images/maestro.png'
const { Option } = Select
const { TabPane } = Tabs
export default function PaymentsRoot () {
  const [userData, setUserData] = useState([])

  const callback = (key:any) => {
    console.log(key)
  }
  const [ModalVisible, setModalVisible] = useState(false)
  const showModalPay = () => {
    setModalVisible(true)
  }
  const handleOky = () => {
    setModalVisible(false)
  }
  const handleCancl = () => {
    setModalVisible(false)
  }
  const children = []
  children.push(<Option value="" key="1" >Select</Option>)

  useEffect(() => {
    useApi.getAllUser().then((response) => {
      console.log(response)
      if (response) {
        setUserData(response.data)
      }
      console.log(userData)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  const PaymentReq = [
    {
      routine: 'Paracotitamor',
      freq: 'fr31'
    }
  ]
  return (
    <>
    <div className="px-2 py-2">
      <h5 className="font-semibold px-4">Payment</h5>
    </div>
    <div className="mx-8">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Payments" className="" key="1">
        <div className="flex flex-wrap">
            <div className="sm:w-4/6 md:w-4/6 w-full">
            <div className="mb-4 bg-white rounded-xl mx-2 p-3">
              <div className="py-2">
              <span className="font-bold text-blue-500">Make Payments</span>
              </div>
              <div className="">
                  <form>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-2">
                            <label className="text-md text-gray-500">Origanization</label>
                            <Select mode="tags" style={{ width: '100%' }} placeholder="Select organization">
                                {children}
                            </Select>
                        </div>
                        <div className="p-2">
                            <label className="text-md text-gray-500">Resident</label>
                            <Select mode="tags" style={{ width: '100%' }} placeholder="add resident">
                                {children}
                            </Select>
                        </div>
                        <div className="p-2">
                            <label className="text-md text-gray-500">Med / routine</label>
                            <Select mode="tags" style={{ width: '100%' }} placeholder="select routine">
                                {children}
                            </Select>
                        </div>
                        <div className="p-2">
                            <label className="text-md text-gray-500">Med / routine</label>
                            <Select mode="tags" style={{ width: '100%' }} placeholder="50$" disabled>
                                {children}
                            </Select>
                        </div>
                        <div className="p-2">
                            <span onClick={showModalPay} className="bg-green-400 text-white cursor-pointer hover:bg-green-500 p-2 rounded-lg m-1">Pay Now</span>
                        </div>

                        <Modal title="Make Payment" visible={ModalVisible}
                          onOk={handleOky}
                          onCancel={handleCancl} width={600}
                          footer={[
                            <Button key="back" onClick={handleCancl}>
                              Return
                            </Button>

                          ]}
                          >
                          <div className="flex flex-wrap">
                            <div className="w-full">
                                <label className="text-md font-bold text-gray-600">Choose Method</label><br/>
                                <div className="w-full">
                                    <span className="float-left bg-blue-300 rounded-t p-2 text-white font-bold w-full">
                                        <input type="radio" name="method" className="" id=""/> PlayPal
                                        <img src={paypal} alt="" className="float-right w-10 h-10"/>
                                    </span>
                                </div>
                                <div className="w-full">
                                    <span className="float-left bg-blue-200 rounded-b p-2 text-white font-bold w-full">
                                        <input type="radio" name="method" className="" id=""/> Debit/credid card
                                        <img src={maestro} alt="" className="float-right w-10 h-10"/>
                                        <img src={visa} alt="" className="float-right w-10 h-10"/>
                                    </span>
                                </div>
                            </div>
                            <div className="w-full p-2">
                                <label className="text-md font-bold text-gray-600">Card number</label><br/>
                                <div className="w-full">
                                        <input type="text" name="" className="w-full rounded border-2 border-blue-400 p-2 text-black bg-blue-100" placeholder="Card number" id=""/>
                                </div>
                            </div>
                            <div className="w-1/2 p-2">
                                <label className="text-md font-bold text-gray-600">Expiry</label><br/>
                                <div className="w-full">
                                        <input type="text" name="" className="w-full rounded border-2 border-blue-400 p-2 text-black bg-blue-100" placeholder="MM/YY" id=""/>
                                </div>
                            </div>
                            <div className="w-1/2 p-2">
                                <label className="text-md font-bold text-gray-600">CVC</label><br/>
                                <div className="w-full">
                                        <input type="text" name="" className="w-full rounded border-2 border-blue-400 p-2 text-black bg-blue-100" placeholder="123" id=""/>
                                </div>
                            </div>

                        <div className="p-2">
                            <button className="bg-green-400 text-gray-100 cursor-pointer hover:bg-green-500 p-2 font-bold rounded-lg m-1">Finish And Pay</button>
                        </div>
                          </div>
                          </Modal>
                    </div>
                  </form>
              </div>
            </div>
            </div>
            <div className="sm:w-2/6 md:w-2/6 w-full">
            <div className="mb-4 bg-white rounded-xl mx-2 p-3">
              <div className="py-2">
              <span className="font-bold text-blue-500">Payment Method</span>
              </div>
              <div className="flex flex-wrap">
              <img src={paypal} alt="" className="w-20 m-2"/>
              <img src={visa} alt="" className="w-20 m-2"/>
              <img src={cashless} alt="" className="w-20 m-2"/>
              <img src={bank} alt="" className="w-20 m-2"/>
              </div>
            </div>
            </div>
        </div>
    </TabPane>
    <TabPane tab="Payment Request" key="2">
    <div className="bg-white p-2 rounded-xl">
              <div className="py-2">
              <span className="font-bold">All Payments Request</span>
              </div>
    <table className="table-auto rounded-t-xl  bg-blue-200 text-gray-800">
                <tr className="text-left  border-b-2 border-blue-300">
                  <th className="px-4 py-3">Organization</th>
                  <th className="px-4 py-3">Resident</th>
                  <th className="px-4 py-3">Order</th>
                  <th className="px-4 py-3">category</th>
                  <th className="px-4 py-3">Payment Method</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
                {
                    PaymentReq.map((items:any, index) => (
                    <tr key={index} className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
                        <td className="px-4 py-3">Bench</td>
                        <td className="px-4 py-3">philbert</td>
                        <td className="px-4 py-3">Routin Az</td>
                        <td className="px-4 py-3">Prn</td>
                        <td className="px-4 py-3">Online Banking</td>
                        <td className="px-4 py-3">49$</td>
                        <td className="px-4 py-3">17/5/2020</td>
                        <td className="px-4 py-3"><span className="bg-green-400 px-2 py-1 rounded-full font-bold text-gray-100">Approved</span></td>
                   <td className="px-4 py-3">
                            <button className="bg-green-400 text-white hover:bg-green-500 p-2 rounded-lg m-1">Approve</button>
                            <button className="bg-red-400 text-white hover:bg-red-500 p-2 rounded-lg m-1">Cancel</button>
                        </td>
                    </tr>
                    ))
                }
              </table>
    </div>
    </TabPane>
    </Tabs>
    </div>
    </>
  )
}
