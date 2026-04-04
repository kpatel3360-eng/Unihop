import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup3";
import Dashboard from "./pages/Dashboard";
import CreateRide from "./pages/CreateRide1";
import FindRide from "./pages/FindRide2";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateRide />} />
        <Route path="/find" element={<FindRide />} />
      </Routes>

    </Router>
  );
}

export default App;