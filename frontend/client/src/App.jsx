import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import CreateRide1 from './pages/CreateRide1';
import FindRide2 from './pages/FindRide2';
import Login from './pages/Login';
import Signup3 from './pages/Signup3';
import './App.css';

function App() {
  // This state will hold all rides so they can be seen on the FindRide page
  const [rides, setRides] = useState([
    { id: 1, driver: "Krish", from: "PDEU Campus", to: "Nikol", time: "05:30 PM", date: "2026-04-10", seats: 2, price: 40 }
  ]);

  const addRide = (newRide) => {
    setRides([...rides, { ...newRide, id: Date.now() }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer-ride" element={<CreateRide1 addRide={addRide} />} />
        <Route path="/find-ride" element={<FindRide2 rides={rides} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup3 />} />
      </Routes>
    </Router>
  );
}

export default App;