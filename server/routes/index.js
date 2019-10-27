const express = require('express');
const app = express();

app.use(require('./routeUsuario'));
app.use(require('./login'));


module.exports = app;