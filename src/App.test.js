import { render, screen } from '@testing-library/react';
import App from './App';
import ResultsPage from './components/ResultsPage'
import Profile from './components/Profile'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useUser, useUserState } from './utilities/firebase';

jest.mock("./utilities/firebase");

test('renders I know my type button', () => {
  useUser.mockReturnValue([null, false, null]);
  useUserState.mockReturnValue([null]);
  render(<App />);
  const linkElement = screen.getByText(/I know my type!/i);
  expect(linkElement).toBeInTheDocument();
});

test('join our community appears when not logged in', () => {
  useUser.mockReturnValue([null, false, null]);
  useUserState.mockReturnValue([null]);
  render(
    <Router>
      <Routes>
        <Route exact path="/" element={<ResultsPage hairType={"4C"} setHairType={(e) => null} />}/>
      </Routes>
    </Router>)
    const joinButton = screen.getByTestId("joinButton");
    expect(joinButton).toBeInTheDocument();
});

test('join our community appears when not logged in on profile', () => {
  useUser.mockReturnValue([null, false, null]);
  useUserState.mockReturnValue([null]);
  render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Profile hairType={"4C"} setHairType={(e) => null} />}/>
    </Routes>
  </Router>)
  const joinButton = screen.getByText(/Join Our Community!/i);
  expect(joinButton).toBeInTheDocument();
});


test('it shows user\'s name on profile', () => {
  useUser.mockReturnValue([{userName: "Joe", hairType: "4B"}, false, null]);
  useUserState.mockReturnValue([{ displayName: 'Joe' }]);
  render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Profile hairType={"4C"} setHairType={(e) => null} />}/>
    </Routes>
  </Router>)

  const profileUserName = screen.getByText(/Joe/i);
  expect(profileUserName).toBeInTheDocument();
});

test('shows Sign Out if logged in', () => {
  useUser.mockReturnValue([{userName: "Joe", hairType: "4B"}, false, null]);
  useUserState.mockReturnValue([{ displayName: 'Joe' }]);
  render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Profile hairType={null} setHairType={(e) => null} />}/>
    </Routes>
  </Router>);
  const button = screen.queryByText(/Sign Out/i);
  expect(button).toBeInTheDocument();
});

