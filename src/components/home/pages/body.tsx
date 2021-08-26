// eslint-disable-next-line no-use-before-define
import React from 'react'
import group from '../../../images/group2.jpg'
import group1 from '../../../images/group1.jpg'
import Slider from './slider'
export default function Body () {
  const services = [
    {
      title: 'Link Med',
      descrip: 'we link med to you everywhre you are to be ba round to hav be in around round',
      caption: 'bench'
    },
    {
      title: 'Link Med',
      descrip: 'we link med to you everywhre you are to be ba round to hav be in around round',
      caption: 'bench'
    },
    {
      title: 'Link Med',
      descrip: 'we link med to you everywhre you are to be ba round to hav be in around round',
      caption: 'bench'
    }
  ]
  const ourwork = [
    {
      title: 'Creative',
      descrip: 'We creat awasemo yo acordingl yu nees wud in your how ever to be initialty fro real',
      caption: 'bench'
    },
    {
      title: 'Responsive Work',
      descrip: 'We creat awasemo yo acordingl yu nees wud in your how ever to be initialty fro real',
      caption: 'bench'
    },
    {
      title: 'Job for you',
      descrip: 'We creat awasemo yo acordingl yu nees wud in your how ever to be initialty fro real',
      caption: 'bench'
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
         <p data-aos="zoom-out-right" className="text-md text-gray-600 leading-loose py-4 font-medium">Our customers don’t just love us, they rave about us. Hear what real WeLink customers have to say about our Wireless Fiber internet service. Fast and reliable service without all the hidden fees, pricing games, or gimmicks.Our customers don’t just love us, they rave about us. Hear what real WeLink customers have to say about our Wireless Fiber internet service. Fast and reliable service without all the hidden fees, pricing games, or gimmicks.Our customers don’t just love us, they rave about us. Hear what real WeLink customers have to say about our Wireless Fiber internet service. Fast and reliable service without all the hidden fees, pricing games, or gimmicks.</p>
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
            <div key={index} data-aos="zoom-in" className="w-full md:w-1/2 p-2" data-scrollreveal="enter top over 0.4s after 0.1s">
             <div className="wrapper antialiased text-gray-900">
               <div>
                 <img src={group} alt=" random imgee" className="w-full object-cover object-center rounded-3xl shadow-md" />
               <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500" className="relative -mt-8  ">
                 <div className="bg-white p-4 item-center text-center rounded-b-3xl rounded-t-md  shadow-lg">
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
          <div className="text-center pt-8  grid item-center">
            <span className="text-4xl text-red-700 font-bold">Our Creative for you</span>
            <span className="text-2xl p-4 text-gray-500 mt-4">we have more  Creative for you impresive Creative, impresive have  Creative more impresive Creative for  impresivey awasome impresive and reality that can hejww s you to impresive jksdd everything anyway</span>
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
                <img src={group1} alt=" random imgee" className="w-full object-cover object-center rounded-3xl shadow-xl" />
              <div className="relative px-6 -mt-16  ">
                <div data-aos="zoom-in" className="bg-white opacity-95 rounded-xl grid p-3 item-center text-center shadow-lg">
                  <span className="text-red-900 text-lg font-semibold">{workitem.title}</span>
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
            <span className="text-4xl font-bold text-white">Futer is brighter when you are more prepared</span>
            <span className="text-md font-bold text-gray-100">Futer  acordingl yu nees wud in your how ever to be is brighter when you   acordingl yu nees wud in your how ever to beare more   acordingl yu nees wud in your how ever to beprep  acordingl yu nees wud in your how ever to beared</span>
            <span><button data-aos="zoom-out" className="bg-gray-100 hover:bg-gray-200 font-medium p-3 pl-6 pr-6 rounded-full">Get Start With Us</button></span>
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

 {/* <div className="max-w-full h-auto">
  <div className="bg-gray-200 max-w-full h-96 h">
    <div className="container  mx-auto md:p-8">
    <div className="grid md:grid-cols-2 gap-3 ">
       <div data-aos="zoom-out-right" className="p-4">
           <div className="">
             <img src={group} className="rounded-3xl w-full shadow-2xl" alt=""/>
           </div>
       </div>
       <div data-aos="zoom-out-left" className="p-4">
         <p className="font-bold w-24 pt-2 text-4xl md:mt-8 border-t-2 border-blue-400 mb-4">About</p>
         <p data-aos="zoom-out-right" className="text-md text-gray-600 leading-loose py-4 font-medium">Our customers don’t just love us, they rave about us. Hear what real WeLink customers have to say about our Wireless Fiber internet service. Fast and reliable service without all the hidden fees, pricing games, or gimmicks.Our customers don’t just love us, they rave about us. Hear what real WeLink customers have to say about our Wireless Fiber internet service. Fast and reliable service without all the hidden fees, pricing games, or gimmicks.Our customers don’t just love us, they rave about us. Hear what real WeLink customers have to say about our Wireless Fiber internet service. Fast and reliable service without all the hidden fees, pricing games, or gimmicks.</p>
         <p> <button className="bg-red-800 hover:bg-red-700 p-2 pr-8 pl-8 text-white rounded-3xl">Read More</button></p>
       </div>
  </div>
    </div>
  </div>
  <div className="bgImageWeb1 bg-fixed">
  <div className="bg-red-900 bg-opacity-70">
  <div className="md:max-w-7xl mx-auto md:pl-24 md:pr-24 flex flex-wrap">
       <div className="w-ful md:w-1/2 p-4 md:p-4">
           <div data-aos="flip-up" className="text-center md:mt-16 py-24">
             <span className="text-white font-bold  text-5xl">Our Service, <br/> We Provide To community!</span>
           </div>
       </div>
       <div className="w-ful md:w-1/2 flex flex-wrap p-4">
       {
        services.map((serviceitem:any, index) => {
          return (
            <div key={index} data-aos="zoom-in" className="w-full md:w-1/2 p-2" data-scrollreveal="enter top over 0.4s after 0.1s">
             <div className="wrapper antialiased text-gray-900">
               <div>
                 <img src={group} alt=" random imgee" className="w-full object-cover object-center rounded-3xl shadow-md" />
               <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500" className="relative -mt-8  ">
                 <div className="bg-white p-4 item-center text-center rounded-b-3xl rounded-t-md  shadow-lg">
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
      <div className="md:pl-32 pb-6 md:pr-32 bg-gray-200">
        <div className="md:max-w-7xl mx-auto">
          <div className="text-center pt-8  grid item-center">
            <span className="text-4xl text-red-700 font-bold">Our Creative for you</span>
            <span className="text-2xl p-4 text-gray-500 mt-4">we have more  Creative for you impresive Creative, impresive have  Creative more impresive Creative for  impresivey awasome impresive and reality that can hejww s you to impresive jksdd everything anyway</span>
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
                <img src={group1} alt=" random imgee" className="w-full object-cover object-center rounded-3xl shadow-xl" />
              <div className="relative px-6 -mt-16  ">
                <div data-aos="zoom-in" className="bg-white opacity-95 rounded-xl grid p-3 item-center text-center shadow-lg">
                  <span className="text-red-900 text-lg font-semibold">{workitem.title}</span>
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
            <span className="text-4xl font-bold text-white">Futer is brighter when you are more prepared</span>
            <span className="text-md font-bold text-gray-100">Futer  acordingl yu nees wud in your how ever to be is brighter when you   acordingl yu nees wud in your how ever to beare more   acordingl yu nees wud in your how ever to beprep  acordingl yu nees wud in your how ever to beared</span>
            <span><button data-aos="zoom-out" className="bg-gray-100 hover:bg-gray-200 font-medium p-3 pl-6 pr-6 rounded-full">Get Start With Us</button></span>
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
      <footer className="bgImageWeb1 footer relative border-b-2 border-blue-700">
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
    </div>  */}

  </>)
}
