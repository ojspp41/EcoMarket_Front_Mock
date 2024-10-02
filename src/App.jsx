import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Register from './pages/Register';
import Auction from './pages/Auction';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
function App() {
  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Auction />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Navbar /> {/* 항상 하단에 고정되는 Navbar */}
      </div>
    </Router>
  )
}

export default App
