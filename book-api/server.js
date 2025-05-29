const express = require('express');
const app = express();
const port = 3000;

const booksRouter = require('./routes/books');

app.use(express.json()); // To parse JSON bodies
app.use('/api/books', booksRouter);

app.listen(port, () => {
  console.log(`Book API listening at http://localhost:${port}`);
});
