const {DataTypes} = require('sequelize')
const sequelize = require('../dbConnection')

const User = sequelize.define('User',{
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    fio:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
})


module.exports = User
