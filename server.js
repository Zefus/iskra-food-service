const express = require('express');
const data = require('./data.js');

const app = express();

let port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/dist"));

app.get('/', (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(__dirname);
  console.log("Listening Port " + port);
});
