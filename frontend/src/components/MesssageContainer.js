import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";

const MesssageContainer = () => {
  return (
    <div className="mt-2 md:min-w-[550px] flex flex-col relative">
      <div className=" flex gap-2 items-center bg-zinc-800 text-white rounded-md cursor-pointer p-2">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src="https://images.pexels.com/photos/18364244/pexels-photo-18364244/free-photo-of-statue-of-shiva.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="User Profile"
            ></img>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex  justify-between  gap-2 ">
            <p>name</p>
          </div>
        </div>
      </div>
      <Messages/>
     <SendInput/>
     </div>
  );
};

export default MesssageContainer;
