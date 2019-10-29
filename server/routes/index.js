const express = require('express');
const app = express();

app.use(require('./routeUsuario'));
app.use(require('./login'));
app.use(require('./routeCategoria'));
app.use(require('./routeProductos'));


module.exports = app;