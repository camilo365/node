require('dotenv').config({path: 'C:/Users/junio/Desktop/node_nata/node/.env'})

const {sql, datosbd} = require('../db/connectbd')

/* inserccion datos prueba */

async function insertardatos(req,res) {
        const { User, Password } = req.body;
        try {
            await datosbd();
            const insertar = await sql.query`INSERT INTO usuarios_registrados(user,contra) VALUES (${User},${Password})`;
            res.status(201).json({ message: 'usuario creado exitosamente'})
            
        } catch (error) {
            console.error('error al insertar en la bd', err);
        }
}

module.exports = insertardatos;