const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3000;

app.use(cors())
app.use(bodyParser.json())



app.post('/api/crear-usuarios', (req, res) => {
    const { Nombre, Apellido } = req.body;
    console.log(Nombre,Apellido)
    console.log("Recibido")

    res.json({message : "usuarios EXITOSO"});
})

app.listen(port, () => {
    console.log(`Servidor de Node.js corriendo en http://localhost:${port}`);
});