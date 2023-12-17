const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    database: 'proyecto',
    username: 'root',
    password: '',
    port: 3306,
    pool: { max: 10, min: 0 }
});

const dbConnect = () => {
    sequelize.authenticate()
        .then(() => console.log('Se establecio la conexión'))
        .catch((err) => console.error('No se puede conectar'))
}


module.exports = dbConnect;
// module.exports = sequelize;