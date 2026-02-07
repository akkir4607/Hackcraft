import "./App.css";
import Front from "../pages/Front";
import Profile from "../pages/Profile";
import Themes from "../pages/Themes";
import Team from "../pages/Team";
import Timeline from "../pages/Timeline";
import About from "../pages/About";
import Aboutt from "../pages/Aboutt";
import Epic from "../pages/Epic";
import Aboutz from "../pages/Aboutz";
import Abouttz from "../pages/Abouttz";
import Profilez from "../pages/Profilez";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutt" element={<Aboutt />} />
        <Route path="/epic" element={<Epic />} />
        <Route path="/aboutz" element={<Aboutz />} />
        <Route path="/abouttz" element={<Abouttz />} />
        <Route path="/profilez" element={<Profilez />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
