import React, { useEffect } from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const MesssageContainer = () => {
  const { selectedUser ,authUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSelectedUser(null));
  }, []);
  return (
    <>
      {selectedUser != null ? (
        <div className="mt-2 md:min-w-[550px] flex flex-col relative">
          <div className=" flex gap-2 items-center bg-zinc-800 text-white rounded-md cursor-pointer p-2">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profileImg} alt="User Profile"></img>
              </div>
            </div>
            <div className="flex flex-1">
              <div className="flex  justify-between  gap-2 ">
                <p>{selectedUser?.fullName}</p>
              </div>
            </div>
          </div>
          <Messages />
          <SendInput />
        </div>
      ) : (
        <div className="md:min-w-[550px] flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white font-bold">
            Hi,{authUser?.fullName}{" "}
          </h1>
          <h1 className="text-2xl text-white">Let's start conversation</h1>
        </div>
      )}
    </>
  );
};

export default MesssageContainer;
