import React from 'react'
import { MdDeleteOutline } from "react-icons/md";


const Taskcard = () => {
  return (
    <>
        <div className='bg-[#3700B3] mt-[1.5rem] m-[2.2rem] p-[0.5rem] rounded-[0.6rem] min-h-[20rem] min-w-[18rem]'>
          <p className='font-semibold text-white text-[1.2rem] text-center'>Tasks</p>
          <div className='flex mt-[0.3rem]'>
            <input type='checkbox'
              className='ml-[0.5rem]'/>
            <p className='text-gray-200 ml-[0.3rem] w-full'>Create design system</p>
            <button className='mr-[0.3rem]'>
              <MdDeleteOutline className='text-white' />
            </button>
          </div>
          <div className='flex mt-[0.3rem]'>
            <input type='checkbox'
              className='ml-[0.5rem]'/>
            <p className='text-gray-200 ml-[0.3rem] w-full'>Create design system</p>
            <button className='mr-[0.3rem]'>
              <MdDeleteOutline className='text-white' />
            </button>
          </div>
          <div className='flex mt-[0.3rem]'>
            <input type='checkbox'
              className='ml-[0.5rem]'/>
            <p className='text-gray-200 ml-[0.3rem] w-full'>Create design system</p>
            <button className='mr-[0.3rem]'>
              <MdDeleteOutline className='text-white' />
            </button>
          </div>
        </div>
    </>
  )
}

export default Taskcard
