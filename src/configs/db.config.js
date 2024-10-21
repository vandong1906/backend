const { Sequelize } = require("sequelize");
//config database
const env = process.env;

const db = {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME  
};
const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql'
});


module.exports = sequelize;