process.env.PORT = process.env.PORT || 3000;

//ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// BASE DE DATOS

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost/cafe';
} else {

    urlDB = "mongodb+srv://Maxisadas:SWJ7PfqLvOf5F9aR@cluster0-58snd.mongodb.net/cafe";

}

process.env.urlDB = urlDB;