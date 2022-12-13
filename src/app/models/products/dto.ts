import { Document } from "mongoose";


interface Products extends Document {
    _id?: number,
    name: string,
    value: number,
    userId: number,
    active: boolean,
}

export default Products;
