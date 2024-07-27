const express = require('express');
const bodyParser = require('body-parser');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/chat', chatRoutes);

module.exports = app;