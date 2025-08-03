const express = require('express');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Logging middleware
app.use(morgan('combined'));

// Color helper functions
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Secret key for JWT (in a real application, store this securely)
const JWT_SECRET = 'your_jwt_secret_key';

// Basic route
app.get('/', (req, res) => {
  console.log(colors.green + '[GET /] Home endpoint hit' + colors.reset);
  res.send('Express server is running.');
});

// Test GET endpoint
app.get('/test', (req, res) => {
  console.log(colors.cyan + '[GET /test] Test endpoint hit' + colors.reset);
  res.send('GET /test OK');
});

// Test POST endpoint
app.post('/test', (req, res) => {
  console.log(colors.yellow + '[POST /test] Test endpoint hit' + colors.reset);
  res.send('POST /test OK');
});

// Test PUT endpoint
app.put('/test', (req, res) => {
  console.log(colors.blue + '[PUT /test] Test endpoint hit' + colors.reset);
  res.send('PUT /test OK');
});

// Test DELETE endpoint
app.delete('/test', (req, res) => {
  console.log(colors.red + '[DELETE /test] Test endpoint hit' + colors.reset);
  res.send('DELETE /test OK');
});

// Test custom endpoint
app.get('/ping', (req, res) => {
  console.log(colors.magenta + '[GET /ping] Ping endpoint hit' + colors.reset);
  res.send('pong');
});

// Endpoint to generate a JWT token
app.post('/token', (req, res) => {
  const user = { id: 1, username: 'testuser' }; // Example user data

  // Generate a token
  const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });

  console.log(colors.green + '[POST /token] Token generated for user' + colors.reset);
  res.json({ token });
});

// Catch-all route for testing reverse proxy
app.all('*', (req, res) => {
  console.log(colors.red + `[${req.method} ${req.originalUrl}] 404 Not Found` + colors.reset);
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
