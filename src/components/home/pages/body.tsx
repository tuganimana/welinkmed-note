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
  {/* About Section - Modernized */}
  <div className="w-full h-auto bg-gradient-to-br from-gray-50 to-white">
    <div className="px-4 py-16 mx-auto max-w-7xl md:px-8 lg:px-16 md:py-24">
     <div className="grid gap-8 items-center md:grid-cols-2 lg:gap-12">
       <div data-aos="zoom-out-right" className="order-2 md:order-1">
           <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl opacity-25 blur transition duration-1000 group-hover:opacity-40"></div>
             <img src={group} className="relative rounded-3xl w-full shadow-2xl transform transition duration-300 group-hover:scale-[1.02]" alt="About WeLinkMed"/>
           </div>
       </div>
        <div className="order-1 p-4 md:order-2 md:p-8">
         <div className="mb-6">
           <span className="inline-block pt-2 mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 md:text-6xl">About</span>
           <div className="mt-2 w-20 h-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"></div>
         </div>
         <div data-aos="zoom-out-left" className="space-y-4">
           <h2 className="text-2xl font-bold leading-tight text-gray-800 md:text-3xl">
             Access Medication Information Securely in Real Time
           </h2>
           <p className="text-base font-medium leading-relaxed text-gray-600 md:text-lg">
             A Complete Medication Management Solution
           </p>
           <p className="text-sm leading-relaxed text-gray-600 md:text-base">
             Welinkmed has dramatically reduced medication errors, paperwork inefficiencies and administrative duties. Our portfolio of customers includes senior living facilities, group homes, correctional facilities, behavioral health providers and more.
           </p>
         </div>
         <div className="mt-8">
           <button className="relative px-8 py-3 font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-lg transition-all duration-300 transform group hover:from-red-700 hover:to-red-800 hover:shadow-xl hover:scale-105">
             <span className="relative z-10">Read More</span>
             <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
           </button>
         </div>
       </div>
    </div>
  </div>
  </div>
    {/* Services Section - Modernized */}
   <div className="bg-fixed bg-center bg-cover bgImageWeb1">
  <div className="bg-gradient-to-br backdrop-blur-sm from-red-900/80 via-red-800/75 to-blue-900/70">
   <div className="px-4 py-16 mx-auto max-w-7xl md:px-8 lg:px-16 md:py-24">
       <div className="mb-12 w-full md:mb-16">
           <div data-aos="flip-up" className="py-8 text-center md:py-12">
             <h2 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
               Our Services
             </h2>
             <p className="text-xl font-medium text-gray-100 md:text-2xl">
               We Provide To Community!
             </p>
             <div className="mx-auto mt-4 w-24 h-1 bg-white rounded-full"></div>
           </div>
       </div>
       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
       {
        services.map((serviceitem:any, index) => {
          return (
            <div key={index} data-aos="zoom-in" data-aos-delay={index * 100} className="w-full">
             <div className="overflow-hidden relative h-full bg-white rounded-2xl shadow-xl transition-all duration-300 transform group hover:shadow-2xl hover:-translate-y-2">
               <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
               <div className="flex relative flex-col items-center p-6 h-full text-center">
                 <div className="p-4 mb-4 bg-gradient-to-br from-red-100 to-blue-100 rounded-2xl transition-transform duration-300 group-hover:scale-110">
                   <img className='object-contain w-12 h-12' src={serviceitem.image} alt="icon"/>
                 </div>
               <div className="flex-1">
                 <h4 className="mb-3 text-lg font-bold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-red-600">
                   {serviceitem.title}
                 </h4>
                 <p className="mb-4 text-sm leading-relaxed text-gray-600">
                   {serviceitem.descrip}
                 </p>
               </div>
                 <div className="mt-auto w-full">
                   <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium py-2.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                     View More
                   </button>
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
{/* eMAR Section - Modernized */}
<div className="w-full bg-gradient-to-br from-gray-50 via-white to-blue-50">
<div className="px-4 py-16 mx-auto max-w-7xl md:px-8 lg:px-16 md:py-24">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 md:text-5xl">
            eMAR
          </h2>
          <p className="text-lg font-medium text-gray-600 md:text-xl">
            Take paperwork out of medication administration
          </p>
          <div className="mx-auto mt-4 w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {
        ourwork.map((workitem:any, index) => {
          return (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 150} data-aos-duration="500" className="group">
            <div className="p-8 h-full bg-white rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 hover:border-red-200">
              <div className="flex flex-col items-center h-full text-center">
                <div className="p-5 mb-6 bg-gradient-to-br from-red-100 to-blue-100 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <img className='object-contain w-14 h-14' src={workitem.image} alt="services icon"/>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-red-600">
                  {workitem.title}
                </h3>
                <p className="flex-1 mb-4 text-sm leading-relaxed text-gray-600">
                  {workitem.descrip}
                </p>
              </div>
            </div>
          </div>
          )
        })
        }
        </div>
      </div>
</div>

      {/* CTA Section - Modernized */}
      <div className="bg-fixed bg-center bg-cover bgImageWeb2">
        <div className="bg-gradient-to-br backdrop-blur-sm from-red-900/85 via-red-800/80 to-blue-900/75">
          <div className="px-4 py-20 mx-auto max-w-7xl md:px-8 lg:px-16 md:py-32">
            <div data-aos="fade-up" data-aos-duration="1000" className="mx-auto space-y-6 max-w-4xl text-center">
              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Welinkmed Is Customized to Meet Your Specific Needs
              </h2>
              <p className="text-lg font-medium leading-relaxed text-gray-100 md:text-xl">
                Welinkmed&apos;s pricing is structured as a subscription fee. The cost will vary based on the modules you choose to implement, as well as the total number of service hours you have each month. If you&apos;re interested in more specific pricing, we&apos;d love to connect you with one of our client representatives who can assess your specific needs and provide you with a quote.
              </p>
              <div className="pt-4">
                <button data-aos="zoom-out" className="relative px-10 py-4 text-lg font-bold text-red-600 bg-white rounded-full shadow-2xl transition-all duration-300 transform group hover:bg-gray-50 hover:shadow-3xl hover:scale-110">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Modernized */}
      <div className="w-full bg-gradient-to-br from-gray-50 to-white">
        <div className="px-4 py-16 mx-auto max-w-7xl md:px-8 lg:px-16 md:py-24">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 md:text-5xl">
              Contact Us
            </h2>
            <p className="text-lg font-medium text-gray-600 md:text-xl">
              For more information, you can use the following to reach out to us. Thank you!
            </p>
            <div className="mx-auto mt-4 w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="p-8 bg-white rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <h3 className="mb-6 text-2xl font-bold text-gray-800">Get In Touch</h3>
                <div className="space-y-4">
                  <a href="tel:+1234568434542" data-aos="zoom-out-up" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl transition-all duration-300 hover:from-green-100 hover:to-green-200 group">
                    <div className="flex flex-shrink-0 justify-center items-center mr-4 w-12 h-12 bg-green-500 rounded-full transition-transform duration-300 group-hover:scale-110">
                      <i className="text-white fa fa-phone"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-lg font-bold text-gray-800">+1 234 568 434 542</p>
                    </div>
                  </a>
                  <a href="#" data-aos="zoom-out-up" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl transition-all duration-300 hover:from-blue-100 hover:to-blue-200 group">
                    <div className="flex flex-shrink-0 justify-center items-center mr-4 w-12 h-12 bg-blue-600 rounded-full transition-transform duration-300 group-hover:scale-110">
                      <i className="text-white fa fa-facebook"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Facebook</p>
                      <p className="text-lg font-bold text-gray-800">WeLink Med</p>
                    </div>
                  </a>
                  <a href="#" data-aos="zoom-out-up" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-100 rounded-xl transition-all duration-300 hover:from-cyan-100 hover:to-cyan-200 group">
                    <div className="flex flex-shrink-0 justify-center items-center mr-4 w-12 h-12 bg-cyan-500 rounded-full transition-transform duration-300 group-hover:scale-110">
                      <i className="text-white fa fa-twitter"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Twitter</p>
                      <p className="text-lg font-bold text-gray-800">@WeLinkMed</p>
                    </div>
                  </a>
                  <a href="#" data-aos="zoom-out-up" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl transition-all duration-300 hover:from-indigo-100 hover:to-indigo-200 group">
                    <div className="flex flex-shrink-0 justify-center items-center mr-4 w-12 h-12 bg-indigo-600 rounded-full transition-transform duration-300 group-hover:scale-110">
                      <i className="text-white fa fa-linkedin"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <p className="text-lg font-bold text-gray-800">WeLink Med</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <div className="p-8 bg-white rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <h2 className="mb-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">Send Us a Message</h2>
                <form data-aos="zoom-out-up" action="#" className="space-y-4">
                  <div>
                    <input type="text" placeholder="Full Name" className="px-5 py-4 w-full leading-tight text-gray-700 bg-gray-50 rounded-xl border-2 border-gray-200 transition-all duration-300 focus:outline-none focus:bg-white focus:border-red-400 hover:border-red-300"/>
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number" className="px-5 py-4 w-full leading-tight text-gray-700 bg-gray-50 rounded-xl border-2 border-gray-200 transition-all duration-300 focus:outline-none focus:bg-white focus:border-red-400 hover:border-red-300"/>
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="px-5 py-4 w-full leading-tight text-gray-700 bg-gray-50 rounded-xl border-2 border-gray-200 transition-all duration-300 focus:outline-none focus:bg-white focus:border-red-400 hover:border-red-300"/>
                  </div>
                  <div>
                    <textarea rows={4} placeholder="Your Message Here..." className="px-5 py-4 w-full leading-tight text-gray-700 bg-gray-50 rounded-xl border-2 border-gray-200 transition-all duration-300 resize-none focus:outline-none focus:bg-white focus:border-red-400 hover:border-red-300"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="px-6 py-4 w-full text-lg font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg transition-all duration-300 transform hover:from-red-700 hover:to-red-800 hover:shadow-xl hover:scale-105">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Modernized */}
      <footer className="relative bg-fixed bg-center bg-cover bgImageWeb1">
        <div className="bg-gradient-to-br backdrop-blur-sm from-red-900/90 via-red-800/85 to-blue-900/80">
        <div className="px-4 py-12 mx-auto max-w-7xl md:px-8 lg:px-16 md:py-16">
            <div data-aos="fade-up" data-aos-duration="900" className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-12">
                {/* Brand */}
                <div className="lg:col-span-1">
                    <h3 className="mb-4 text-2xl font-bold text-white">WeLink Med</h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                      Complete Medication Management Solution for healthcare facilities.
                    </p>
                </div>
                {/* Pages */}
                <div>
                    <h4 className="mb-4 text-lg font-bold text-white uppercase">Pages</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="inline-block text-sm text-gray-300 transition-colors duration-300 hover:text-white hover:translate-x-1">Home</a></li>
                        <li><a href="#" className="inline-block text-sm text-gray-300 transition-colors duration-300 hover:text-white hover:translate-x-1">About Us</a></li>
                        <li><a href="#" className="inline-block text-sm text-gray-300 transition-colors duration-300 hover:text-white hover:translate-x-1">Career</a></li>
                        <li><a href="#" className="inline-block text-sm text-gray-300 transition-colors duration-300 hover:text-white hover:translate-x-1">Contact Us</a></li>
                        <li><a href="#" className="inline-block text-sm text-gray-300 transition-colors duration-300 hover:text-white hover:translate-x-1">Pricing</a></li>
                    </ul>
                </div>
                {/* Services */}
                <div>
                    <h4 className="mb-4 text-lg font-bold text-white uppercase">Services</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="inline-block text-sm text-gray-300 transition-colors duration-300 hover:text-white hover:translate-x-1">eMAR</a></li>
                        <li><a href="#" className="inline-block text-sm text-gray-300 transition-colors duration-300 hover:text-white hover:translate-x-1">Medication Management</a></li>
                        <li><a href="#" className="inline-block text-sm text-gray-300 transition-colors duration-300 hover:text-white hover:translate-x-1">Documentation</a></li>
                        <li><a href="#" className="inline-block text-sm text-gray-300 transition-colors duration-300 hover:text-white hover:translate-x-1">Support</a></li>
                    </ul>
                </div>
                {/* Contact Info */}
                <div>
                    <h4 className="mb-4 text-lg font-bold text-white uppercase">Contact</h4>
                    <ul className="space-y-3">
                        <li>
                            <a href="tel:+123054578789" className="flex items-center text-gray-300 transition-colors duration-300 hover:text-white group">
                                <i className="flex justify-center items-center mr-3 w-8 h-8 bg-green-500 rounded-full transition-transform duration-300 fa fa-phone group-hover:scale-110"></i>
                                <span className="text-sm">+1 230 545 78 789</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-gray-300 transition-colors duration-300 hover:text-white group">
                                <i className="flex justify-center items-center mr-3 w-8 h-8 bg-blue-600 rounded-full transition-transform duration-300 fa fa-facebook group-hover:scale-110"></i>
                                <span className="text-sm">WeLink Med</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-gray-300 transition-colors duration-300 hover:text-white group">
                                <i className="flex justify-center items-center mr-3 w-8 h-8 bg-cyan-500 rounded-full transition-transform duration-300 fa fa-twitter group-hover:scale-110"></i>
                                <span className="text-sm">@WeLinkMed</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-gray-300 transition-colors duration-300 hover:text-white group">
                                <i className="flex justify-center items-center mr-3 w-8 h-8 bg-indigo-600 rounded-full transition-transform duration-300 fa fa-linkedin group-hover:scale-110"></i>
                                <span className="text-sm">WeLink Med</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* Footer Bottom */}
        <div className="border-t border-gray-600/50">
            <div className="px-4 py-6 mx-auto max-w-7xl md:px-8 lg:px-16">
                <div className="flex flex-col justify-between items-center md:flex-row">
                    <p className="mb-2 text-sm text-gray-300 md:mb-0">
                        © {new Date().getFullYear()} WeLink Med. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-sm text-gray-300 transition-colors duration-300 hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-sm text-gray-300 transition-colors duration-300 hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </footer>
  </>)
}
