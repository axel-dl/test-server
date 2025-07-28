# Express Test Server

This is a very basic Express server with logging (using [Morgan](https://github.com/expressjs/morgan)).  
**Purpose:** To act as a simple backend for testing reverse proxy setups (such as Nginx, Apache, or cloud load balancers).

## Features

- Logs all HTTP requests in the `combined` format.
- Responds with a simple message at `/`.
- Returns `404 Not Found` for all other routes.

## Usage

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Start the server:**
   ```
   node index.js
   ```
   The server will listen on port `3000` by default.

3. **Test your reverse proxy:**  
   Point your reverse proxy to `http://localhost:3000/` and check the logs/output.

---

*This project is for testing and development