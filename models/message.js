const Sequelize = require('sequelize');

const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const MsgData = sequelize.define('message',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    message:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports = MsgData