const Sequelize = require('sequelize');

const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const GroupData = sequelize.define('group',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    GroupName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    isAdmin:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    }
})

module.exports = GroupData