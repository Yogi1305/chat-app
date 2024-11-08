import React from 'react'

const OtherUser = () => {
  return (
    <div>
      <div className=" flex gap-2 items-center hover:bg-zinc-200 rounded-md cursor-pointer p-2">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://images.pexels.com/photos/18364244/pexels-photo-18364244/free-photo-of-statue-of-shiva.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Profile"></img>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex  justify-between  gap-2 ">
            <p>name</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 color"></div>

    </div>
  )
}

export default OtherUser