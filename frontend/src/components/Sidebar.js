import React from 'react'
import {BiSearchAlt2} from "react-icons/bi";
import OtherUsers from './OtherUsers';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col relative'>
        <form action='' className='flex items-center gap-2'>
              <input type='text' className='input input-bordered rounded-md bg-white text-black'>
              </input>
              <button type='submit' className='btn bg-zinc-700 text-white'><BiSearchAlt2 className='w-6 h-6 outline-none'/></button>
        </form>
        <div className='divider px-3'></div>
        <OtherUsers/>
        <div className='absolute right-0 left-0 bottom-0 mb-1'>
            <button className='btn btn-sm'>Logout</button>
        </div>
    </div>
  )
}

export default Sidebar