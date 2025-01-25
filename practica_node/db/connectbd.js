/* solo conexion base de datos */

require('dotenv').config({path: '../.env'})

const sql = require('mssql')
const { database, password } = require('pg/lib/defaults')
const { Connection } = require('pg')




const config = {
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    server : process.env.DATABASE_HOST,
    database : process.env.DATABASE_NAME

}
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

