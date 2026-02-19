const express = require('express');

const app = express();

app.use(express.json());

const testRoutes = require('./routes/testRoutes');

app.use('/api/test', testRoutes);


app.get('/', (req, res) => {
  res.send('API Running');
});

module.exports = app;
