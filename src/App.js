import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login/Login';
import Home from './components/Home/Home';

function App() {
  const [userInfo, setUserInfo] =useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUserInfo(data));
  }, []);
  console.log(userInfo);
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
