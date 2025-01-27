const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express()
const port = 3000;

app.use(cors())
app.use(bodyParser.json())
/* de estar forma recibo del front y despacho la inserccion */
const insertardatos = require('./logic/consultas')
app.post('/api/crear-usuario', insertardatos)

/* api aparte */

app.post('/api/crear-pacientes', (req, res) => {
    const { Nombre, Apellido, Edad, Ciudad } = req.body;
    console.log(Nombre,Apellido,Edad, Ciudad)
    console.log("Recibido")
    res.json({message : "RU"})
})

app.listen(port, () => {
    console.log(`Servidor de Node.js corriendo en http://localhost:${port}`);
});