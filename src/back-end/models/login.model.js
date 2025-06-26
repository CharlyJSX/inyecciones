
import { sequelize } from "../../database/database.js"
import { DataTypes } from "sequelize"


export const Login = sequelize.define('Login',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nickname:{
        type: DataTypes.STRING,
    },
    pass:{
        type: DataTypes.STRING,
    },
});