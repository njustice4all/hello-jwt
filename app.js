const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require('./config');
const port = process.env.PORT || 9999;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* logger */
app.use(morgan('dev'));

/* key: jwt-secret value: SeCrEtKeYfOrHaShInG */
app.set('jwt-secret', config.secret);

app.get('/', (req, res) => {
  res.send('Hello JWT');
});

app.use('/api', require('./routes/api'));

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});

mongoose.connect(config.mongodbUri);
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
  console.log('connected to mongodb server');
});
