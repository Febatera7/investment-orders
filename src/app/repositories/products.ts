import Products from "../models/products/dto";
import ProductsModel from "../models/products";
import { ProductsParams } from "../interfaces/products";
import logger from "../../utils/logger";

const createProduct = async (product: ProductsParams): Promise<Products> => {
    try {
        const newProduct: Products = await ProductsModel.create(product);

        return newProduct;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findProducts = async (userId: number): Promise<Products[]> => {
    try {
        const products: Products[] = await ProductsModel.find({ userId });

        return products;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findProduct = async (productId: number, userId: number): Promise<Products> => {
    try {
        const product: Products = await ProductsModel.findOne({ _id: productId, userId });

        return product;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const updateProduct = async (product: ProductsParams, userId: number): Promise<Products> => {
    try {
        const oldProductDocument: Products = await ProductsModel.findOneAndUpdate(
            { _id: product._id, userId },
            { ...product }
        );

        return oldProductDocument;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const activeInactiveProduct = async (productId: number, userId: number): Promise<Products> => {
    try {
        const product: Products = await ProductsModel.findOne({ _id: productId, userId });

        const active = product.active ? false : true;

        await product.update({ active });

        product.active = active;

        return product;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

export default {
    createProduct,
    findProducts,
    findProduct,
    updateProduct,
    activeInactiveProduct,
};
