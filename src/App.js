import './App.css';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import ResultsPage from './components/ResultsPage.js';
import HairQuiz from './components/HairQuiz';
import TypeSelector from './components/TypeSelector';
import Dropdown from './components/Dropdown;'

function App() {
  const [hairType, setHairType] = useState(null);

  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/results" element={<ResultsPage hairType = {hairType}/>} />
                <Route exact path="/quiz" element={<HairQuiz setHairType = {setHairType} />} />
                <Route exact path="/selector" element={<TypeSelector setHairType = {setHairType} />} />
                <Route exact path="/testDropdown" element={<Dropdown hairType = {"_4c"} />} />
            </Routes>
      </Router>
        </div>
  );
}

export default App;
