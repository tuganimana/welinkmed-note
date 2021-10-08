// eslint-disable-next-line no-use-before-define
import React from 'react'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
const Paginations = (postsPerPage:any, totalClients:any, paginate:Function) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(parseInt(postsPerPage.totalClients) / parseInt(postsPerPage.totalClients)); i++) {
    pageNumbers.push(i)
  }
  return (
        <>
         <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <LeftOutlined className="h-5 w-5" aria-hidden="true" />
            </a>
            {pageNumbers.map((number:any, index) => (
                <div key={index}>
                <a onClick={() => paginate(number)}
                aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                 {number}
                </a>
                </div>
            ))}

            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <RightOutlined className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </>
  )
}
export default Paginations
