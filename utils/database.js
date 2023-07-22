const Sequelize = require('sequelize')
const dotenv = require('dotenv')



const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_MAIN, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});


module.exports = sequelize;
