
import { sequelize } from "../../database/database.js"
import { DataTypes } from "sequelize"



export const Inyeccion = sequelize.define('inyeccions',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
    },
    mes:{
        type: DataTypes.INTEGER,
    },
    time: {
        type: DataTypes.STRING,
    },
    phone:{
        type: DataTypes.STRING,
    }, 
    email: {
        type: DataTypes.STRING,
        default: null
    }
});


