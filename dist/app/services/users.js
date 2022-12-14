"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../repositories");
const generateId_1 = __importDefault(require("../helpers/generateId"));
const genValidateToken_1 = require("../helpers/genValidateToken");
const logger_1 = __importDefault(require("../../utils/logger"));
const passwordHash_1 = require("../helpers/passwordHash");
const verifyEmailExists_1 = __importDefault(require("../helpers/verifyEmailExists"));
const { createUser: create, findUser: find, updateUser: update, findByEmail: findEmail } = repositories_1.UsersRepository;
const createUser = async (user) => {
    try {
        let userId;
        let findId = true;
        while (findId) {
            userId = (0, generateId_1.default)();
            const idExists = await find(userId);
            if (!idExists)
                findId = false;
        }
        const passwordHash = await (0, passwordHash_1.passwordGenerate)(user.password);
        if (await (0, verifyEmailExists_1.default)(user.email))
            throw new Error("E-mail already registered");
        const newUser = await create({
            _id: userId,
            name: user.name,
            password: passwordHash,
            email: user.email,
            cpf: user.cpf,
            birthday: user.birthday,
        });
        let token = (0, genValidateToken_1.generateToken)(userId);
        if (typeof newUser === "string")
            token = "";
        return { newUser, token };
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findUser = async (userId) => {
    try {
        const user = await find(userId);
        return user;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const updateUser = async (user) => {
    try {
        if (user.password) {
            const passwordHash = await (0, passwordHash_1.passwordGenerate)(user.password);
            user.password = passwordHash;
        }
        const updateUser = await update(user);
        return updateUser;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findByEmail = async (email) => {
    try {
        const user = await findEmail(email);
        return user;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
exports.default = {
    createUser,
    findUser,
    updateUser,
    findByEmail
};
