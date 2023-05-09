import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ReservationPage from './components/ReservationPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route path="/reservation" element={<ReservationPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
