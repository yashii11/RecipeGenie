// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigate.push('/login');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <nav className="bg-teal-500 p-4 my-4">
  <ul className="flex space-x-4">
    <li>
      <Link to="/" className="text-white hover:text-teal-200">
        Home
      </Link>
    </li>
   
    {!user ? (
      <>
        <li>
          <Link to="/login" className="text-white hover:text-teal-200">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="text-white hover:text-teal-200">
            Register
          </Link>
        </li>
      </>
    ) : (
        <>
        <li>
        <Link to="/dashboard" className="text-white hover:text-teal-200">
          Dashboard
        </Link>
      </li>
      <li>
        <button
          onClick={handleLogout}
          className="text-white hover:text-teal-200 focus:outline-none"
        >
          Logout
        </button>
      </li>
        </>
        
    )}
  </ul>
</nav>

  );
};

export default Navbar;
