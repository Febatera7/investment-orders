import { ProductsParams, ProductsResponse } from "../interfaces/products";
import { Request, Response } from "express";
import logger from "../../utils/logger";
import { productsServices } from "../services";

const {
    createProduct,
    findProducts,
    updateProduct,
    activeInactiveProduct
} = productsServices;

const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: number = req.userId;

        const product: ProductsParams = req.body;

        const response: ProductsResponse = await createProduct(product, userId);

        res.status(201).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const read = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: number = req.userId;

        const response: ProductsResponse[] = await findProducts(userId);

        res.status(200).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const { productId } = req.params;

        const productBody: ProductsParams = req.body;

        const productIdParse: number = parseInt(productId);

        const product: ProductsParams = { _id: productIdParse, ...productBody };

        const response: ProductsResponse = await updateProduct(product);

        res.status(200).send({
            oldData: response,
            modifiedData: productBody
        });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const activeInactive = async (req: Request, res: Response): Promise<void> => {
    try {
        const { productId } = req.params;

        const productIdParse: number = parseInt(productId);

        const response: ProductsResponse = await activeInactiveProduct(productIdParse);

        res.status(200).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

export default { create, read, update, activeInactive };
