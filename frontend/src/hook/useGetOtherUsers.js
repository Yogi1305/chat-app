import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice.js";

const useGetOtherUsers = () => {
  // console.log("useGetOtherUsers me hu");
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("useeffect me hu");

    const fetchOtherUsers = async () => {
      // console.log("fetch me hu");

      try {
        // console.log("try me hu");
        axios.defaults.withCredentials = true;
        const res = await axios.get("http://localhost:8080/api/v1/user/");
        dispatch(setOtherUsers(res.data));
        // console.log("other users -> ", res);
      } catch (error) {
        console.log("error me hu");

        console.log(error);
      }
    };
    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
