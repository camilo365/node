const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express()
const port = 3000;

app.use(cors())
app.use(bodyParser.json())

const usuario = 'admin'
const contra = 12345

app.post('/api/crear-usuarios', (req, res) => {
    const { User, Password } = req.body;
    console.log(User,Password)
    console.log("Recibido")
    if(User==usuario && Password == contra)
        res.json({message : "E"});
    else{
        res.json({message : "D"})
    }
})

app.post('/api/crear-pacientes', (req, res) => {
    const { Nombre, Apellido, Edad, Ciudad } = req.body;
    console.log(Nombre,Apellido,Edad, Ciudad)
    console.log("Recibido")
    res.json({message : "RU"})
})

app.listen(port, () => {
    console.log(`Servidor de Node.js corriendo en http://localhost:${port}`);
});