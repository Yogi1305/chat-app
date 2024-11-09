import axios from 'axios'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice';

const useGetMessages = () => {
    const {selectedUser}=useSelector(store=>store.user);
    const dispatch=useDispatch();
  return (
    useEffect(() => {
      const getMessage= async ()=>{
        try {
            axios.defaults.withCredentials=true;
            const res= await axios.get(`http://localhost:8080/api/v1/message/${selectedUser?._id}`);
            // console.log("hello :",res?.data);
            dispatch(setMessages(res?.data))
            
        } catch (error) {
            console.log("error is : ",error);
            
        }
      }
      getMessage();
    }, [])
  )
}

export default useGetMessages