// eslint-disable-next-line no-use-before-define
import React from 'react'
import group from '../../../images/group2.jpg'
// import group1 from '../../../images/group1.jpg'
import speed from '../../../images/icons/speedometer.png'
import eliminate from '../../../images/icons/eliminate.png'
import internetless from '../../../images/icons/internetless.png'
import reminder from '../../../images/icons/reminder.png'
import notification from '../../../images/icons/notification.png'
import identify from '../../../images/icons/identify.png'
import medicals from '../../../images/icons/medicals.png'
import document from '../../../images/icons/document.png'
import nopaperwork from '../../../images/icons/nopaperwork.png'
import safe from '../../../images/icons/safe.png'
import paperdocs from '../../../images/icons/paperdocs.png'
import Slider from './slider'
export default function Body () {
  const services = [
    {
      title: 'Document med administration with a few clicks',
      descrip: 'Document med administration with a few clicks',
      caption: 'WelinkMed',
      image: document
    },
    {
      title: 'Document treatments, vital signs, and other care items with the same workflow',
      descrip: 'Document treatments, vital signs, and other care items with the same workflow',
      caption: 'bench',
      image: medicals
    },
    {
      title: 'Eliminate missed/undocumented meds and missed PRN follow-ups',
      descrip: 'Eliminate missed/undocumented meds and missed PRN follow-ups',
      caption: 'bench',
      image: eliminate
    },
    {
      title: 'Speed up med passes by up to 50%',
      descrip: 'Speed up med passes by up to 50%',
      caption: 'bench',
      image: speed
    },
    {
      title: 'Pass meds without interruption, even if the internet is down',
      descrip: 'Pass meds without interruption, even if the internet is down',
      caption: 'bench',
      image: internetless
    },
    {
      title: 'Safely identify residents by their pictures ',
      descrip: 'Safely identify residents by their pictures',
      caption: 'bench',
      image: identify
    },
    {
      title: 'Receive reminder alerts before meds are late',
      descrip: 'Receive reminder alerts before meds are late',
      caption: 'bench',
      image: reminder
    },
    {
      title: 'Send customized notifications to key personnel via email or text',
      descrip: 'Send customized notifications to key personnel via email or text',
      caption: 'bench',
      image: notification
    }
  ]
  const ourwork = [
    {
      title: 'Take paperwork out of medication administration',
      descrip: 'Enable health care providers and pharmacies to work together to ensure effective electronic medication management, reduce risk and improve resident care.',
      caption: 'bench',
      image: nopaperwork
    },
    {
      title: 'Ensure Safe Medication Intake',
      descrip: 'Reduce risk with intuitive and streamlined eMAR that adheres to state regulations and promotes compliance.',
      caption: 'bench',
      image: safe
    },
    {
      title: 'Reduce Paper Documentation',
      descrip: 'Cut associated processing time and expense with web-based records that eliminate manual medication reconciliation.',
      caption: 'bench',
      image: paperdocs
    }
  ]
  return (
  <>
  <div className="w-full h-auto">
  <Slider/>
  </div>
  <div className="w-full h-auto bg-gray-200">
    {/* PART 1 */}
   <div className="bg-gray-200 w-full h-auto">
   <div className="md:p-8 bg-gray-200">
     <div className="grid md:grid-cols-2 gap-3">
       <div data-aos="zoom-out-right" className="p-4">
           <div className="">
             <img src={group} className="rounded-3xl w-full shadow-2xl" alt=""/>
           </div>
       </div>
        <div className="p-2">
        {/* <div data-aos="zoom-out-left" className="p-4"> */}
         <p className="font-bold w-24 pt-2 text-4xl md:mt-8 border-t-2 border-blue-400 mb-4">About</p>
         <p data-aos="zoom-out-right" className="text-md text-gray-600 leading-loose py-4 font-medium">
         Access Medication Information
                   Securely in Real Time
A Complete Medication Management Solution
Welinkmed has dramatically reduced medication errors, paperwork inefficiencies and administrative duties. Our portfolio of customers includes senior living facilities, group homes, correctional facilities, behavioral health providers and more.

         </p>
         <p> <button className="bg-red-800 hover:bg-red-700 p-2 pr-8 pl-8 text-white rounded-3xl">Read More</button></p>
       </div>
    </div>
  </div>
  </div>
    {/* PART 2 */}

   <div className="bgImageWeb1 bg-fixed">
  <div className="bg-red-900 bg-opacity-70">
   <div className="w-full md:pl-24 md:pr-24 flex flex-wrap">
       <div className="w-ful md:w-1/2 p-4 md:p-4">
           <div data-aos="flip-up" className="text-center md:mt-16 py-24">
             <span className="text-white font-bold  text-5xl">Our Service, <br/> We Provide To community!</span>
           </div>
       </div>
       <div className="w-ful md:w-1/2 flex flex-wrap p-4">
       {
        services.map((serviceitem:any, index) => {
          return (
            <div key={index} data-aos="zoom-in" className="w-full md:w-1/2 p-2 md:flex md:justify-center" data-scrollreveal="enter top over 0.4s after 0.1s">
             <div className="wrapper antialiased text-gray-900">
               <div>
                 {/* <img src={group} alt=" random imgee" className="w-full object-cover object-center rounded-3xl shadow-md" /> */}
                 <div className="rounded-t-3xl w-60 bg-white flex items-center justify-center pt-4">
                   <img className='h-12' src={serviceitem.image} alt="icon"/>
                 </div>
               <div data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500" className="relative">
                 <div className="bg-white p-4 item-center text-center rounded-b-3xl shadow-lg w-60">
                    <h4 className="mt-1 text-xl font-semibold capiltalized leading-tight truncate">{serviceitem.title}</h4>
                 <div className="mt-1">
                   <span className="text-gray-600 text-sm">
                      {serviceitem.descrip}
                    </span>
                 </div>
                 <div className="mt-2">
                   <a href="" className="bg-red-700 hover:bg-red-600 rounded pr-6 pl-6 pt-1 pb-1 shadow-xl text-white font-medium hover:text-white w-full">View more</a>
                 </div>
                 </div>
               </div>
               </div>
              </div>
             </div>
          )
        })
        }
        </div>

      </div>

  </div>
  </div>
{/*  */}
<div className="w-full h-96 bg-blue-400">
<div className="md:pl-32 pb-6 md:pr-32 bg-gray-200">
        <div className="md:max-w-7xl mx-auto">
          <div className="text-center pt-8 pb-1 grid item-center">
            <span className="text-4xl text-red-700 font-bold">eMAR</span>
            <span className="text-base pt-1 pb-6 text-gray-500">Take paperwork out of medication administration</span>
          </div>
          <div data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="700" className="flex flex-wrap">
          {
        ourwork.map((workitem:any, index) => {
          return (
          <div key={index} data-aos="fade-up"
          data-aos-duration="500" className="w-full md:w-1/3 p-2" data-scrollreveal="enter top over 0.4s after 0.1s">
            <div className="wrapper antialiased text-gray-900">
              <div data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="900">
                {/* <img src={group1} alt=" random imgee" className="w-full object-cover object-center rounded-3xl shadow-xl" /> */}
              <div className="relative px-6">
                <div data-aos="zoom-in" className="bg-white opacity-95 rounded-xl grid p-3 item-center text-center shadow-lg">
                  <div className="flex items-center justify-center pb-2">
                    <img className='h-12' src={workitem.image} alt="services icon"/>
                  </div>
                  <span className="text-red-900 text-lg font-semibold pb-2 pt-1">{workitem.title}</span>
                  <span className="text-xs font-normal text-gray-600">{workitem.descrip}</span>
                  <span className="text-md mt-2 text-red-800 font-medium">{workitem.caption}</span>
                </div>
              </div>
              </div>
              </div>
            </div>
          )
        })
        }
          </div>
          </div>
      </div>

      <div className="bgImageWeb2">
        <div className="md:pl-32 md:pr-32 p-2 bg-red-800 bg-opacity-70">
          <div data-aos="fade-up"
     data-aos-duration="3000" className="md:max-w-7xl mx-auto grid gap-6 w-full pt-24 pb-24">
            <span className="text-4xl font-bold text-white">Welinkmed Is Customized to Meet Your Specific Needs</span>
            <span className="text-md font-bold text-gray-100">
            Welinkmed’s pricing is structured as a subscription fee. The cost will vary based on the modules you choose to implement, as well as the total number of service hours you have each month. If you&apos;re interested in more specific pricing, we’d love to connect you with one of our client representatives who can assess your specific needs and provide you with a quote.
            </span>
            <span><button data-aos="zoom-out" className="bg-gray-100 hover:bg-gray-200 font-medium p-3 pl-6 pr-6 rounded-full">Get started</button></span>
          </div>
        </div>
      </div>

      <div className="md:pr-32 xm:pr-2  md:pl-32 bg-gray-200">
        <div className="md:max-w-7xl mx-auto">
          <div className="text-center pt-8 grid item-center">
            <span className="text-4xl text-red-700 font-bold">Contact Us</span>
            <span className="text-lg text-gray-500 mt-4">For more infomation , You can use the following to text to us, Thank you.....!</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-2">
              <div className="p-6 grid gap-2 bg-gray-100 rounded">
                <span data-aos="zoom-out-up" className="text-xl font-bold text-blue-400"><i className="fa fa-facebook mr-3 text-blue-800 rounded-xl  p-4 text-md"></i> We link Med</span>
                <span data-aos="zoom-out-up" className="text-xl font-bold text-green-400"><i className="fa fa-phone mr-3  text-green-400 rounded-xl  p-4 text-md"></i> +1 234 568 434 542</span>
                <span data-aos="zoom-out-up" className="text-xl font-bold text-blue-300"><i className="fa fa-twitter mr-3 text-blue-400 rounded-xl p-4 text-md"></i> We link Med</span>
                <span data-aos="zoom-out-up" className="text-xl font-bold text-blue-300"><i className="fa fa-linkedin mr-3 text-blue-300 rounded-xl p-4 text-md"></i> We link Med</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-2">
              <div className="p-6 bg-gray-100 rounded">
                <h2 className="text-3xl font-semibold text-red-800">Message</h2>
                <form data-aos="zoom-out-up" action="#">
                  <div className="w-full mt-3">
                    <input type="text" placeholder="Full Name" className="bg-white rounded appearance-none border-2 border-red-200  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-300 "/>
                  </div>
                  <div className="w-full mt-3">
                    <input type="text" placeholder="Phone number" className="bg-white rounded appearance-none border-2 border-red-200  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-300 "/>
                  </div>
                  <div className="w-full mt-3">
                    <input type="text" placeholder="Email Address" className="bg-white rounded appearance-none border-2 border-red-200 w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-300 "/>
                  </div>
                  <div className="w-full mt-3">
                    <textarea placeholder="Text You Message Here..." className="bg-white rounded appearance-none border-2 border-red-200  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-300 "></textarea>
                  </div>
                  <div className="w-full mt-3">
                    <input type="submit" value="Send Message" className="bg-red-800 text-white font-medium text-lg rounded-xl hover:bg-red-700 cursor-pointer w-full py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-300 "/>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
      </div>

      <footer className="bgImageWeb1 footer relative border-b-2">
        <div className="bg-red-700 bg-opacity-80 pt-1 ">
        <div className="container mx-auto px-16">
            <div data-aos="fade-up"
     data-aos-duration="900" className="sm:flex sm:mt-8">
                <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col p-24">
                        <span className="font-bold text-gray-100 text-xl uppercase mb-2">We Link Med Logon</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-100 text-xl uppercase mt-4 md:mt-0 mb-2">Pages</span>
                        <span className="my-2"><a href="#" className="text-gray-100 text-md hover:text-blue-500">Home</a></span>
                        <span className="my-2"><a href="#" className="text-gray-100  text-md hover:text-blue-500">About us</a></span>
                        <span className="my-2"><a href="#" className="text-gray-100 text-md hover:text-blue-500">Career</a></span>
                        <span className="my-2"><a href="#" className="text-gray-100 text-md hover:text-blue-500">Contact us</a></span>
                        <span className="my-2"><a href="#" className="text-gray-100 text-md hover:text-blue-500">Pricing</a></span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-100 text-xl uppercase mt-4 md:mt-0 mb-2">WelinkMed</span>
                        <span className="my-2"><a href="#" className="text-gray-100 text-md hover:text-blue-500">Good</a></span>
                        <span className="my-2"><a href="#" className="text-gray-100 text-md hover:text-blue-500">Creative</a></span>
                        <span className="my-2"><a href="#" className="text-gray-100 text-md hover:text-blue-500">Achiver Goals</a></span>
                        <span className="my-2"><a href="#" className="text-gray-100 text-md hover:text-blue-500">Get JOb</a></span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-100 text-xl uppercase mt-4 md:mt-0 mb-2">More infomation</span>
                        <span className="my-2"><a href="#" className="text-gray-100  hover:text-white text-md"><i className="fa fa-phone bg-green-200 p-2 text-black rounded"></i>  +1 230 545 78 789 </a></span>
                        <span className="my-2"><a href="#" className="text-gray-100  hover:text-white text-md"><i className="fa fa-facebook bg-blue-500 p-2 text-black rounded"></i> We Link Med </a></span>
                        <span className="my-2"><a href="#" className="text-gray-100  hover:text-white text-md"><i className="fa fa-twitter bg-blue-300 p-2 text-black rounded"></i>  We Link Med </a></span>
                        <span className="my-2"><a href="#" className="text-gray-100  hover:text-white text-md"><i className="fa fa-linkedin bg-blue-400 p-2 text-black rounded"></i> We Link Med </a></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-16">
            <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                <div className="sm:w-2/3 text-center py-6">
                    <p className="text-sm text-gray-100 font-bold mb-2">
                        © 2020 by we link med
                    </p>
                </div>
            </div>
        </div>
        </div>
    </footer>

  </div>
  </div>
  </>)
}
