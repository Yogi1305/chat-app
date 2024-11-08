import React from 'react'
import { IoSend } from "react-icons/io5";

const SendInput = () => {
  return (
    <form>
         <div className=" absolute flex bottom-0 mb-2 text-black w-full p-3 ">
         <input type="text" className="bg-white p-3 w-3/4 rounded-md " placeholder='send message ...'>
         </input>
         <button className="btn ml-2"><IoSend  size={20}/></button>
      </div>
    
    </form>
  )
}

export default SendInput