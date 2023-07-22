const Sequelize = require('sequelize');

const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const UserData = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    mobilenumber:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = UserData