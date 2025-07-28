const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Logging middleware
app.use(morgan('combined'));

// Basic route
app.get('/', (req, res) => {
  res.send('Express server is running.');
});

// Catch-all route for testing reverse proxy
app.all('*', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
