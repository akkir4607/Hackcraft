import "./App.css";
import Front from "../pages/Front";
import Profile from "../pages/Profile";
import Team from "../pages/Team";
import Timeline from "../pages/Timeline";
import About from "../pages/About";
import Epic from "../pages/Epic";

import Profilez from "../pages/Profilez";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/team" element={<Team />} />
        
        <Route path="/epic" element={<Epic />} />
   
        <Route path="/profilez" element={<Profilez />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
