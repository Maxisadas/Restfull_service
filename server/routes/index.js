const express = require('express');
const app = express();

app.use(require('./routeUsuario'));
app.use(require('./login'));
app.use(require('./routeCategoria'));
app.use(require('./routeProductos'));
app.use(require('./uploads'));
app.use(require('./imagenes'));


module.exports = app;