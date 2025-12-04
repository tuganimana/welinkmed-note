// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { frontEndPoints } from '../../../utils/enums'
import '../../../css/tailwind.css'
export default function Homenav () {
  const [small, setSmall] = useState(false)
  const handleClick = () => {
    setSmall(true)
  }
  const handleSmall = () => {
    setSmall(false)
  }
  return (
  <>
  {/* Navbar on web view - Modernized */}
  <div className="relative py-4 px-4 md:px-8">
  <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700" className="">
    <div className="flex justify-between items-center">
      <div className="flex-shrink-0">
        <a href="/" className="flex items-center no-underline group">
          <h3 className="text-2xl md:text-3xl text-white no-underline font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-red-200 group-hover:to-white transition-all duration-300">
            WeLink<span className="text-red-400">Med</span>
          </h3>
        </a>
      </div>
      <div className="md:hidden">
        <button type="button" onClick={handleClick} className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 transition duration-150 ease-in-out">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="/" className="text-base font-medium text-white/90 hover:text-white no-underline transition-all duration-300 relative group">
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="/" className="text-base font-medium text-white/90 hover:text-white no-underline transition-all duration-300 relative group">
          About Us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="/" className="text-base font-medium text-white/90 hover:text-white no-underline transition-all duration-300 relative group">
          Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="/" className="text-base font-medium text-white/90 hover:text-white no-underline transition-all duration-300 relative group">
          Career
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="/" className="text-base font-medium text-white/90 hover:text-white no-underline transition-all duration-300 relative group">
          Vision
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href={frontEndPoints.LOGIN} className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2.5 rounded-full text-base font-semibold text-white no-underline shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
          Free Trial
        </a>
      </nav>
    </div>
  </div>

{/* Mobile navbar - Modernized */}
  {small && (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={handleSmall}></div>
      <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h4 className="text-xl font-bold text-gray-800">WeLink<span className="text-red-600">Med</span></h4>
            <button type="button" onClick={handleSmall} className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 p-6 space-y-4 overflow-y-auto">
            <a href="/" onClick={handleSmall} className="block text-base font-medium text-gray-700 hover:text-red-600 py-2 transition-colors duration-300">
              Home
            </a>
            <a href="#" onClick={handleSmall} className="block text-base font-medium text-gray-700 hover:text-red-600 py-2 transition-colors duration-300">
              About Us
            </a>
            <a href="#" onClick={handleSmall} className="block text-base font-medium text-gray-700 hover:text-red-600 py-2 transition-colors duration-300">
              Services
            </a>
            <a href="#" onClick={handleSmall} className="block text-base font-medium text-gray-700 hover:text-red-600 py-2 transition-colors duration-300">
              Career
            </a>
            <a href="#" onClick={handleSmall} className="block text-base font-medium text-gray-700 hover:text-red-600 py-2 transition-colors duration-300">
              Vision
            </a>
            <div className="pt-4">
              <a href={frontEndPoints.LOGIN} onClick={handleSmall} className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-full text-center shadow-lg hover:shadow-xl transition-all duration-300">
                Free Trial
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )}

</div>
</>)
}
