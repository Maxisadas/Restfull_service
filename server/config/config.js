process.env.PORT = process.env.PORT || 3000;

//ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// BASE DE DATOS

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost/cafe';
} else {

    urlDB = process.env.MONGO_URI;

}

process.env.urlDB = urlDB;

// Vencimiento del token

process.env.CADUCIDAD_TOKEN = '48h';

//SEED de autenticacion

process.env.SEED_AUTH = process.env.SEED_AUTH || 'secret_token_maxi';

//GOOGLE CLIENT ID

process.env.CLIENT_ID = process.env.CLIENT_ID || "1000807048414-nj1pk2vop4thr3e175rh2fb3hmkargpv.apps.googleusercontent.com";