import { DataTypes } from "sequelize";
import sequelize from "../../../database/connection";

const ProductsModel = sequelize.define("products", {
    productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    value: {
        type: DataTypes.FLOAT,
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

export default ProductsModel;
