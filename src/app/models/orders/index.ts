import { DataTypes } from "sequelize";
import sequelize from "../../../database/connection";

const OrdersModel = sequelize.define("orders", {
    orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    productValue: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    productQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalValue: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
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
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "customers",
            key: "customerId"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "products",
            key: "productId"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    }
}, { freezeTableName: true, timestamps: false });

export default OrdersModel;
