import { createContext, useContext, useState } from 'react';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [selectedWagon, setSelectedWagon] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const value = {
    selectedTrain,
    setSelectedTrain,
    selectedWagon,
    setSelectedWagon,
    selectedSeats,
    setSelectedSeats
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}