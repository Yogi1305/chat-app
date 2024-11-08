import React from 'react'
import Sidebar from './Sidebar'
import MesssageContainer from './MesssageContainer'

const HomePage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
   <Sidebar/>
   <MesssageContainer/>

    </div>
  )
}

export default HomePage