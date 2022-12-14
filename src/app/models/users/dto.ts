import { Document } from "mongoose";

interface Users extends Document {
    _id?: number,
    name: string,
    email: string,
    password: string,
    cpf: string,
    birthday: Date
}

export default Users;
