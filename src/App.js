import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import ResultsPage from './components/ResultsPage.js';
import HairQuiz from './components/HairQuiz';

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/trades" element={<ResultsPage />} />
                <Route exact path="/quiz" element={<HairQuiz />} />
            </Routes>
      </Router>
        </div>
  );
}

export default App;
