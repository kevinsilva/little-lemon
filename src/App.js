import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Main />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
