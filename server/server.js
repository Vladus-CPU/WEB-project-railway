import express from 'express';
import cors from 'cors';
import trains from './data/trains.js';
import bookings from './data/bookings.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});
app.get('/api/trains', (req, res) => {
    res.json(trains);
});

app.get('/api/trains/:id', (req, res) => {
  const trainId = Number(req.params.id);
  const train = trains.find((item) => item.id === trainId);

  if (!train) {
    return res.status(404).json({ message: 'Потяг не знайдено' });
  }

  return res.json(train);
});

app.get('/api/bookings', (req, res) => {
  const trainId = Number(req.query.trainId);
  const wagonId = Number(req.query.wagonId);

  if (!trainId || !wagonId) {
    return res.status(400).json({ 
      message: 'Невірні ID потяга або вагона' 
    });
  }

  const bookedSeats = bookings
    .filter((booking) => booking.trainId === trainId && booking.wagonId === wagonId)
    .flatMap((booking) => booking.seats)
    .sort((a, b) => a - b);

  return res.json({ bookedSeats });
});

app.post('/api/bookings', (req, res) => {
  const trainId = Number(req.body.trainId);
  const wagonId = Number(req.body.wagonId);
  const { seats, passenger } = req.body;

  if (!trainId || !wagonId || !Array.isArray(seats) || !seats.length || !passenger) {
    return res.status(400).json({ 
      message: 'Невірні дані бронювання' 
    });
  }

  const train = trains.find((item) => item.id === trainId);
  const wagon = train && train.wagons && train.wagons.find((item) => item.id === wagonId);

  if (!train || !wagon) {
    return res.status(404).json({ 
      message: 'Потяг або вагон не знайдено' 
    });
  }

  const bookedSeats = bookings
    .filter((booking) => booking.trainId === trainId && booking.wagonId === wagonId)
    .flatMap((booking) => booking.seats);

  const hasConflict = seats.some((seat) => bookedSeats.includes(seat));

  if (hasConflict) {
    return res.status(409).json({
       message: 'Деякі місця вже заброньовано' 
      });
  }

  const booking = {
    id: Date.now(), 
    trainId,
    wagonId,
    seats,
    passenger
  };

  bookings.push(booking);

  return res.status(201).json({
    message: 'Бронювання створено',
    booking,
    bookedSeats: [...bookedSeats, ...seats].sort((a, b) => a - b)
  });
});

app.listen(5000)