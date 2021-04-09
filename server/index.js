const express = require('express');
const dotenv = require('dotenv').config({path: __dirname + '/../.env'});
const db = require('./../db/');
const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../dist/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});