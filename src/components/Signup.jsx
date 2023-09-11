import React from 'react'
import Nav from './Nav'

function Signup() {
  return (
    <>
    <Nav />
   <div className="flex min-h-full  flex-col justify-center px-6 py-12 lg:px-8">

        <div className="mt-[8rem] sm:mx-auto sm:w-full sm:max-w-xl ">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="username" className="block text-[24px] font-medium leading-6 text-gray-900 mb-5">
                Username
              </label>
              <div className="mt-2 ">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  placeholder='Username' 
                  className="block w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-[24px] font-medium leading-6 text-gray-900 mb-5">
                  Password
                </label>
        
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder='Password'
                  className="block w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </div>


            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="fullname" className="block text-[24px] font-medium leading-6 text-gray-900 mb-5">
                  Fullname
                </label>
        
              </div>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  required
                  placeholder='Fullname'
                  className="block w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </div>


            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="organization" className="block text-[24px] font-medium leading-6 text-gray-900 mb-5">
                  Organization
                </label>
        
              </div>
              <div className="mt-2">
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  required
                  placeholder='Password'
                  className="block w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                className="flex w-32 justify-center rounded-md bg-indigo-600 mt-[3rem] px-3 py-3 text-[1.5rem]  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default Signup