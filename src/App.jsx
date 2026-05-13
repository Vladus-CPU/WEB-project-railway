import Header from './components/header/Header';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booking from './pages/Booking';
import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/booking/:trainId" element={<Booking/>} />
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;