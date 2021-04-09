const mongoose = require('mongoose');
const models = require('./models.js')(mongoose);
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

/* example user for testing purposes */

db.addUser = (parameters) => {
  return models.User.create(parameters);
};

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;