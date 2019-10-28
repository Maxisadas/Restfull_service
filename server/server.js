require('./config/config');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// configuracion global de rutas.
app.use(require('./routes/index'))

//habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));




mongoose.connect(process.env.urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.listen(process.env.PORT, () => {

    console.log('Esuchando puerto:', process.env.PORT);
});