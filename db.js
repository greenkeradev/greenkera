
const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://greenkera:mijwM6Vs9cUTt5zJ@cluster0.1sgmm8h.mongodb.net/?retryWrites=true&w=majority'; // replace with your MongoDB URL

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connection successful');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

module.exports = mongoose.connection;
