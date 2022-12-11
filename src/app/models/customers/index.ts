import { DataTypes } from "sequelize";
import sequelize from "../../../database/connection";

const CustomersModel = sequelize.define("customers", {
    customerId: {
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
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "userId"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, { freezeTableName: true, timestamps: false });

export default CustomersModel;
