import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import ResultsPage from './components/ResultsPage.js';
import HairQuiz from './components/HairQuiz';
import TypeSelector from './components/TypeSelector';
import Navbar from './components/Navbar';
import Profile from './components/Profile'
import { ProductsDropdown } from './components/Dropdown'
import Community from './components/Community'
import {useUserState, useUser} from "./utilities/firebase"

function App() {
    const [hairType, setHairType] = useState(null);
    const [userData, setUserData] = useState(null);
    const [selectedGoals, setSelectedGoals] = useState([]);
    const [selectedChallenges, setSelectedChallenges] = useState([]);
    const [selectedQuality, setSelectedQuality] = useState([]);

  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage setUserData={setUserData} userData={userData} 
                                                            setHairType={setHairType} hairType={hairType}/>} />
                <Route exact path="/results" element={
                <><ResultsPage hairType={hairType} setHairType={setHairType} 
                    selectedGoals={selectedGoals} setSelectedGoals={setSelectedGoals}
                    selectedChallenges={selectedChallenges} setSelectedChallenges={setSelectedChallenges}
                    selectedQuality={selectedQuality} setSelectedQuality={setSelectedQuality}/></>}/>
                <Route exact path="/quiz" element={<HairQuiz setHairType={setHairType} />} />
                <Route exact path="/selector" element={<><TypeSelector setHairType = {setHairType} /></>} />
                <Route exact path="/profile" element={<><Profile hairType={hairType} setHairType={setHairType}/></>} />
                <Route exact path="/community" element={<><Community /><Navbar /></>} />

            </Routes>
      </Router>
        </div>
  );
}

export default App;
