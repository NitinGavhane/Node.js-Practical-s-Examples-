import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log('Request URL:', req.originalUrl); // Log the request URL to the
  console.log('Request Method:', req.method); // Log the request method to the
  console.log('Request Time:', new Date().toISOString()); // Log the request time to the
  console.log('---'); // Separator for better readability in the
  console
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
