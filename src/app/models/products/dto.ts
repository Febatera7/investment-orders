import { Document } from "mongoose";


interface Products extends Document {
    _id?: number,
    name: string,
    value: number,
    active: boolean,
}

export default Products;
