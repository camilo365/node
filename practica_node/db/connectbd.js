process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

/* solo conexion base de datos */
/* 
require('dotenv').config({path: 'C:/Users/adm/Desktop/node/node/.env'}) */
require('dotenv').config({path: 'C:/Users/junio/Desktop/node_nata/node/.env'})

const sql = require('mssql')

const config = {
    server : process.env.DATABASE_SERVER,
    port : Number(process.env.DATABASE_PORT),
    database : process.env.DATABASE_NAME,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    options: {
      /* se pone esta linea para evitar la validacion de certificado */
      encrypt: true, // Asegura que la conexión esté cifrada
      trustServerCertificate: true // Desactiva la validación de certificado (esto puede ayudar a evitar el error)
    }
}

console.log(config.database,config.password,config.user,config.server)
console.log('_______________')
async function datosbd() {
    try {
      await sql.connect(config)
      console.log('Conectado a la base de datos SQL Server');
      
    } catch (err) {
      console.error('Error de conexión:', err);  // Si hay un error, lo mostramos
    } finally {
      sql.close();  // Cerramos la conexión después de usarla
    }
  }
  
  // Llamamos a la función para probar la conexión
datosbd();

module.exports = sql
module.exports = datosbd;

