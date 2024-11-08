import React from "react";

const Message = () => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar"></div>
        <div className="chat-header">
          
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        
      </div>
    </div>
  );
};

export default Message;
