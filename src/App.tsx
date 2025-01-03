import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/landing-page.tsx';
import Threads from './pages/threads.tsx';
import ThreadDisplay from './pages/thread-display.tsx';
import SignIn from './pages/sign-in.tsx';
import Profile from './pages/profile.tsx';
import Register from './pages/register.tsx';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/threads" element={<Threads />} />
      <Route path="/thread-display" element={<ThreadDisplay />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  )
    
}

