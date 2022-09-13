import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'

import  Auth  from './components/Auth';
import Home from './container/Home';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/auth');
  }, []);

  return (
    <>
    <Routes>
      <Route path="auth" element={<Auth />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    <Toaster />

    </>
  );
};

export default App;
