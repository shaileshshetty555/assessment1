const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://mongodb:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Connect to Redis
const redisClient = redis.createClient({
  host: 'redis',
  port: 6379,
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

app.get('/', (req, res) => {
  res.send('Hello, Docker Compose!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
