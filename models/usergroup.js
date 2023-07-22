const Sequelize = require('sequelize');

const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const userGroupData = sequelize.define('usergroup',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    userId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    groupId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    isAdmin:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    }
})

module.exports = userGroupData