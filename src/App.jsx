// App.js

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
// import Profile from './components/Profile';
// import SkillsPage from './components/SkillsPage';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import FooterPage from './components/FooterPage';
// import { Experience } from './components/Experience';
// import { UI } from './components/UI';

// import ProjectText from './components/ProjectsText'
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls } from '@react-three/drei';
const App = () => {
  return (
    <>

      <Router>
        <Routes>
        
            {/* Use the "element" prop instead of "component" */}
            <Route exact path="/" element={<LandingPage />} />
            {/* <Route exact path="Profile/First" element={<Profile />} />
            <Route exact path="Profile/skills" element={<SkillsPage />} />
            <Route exact path="Profile/foot" element={<FooterPage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="Profile/exper" element={<Experience />} />
            <Route exact path="Profile/ui" element={<UI />} />
            <Route exact path="Profile/nav" element={<Navbar />} /> */}
        </Routes>
      </Router>
    
    </>
  );
};

export default App;
