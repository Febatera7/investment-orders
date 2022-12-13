import { ProductsParams, ProductsResponse } from "../interfaces/products";
import { ProductsRepository } from "../repositories";
import generateId from "../helpers/generateId";
import logger from "../../utils/logger";

const {
    createProduct: create,
    findProducts: findAll,
    findProduct: findOne,
    updateProduct: update,
    activeInactiveProduct: activeInactive
} = ProductsRepository;

const createProduct = async (product: ProductsParams, userId: number): Promise<ProductsResponse> => {
    try {
        const customerId = generateId();

        const newProduct: ProductsResponse = await create({
            _id: customerId,
            name: product.name,
            value: product.value,
            userId
        });

        return newProduct;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findProducts = async (userId: number): Promise<ProductsResponse[]> => {
    try {
        const products: ProductsResponse[] = await findAll(userId);

        return products;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findProduct = async (productId: number, userId: number): Promise<ProductsResponse> => {
    try {
        const product: ProductsResponse = await findOne(productId, userId);

        return product;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const updateProduct = async (productData: ProductsParams, userId: number): Promise<ProductsResponse> => {
    try {
        const product: ProductsResponse = await update(productData, userId);

        return product;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const activeInactiveProduct = async (productId: number, userId: number): Promise<ProductsResponse> => {
    try {
        const product: ProductsResponse = await activeInactive(productId, userId);

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
    activeInactiveProduct
};
