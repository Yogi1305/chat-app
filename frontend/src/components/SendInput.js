import axios from 'axios';
import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

const SendInput = () => {
  const[inputMessage,setInputMessage]=useState("");
  const {selectedUser}=useSelector(store=>store.user);
  const {messages}=useSelector(store=>store.message)
  const dispatch=useDispatch();
  const onSubmitHanlder=async(e)=>{
    e.preventDefault();
    try {
      axios.defaults.withCredentials=true;
      const res=await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,{inputMessage},{
        headers:{
          'Content-Type':'application/json'
      },
      withCredentials:true
      });
      dispatch(setMessages(...messages,res?.data?.newMessage));
      // console.log(res);
      
      setInputMessage("");

    } catch (error) {
      console.log("SendInput ka error hu :",error);
      
    }
    // alert(inputMessage);
  }
  return (
    <form  onClick={onSubmitHanlder}>
         <div className=" absolute flex bottom-0 mb-2 text-black w-full p-3 ">
         <input 
         value={inputMessage}
         onChange={(e)=>setInputMessage(e.target.value)}
         type="text" className="bg-white p-3 w-3/4 rounded-md " placeholder='send message ...'>
         </input>
         <button  type="submit" className="btn ml-2"><IoSend  size={20}/></button>
      </div>
    
    </form>
  )
}

export default SendInput