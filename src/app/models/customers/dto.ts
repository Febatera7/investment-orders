import { Document } from "mongoose";

interface Customers extends Document {
    _id?: number,
    name: string,
    email: string,
    cpf: string,
    birthday: Date,
    userId: number,
    active: boolean
}

export default Customers;
