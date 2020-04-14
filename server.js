const express = require("express");
const app = express();
const { exec } = require("child_process");

app.listen(3000, () => {
  console.log("server is listening");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/buildResume", (req, res) => {
  console.log("sent POST request");
  exec("hackmyresume BUILD resume.json");
});
