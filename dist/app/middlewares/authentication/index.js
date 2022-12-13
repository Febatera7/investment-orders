"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../services");
const genValidateToken_1 = require("../../helpers/genValidateToken");
const { findUser } = services_1.usersServices;
exports.default = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader)
            throw new Error("Unauthorized");
        const [, token] = authHeader.split(" ");
        if (!token)
            throw new Error("Unauthorized");
        const decoded = (0, genValidateToken_1.validateToken)(token);
        const decodedParse = JSON.parse(decoded);
        const user = await findUser(decodedParse.userId);
        if (!user)
            throw new Error("Unauthorized");
        req.userId = decodedParse.userId;
        next();
    }
    catch (error) {
        res.status(401).send({
            error: error.message === "Unexpected token u in JSON at position 0" ? "Session expired" : error.message
        });
    }
};
