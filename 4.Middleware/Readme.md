# Node.js Middleware Examples

This project demonstrates how to use **Express.js middleware** such as:
- `body-parser` → to handle form submissions
- `morgan` → to log HTTP requests
- Custom Middleware → to log requests manually

---

## 📌 Features
- Serves a static HTML form (`index.html`).
- Uses `body-parser.urlencoded()` to parse form data.
- Logs submitted form data on the server.
- Demonstrates request logging with `morgan`.
- Implements a custom middleware logger.

---

## 📂 Project Structure
4.Middleware/
│── index1.js # Main Express server
│── public/
│ └── index.html # HTML form served at "/"
└── README.md

## 🚀 Installation & Usage
1. Clone the repository or copy the files.
2. Install dependencies:
   ```npm install express body-parser nodemon```
3. Run the server: ```nodemon index1.js```
4. Open browser at: ```http://localhost:3000```


## Code Example
## index1.js
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Handle form submission
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`Received Data: ${JSON.stringify(req.body)}`);
});

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




## index.html
<!DOCTYPE html>
<html>
<head>
  <title>Form Example</title>
</head>
<body>
  <h1>Submit Form</h1>
  <form action="/submit" method="POST">
    <label>Name:</label>
    <input type="text" name="name" />
    <br /><br />
    <label>Email:</label>
    <input type="email" name="email" />
    <br /><br />
    <button type="submit">Submit</button>
  </form>
</body>
</html>




## Output
<img width="1918" height="971" alt="image" src="https://github.com/user-attachments/assets/9f045d70-e8f4-4980-a9e4-ad6576259dbd" />

Example Console Output
```
Listening on port 3000
{ name: 'Nitin Gavhane', email: 'gavhanenitin911@gmail.com' }
```

## Steps to Use Middleware with Morgan
1. Use npm to install the morgan package:
```
npm install morgan
```
2. Run index2.js with nodemon:
```
nodemon index2.js
```
3. Import the morgan module in your file.
4. Mount the middleware using the Express .use() method.
5. Test the logging on http://localhost:3000 and with Postman.


## index2.js
```
import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// Morgan middleware for logging
app.use(morgan('combined'));

app.get("/", (req, res) => {
  res.send("Morgan Logger works!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

```


## Example Log Output in Terminal:
<img width="1897" height="990" alt="image" src="https://github.com/user-attachments/assets/2a142dcb-8fd8-42c5-80a9-4105dedcbc95" />

::1 - - [24/Aug/2025:02:00:12 +0000] "GET / HTTP/1.1" 200 23 "-" "Mozilla/5.0"



## Steps to Create Custom Middleware
1. Run index3.js with nodemon:
```
nodemon index3.js
```
2. Create your own function called logger(req,res,next).
3. Inside the function use console.log() to log:
- request method
- request URL
- request time
4. Remember to call next() to pass control to the next handler.
5. Mount your middleware function using the Express .use() method.
6. Test the logging on http://localhost:3000 and with Postman.


## index3.js
```
import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  console.log('Request Method:', req.method);
  console.log('Request Time:', new Date().toISOString());
  console.log('---');
  next();
}

// Mount custom middleware
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

## Example Log Output in Terminal:
```
Request URL: /
Request Method: GET
Request Time: 2025-08-24T02:15:30.123Z
---
```