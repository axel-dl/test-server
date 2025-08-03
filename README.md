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

3. **Test endpoints:**

   - **With Postman:**
     Import the file `express-test-server.postman_collection.json` into Postman to quickly test all endpoints (GET/POST/PUT/DELETE on `/test`, `/`, `/ping`, and a 404 case).


   - **With cURL:**
     Use these commands in your terminal to test endpoints:
     ```sh
     # Home endpoint
     curl -i http://localhost:3000/

     # GET /test
     curl -i http://localhost:3000/test

     # POST /test
     curl -i -X POST http://localhost:3000/test

     # PUT /test
     curl -i -X PUT http://localhost:3000/test

     # DELETE /test
     curl -i -X DELETE http://localhost:3000/test

     # GET /ping
     curl -i http://localhost:3000/ping

     # 404 Not Found example
     curl -i http://localhost:3000/doesnotexist
     ```

4. **Test JWT Token Generation:**

   - **With Postman:**
     Use the `POST /token` endpoint to generate a JWT token. Example request:
     ```json
     {
       "id": 1,
       "username": "testuser"
     }
     ```
     The response will include a token that you can use for authentication.

   - **With cURL:**
     Run the following command to generate a token:
     ```sh
     curl -i -X POST http://localhost:3000/token
     ```
     The response will include a JSON object with the token.

5. **Test your reverse proxy:**  
   Point your reverse proxy to `http://localhost:3000/` and check the logs/output.

---

*This project is for testing and development*