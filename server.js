
const express = require('express');
const db = require('./db'); // import the database connection
const categoryRoutes = require('./routes/category');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(express.json());
app.use('/categories', categoryRoutes);

db.on('connected', () => { // listen to the 'connected' event
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});

db.on('error', (err) => { // listen to the 'error' event
  console.error('MongoDB connection error:', err);
});