import React , {useEffect , useState } from 'react';
// import axios from 'axios';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Navbar';

function App(){
  // const [message,setMessage] = useState('');
  // useEffect(() => {
  //   axios.get('/api/hello')
  //     .then(response => {
  //       setMessage(response.data.message);
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }, []);


  // return (
  //   <div className='App'>
  //     <h1>React and Express together</h1>
  //     <p>{message}</p>
  //   </div>
  // );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );

}

export default App;
