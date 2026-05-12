import express from 'express';
import cors from 'cors';
import trains from './data/trains.js';

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

app.listen(5000)