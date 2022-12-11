import { DataTypes } from "sequelize";
import sequelize from "../../../database/connection";

const UsersModel = sequelize.define("users", {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, { freezeTableName: true, timestamps: false });

export default UsersModel;
