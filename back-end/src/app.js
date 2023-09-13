// initial imports
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
// set env variables to use at app
require('dotenv').config();

// set app variable
const app = express();

// set uses
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

module.exports = app