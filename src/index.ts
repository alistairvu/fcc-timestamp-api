import express from 'express';

const app = express();
const port = process.env.PORT || 6960;

app.get('/', (req, res) => {
  return res.send({ message: 'Hello!' });
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
