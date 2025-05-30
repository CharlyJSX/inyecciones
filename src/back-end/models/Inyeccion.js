import { sequelize } from "../../database/database.js"
import { DataTypes } from "sequelize"



export const Inyeccion = sequelize.define('projects',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
    },
    time: {
        type: DataTypes.TIME,
    }, 
});
