
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import MovieCard from './components/MovieCard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} /> 
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/movie/:id" element={<MovieCard />} />
      </Routes>
    </Router>
  )
}

export default App
