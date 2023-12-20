const mysql = require('mysql2');

const pool = mysql.createPool({
    user: 'root',
    password: '',
    host: 'localhost',
    port: 3306,
    database: 'funko_schema',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if (err) {
        console.error('No se puede conectar a la Base de Datos' + err);
    }
    else {
        console.log('Se establecio la conexión con exito');
        conn.release();
    }
});


module.exports = {
    conn: pool.promise()
};