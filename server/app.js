const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

require('./api/user/User');

const userApi = require('./api/user');

const PORT = 3000;

const login = 'yura0seredyuk';
const pass = 'Qwepoi789';
const projectName = 'DevTestProject';
const mongoUri = `mongodb+srv://${login}:${pass}@cluster0.naudy.mongodb.net/${projectName}?retryWrites=true&w=majority`;

app.use(bodyParser.json());

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('connect successful');
});

mongoose.connection.on('error', err => {
  console.log('error', err);
});

app.use('/server/api/user', userApi);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
