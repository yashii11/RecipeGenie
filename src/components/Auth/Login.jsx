import React,{useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase';

import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async(e)=>{
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email,password);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error in logging in",error);
    }
  }

  return (
    <div>
      <h1 className="text-center text-3xl">Login</h1>
      <form onSubmit={handleLogin} className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
  <div className="mb-4">
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
    />
  </div>
  <div className="mb-4">
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
    />
  </div>
  <button
    type="submit"
    className=" px-4 py-2 bg-teal-500 text-white font-bold rounded hover:bg-teal-600 transition duration-300"
  >
    Login
  </button>
</form>


    </div>
  )
}

export default Login;