require('dotenv').config({path: '../.env'})

console.log('variables de entorno', process.env)

function datosbd(){  
    console.log(process.env.DATABASE_HOST)
    console.log(process.env.DATABASE_PORT)
    console.log(process.env.DATABASE_NAME)
    console.log(process.env.DATABASE_USER)
    console.log(process.env.DATABASE_PASSWORD)
}

module.exports = { datosbd }

