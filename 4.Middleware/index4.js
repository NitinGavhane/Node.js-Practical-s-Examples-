import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { log } from "console";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var GenerateID = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); 
});

function GenerateIDfunction(req, res, next) {
  console.log("GenerateID");
  GenerateID = req.body.name + req.body.email;
    next();
}

app.use(GenerateIDfunction);

app.post("/submit", (req, res, next) => {
  console.log(GenerateID);
  res.send(`<h1>Your ID is:</h1><h2>${GenerateID}✌️</h2>`);

});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
