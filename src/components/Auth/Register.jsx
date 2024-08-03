import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate=useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth,email, password);
          console.log("user created");
          navigate('/dashboard');
        } catch (error) {
          console.error("Error registering: ", error);
        }
      };


  return (
    <div>
      <h2 className="text-3xl text-center">Register</h2>
      <form onSubmit={handleRegister} className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
        <div className='mb-4'>
        <input type="email" 
        value={email} onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
     />
        </div>
       
      <div className='mb-4'>
      <input type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
         placeholder="Password (atleast 6 characters) "
         className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
    />
      </div>
       
        <button  className=" px-4 py-2 bg-teal-500 text-white font-bold rounded hover:bg-teal-600 transition duration-300" type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;