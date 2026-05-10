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

app.listen(5000)