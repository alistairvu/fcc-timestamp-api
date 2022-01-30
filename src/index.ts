import express from 'express';
import { timeRouter } from './time/time.router';

const app = express();
const port = process.env.PORT || 6960;

app.get('/', (req, res) => {
  return res.send({ message: 'Hello!' });
});

app.use('/api', timeRouter);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
