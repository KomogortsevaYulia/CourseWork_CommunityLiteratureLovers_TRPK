const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnection");

const Role = sequelize.define(
  "Role",
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Role;
