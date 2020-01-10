const express = require('express');

const app = express();

let port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/dist"));

app.get('/', (req, res) =>{
  res.sendFile("index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(__dirname);
  console.log("Listening Port " + port);
});
