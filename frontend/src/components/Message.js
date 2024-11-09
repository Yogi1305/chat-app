import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({message}) => {
  const {authUser}=useSelector(store=>store.user);
  const scroll =useRef();
  useEffect(() => {
      // to get current message lok first 
      scroll?.current?.scrollIntoView({behavior:"smooth"})
  }, [message])
  return (
    <div>
      <div  ref={scroll} className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}`}>
        <div className="chat-image avatar"></div>
        <div className="chat-header">
          
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">{message?.message}</div>
        
      </div>
    </div>
  );
};

export default Message;
