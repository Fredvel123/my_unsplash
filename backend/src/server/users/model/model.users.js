import { DataTypes } from 'sequelize';
import sequelize from '../../../config/database/db.connection.js';

const usersModels = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    full_name: {
        type: DataTypes.TEXT,
    },
    nick_name: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT,
    },
    password: {
        type: DataTypes.TEXT,
    }, 
}, {
    timestamps: false
})

export default usersModels;