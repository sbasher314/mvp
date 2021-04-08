const mongoose = require('mongoose');
const models = require('./models')(mongoose);

mongoose.connect('mongodb://localhost/mvp', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

module.exports = db;