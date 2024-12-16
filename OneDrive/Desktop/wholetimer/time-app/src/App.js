import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ClockPage from './pages/ClockPage';
import StopwatchPage from './pages/StopwatchPage';
import TimerPage from './pages/TimerPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/clock" element={<ClockPage />} />
        <Route path="/stopwatch" element={<StopwatchPage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/" element={<ClockPage />} />
      </Routes>
    </Router>
  );
}

export default App;

