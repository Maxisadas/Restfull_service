const express = require('express');

let { verificaToken, verificaAdmin_Role } = require('../middlewares/auth');

let app = express();

let Categoria = require('../models/categoria');
//================================
//Mostrar todas las categorias
//================================
app.get('/categoria', verificaToken, (req, res) => {
    let userId = req.usuario._id
    Categoria.find({ usuario: userId }).sort('descripcion').populate('usuario', 'nombre email').exec((err, categorias) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        res.json({
            ok: true,
            categorias
        });



    });

});

//=====================================
//Mostrar todas las categorias por ID
//=====================================

app.get('/categoria/:id', verificaToken, (req, res) => {

    let id = req.params.id;
    Categoria.findById(id, (err, categorias) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        if (!categorias) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "La categoria no existe"
                }

            });

        }

        res.json({
            ok: true,
            categorias
        });

    });

});

//=====================================
//Crear nueva categoria
//=====================================
app.post('/categoria', verificaToken, (req, res) => {

    //req.usuario._id

    let body = req.body;

    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.usuario._id
    });

    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err

            });

        }

        res.json({
            ok: true,
            categoria: categoriaDB

        });

    });


});

//=====================================
//Actualizar una categoria
//=====================================

app.put('/categoria/:id', verificaToken, (req, res) => {
    let id = req.params.id;
    let body = req.body;

    Categoria.findByIdAndUpdate(id, body, { new: true, runValidators: true, useFindAndModify: true }, (err, categoriaDb) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };
        if (!categoriaDb) {
            return res.status(400).json({
                ok: false,
                err
            });

        }

        res.json({
            ok: true,
            categoria: categoriaDb

        });

    });

});

//=====================================
//borrar una categoria
//=====================================

app.delete('/categoria/:id', [verificaToken, verificaAdmin_Role], (req, res) => {
    let id = req.params.id;

    Categoria.findByIdAndDelete(id, { runValidators: true, useFindAndModify: true }, (err, categoriaDb) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        if (!categoriaDb) {

            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            categoria: categoriaDb,
            message: "Categoria eliminada de la base de datos"

        });


    });


});

module.exports = app;