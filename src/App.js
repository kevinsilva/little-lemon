import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import BookingPage from './components/BookingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Main />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
