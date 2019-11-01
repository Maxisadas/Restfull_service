const jwt = require('jsonwebtoken');

//=================
// VERIFICAR TOKEN
//=================

let verificaToken = (req, res, next) => {

    let token = req.get('token'); //get para leer headers

    jwt.verify(token, process.env.SEED_AUTH, (err, decoded) => {

        if (err) {

            return res.status(401).json({

                ok: false,
                err: {
                    message: 'Token no válido'
                }
            })
        }

        req.usuario = decoded.usuario;
        next();

    });


};

//===================
// VERIFICAR ADMIN_ROL
//===================

let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (!(usuario.role === "ADMIN_ROLE")) {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }

        });

    }

    next();

};

//===================
// VERIFICA TOLEN PARA IMAGEN
//===================

let verificaTokenImg = (req, res, next) => {
    let token = req.query.token;

    jwt.verify(token, process.env.SEED_AUTH, (err, decoded) => {

        if (err) {

            return res.status(401).json({

                ok: false,
                err: {
                    message: 'Token no válido'
                }
            })
        }

        req.usuario = decoded.usuario;
        next();

    });



}

module.exports = {
    verificaToken,
    verificaAdmin_Role,
    verificaTokenImg
}