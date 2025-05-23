import { sequelize } from "../../database/database.js"
import { DataTypes } from "sequelize"
import { Task } from "./Task.js";


export const Projects = sequelize.define('projects',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
    },
    priority: {
        type: DataTypes.INTEGER,
    }, 
    description: {
        type: DataTypes.STRING,
    },
});

Projects.hasMany(Task, {
    forgeignKey: 'projectId',
    sourceKey: 'id'
})

Task.belongsTo(Projects, {
    foreignKey: 'projectId',
    targetId: 'id'
})