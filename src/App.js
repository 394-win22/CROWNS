import './App.css';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import ResultsPage from './components/ResultsPage.js';
import HairQuiz from './components/HairQuiz';
import TypeSelector from './components/TypeSelector';
import Navbar from './components/Navbar';
import Profile from './components/Profile'
import {ProductsDropdown} from './components/Dropdown'

function App() {
    const [hairType, setHairType] = useState(null);
    const [userData, setUserData] = useState(null);
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage setUserData={setUserData} userData={userData} 
                                                            setHairType={setHairType} hairType={hairType}/>} />
                <Route exact path="/results" element={<><ResultsPage hairType={hairType} setHairType={setHairType} /><Navbar/></>}/>
                <Route exact path="/quiz" element={<HairQuiz setHairType={setHairType} />} />
                <Route exact path="/selector" element={<><TypeSelector setHairType = {setHairType} /><Navbar /></>} />
                <Route exact path="/profile" element={<><Profile /><Navbar/></>} />
                <Route exact path="/testDropdown" element={<><ProductsDropdown hairType={"_4c"} /><Navbar /></>} />   
            </Routes>
      </Router>
        </div>
  );
}

export default App;
