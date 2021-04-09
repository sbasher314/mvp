const express = require('express');
const db = require('./../db/');
const app = express();
const port = 3000;

app.use(express.static('bundle'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../bundle/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});