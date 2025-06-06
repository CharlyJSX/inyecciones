
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
        type: DataTypes.STRINGS,
    },
});