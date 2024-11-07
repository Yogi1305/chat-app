import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: ""
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      userName: "",
      password: ""
    });
  };

  return (
    <div className="text-black min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base">Username</span>
            </label>
            <input
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              className="ml-2 p-1 bg-white border-none rounded-md w-full"
              placeholder="Enter your username"
              type="text"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="ml-2 p-1 bg-white border-none rounded-md w-full"
              placeholder="Enter your password"
              type="password"
            />
          </div>
          <Link to="/register" className="hover:text-red-600 hover:underline mx-2">
            Don't have an account?
          </Link>
          <div>
            <button className="mt-1 btn btn-block btn-sm btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
