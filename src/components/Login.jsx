import React, { useEffect, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const handleNextDay = () => {
      navigate(`/`)
  }
  const [post, setPost] = useState({
    username: '',
    password: ''
  })
  const handleInput = (event) => {
      setPost([...post, [event.target.name]])
  }

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-[#3700B3] p-[2rem] w-[30rem] rounded-[2rem] shadow-lg'>
          <p className='text-pink-100 font-bold text-[2.5rem] text-center mb-6'>Sign In</p>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center'>
              <FaRegUser className='text-blue-100 text-[1.5rem] mr-4'/>
              <input
                name = 'username'
                type="text"
                placeholder='Username'
                className='w-full p-3 rounded-lg text-white bg-[#6200ea] placeholder:text-gray-300 placeholder:text-[1.3rem] focus:outline-none focus:ring-1 focus:ring-pink-300'
              />
            </div>
            <div className='flex items-center'>
              <FaLock className='text-blue-100 text-[1.5rem] mr-4'/>
              <input
                name = 'password'
                type="password"
                placeholder='Password'
                className='w-full p-3 rounded-lg text-white bg-[#6200ea] placeholder:text-gray-300 placeholder:text-[1.3rem] focus:outline-none focus:ring-1 focus:ring-pink-300'
              />
            </div>
            <button className='mt-6 w-full p-3 bg-pink-500 rounded-lg text-white font-bold text-[1.2rem] hover:bg-pink-600 focus:outline-none hover:cursor-pointer'
            onClick={handleNextDay}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
