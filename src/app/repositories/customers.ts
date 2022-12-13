import Customers from "../models/customers/dto";
import CustomersModel from "../models/customers";
import { CustomersParams } from "../interfaces/customers";
import logger from "../../utils/logger";

const createCustomer = async (customer: CustomersParams): Promise<Customers> => {
    try {
        const newCustomer: Customers = await CustomersModel.create(customer);

        return newCustomer;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findCustomers = async (userId: number): Promise<Customers[]> => {
    try {
        const customers: Customers[] = await CustomersModel.find({ userId });

        return customers;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findCustomer = async (customerId: number, userId: number): Promise<Customers> => {
    try {
        const customer: Customers = await CustomersModel.findOne({ _id: customerId, userId });

        return customer;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const updateCustomer = async (customer: CustomersParams, userId: number): Promise<Customers> => {
    try {
        const oldCustomerDocument: Customers = await CustomersModel.findOneAndUpdate(
            { _id: customer._id, userId },
            { ...customer }
        );

        return oldCustomerDocument;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const activeInactiveCustomer = async (customerId: number, userId: number): Promise<Customers> => {
    try {
        const customer: Customers = await CustomersModel.findOne({ _id: customerId, userId },);

        const active = customer.active ? false : true;

        await customer.update({ active });

        customer.active = active;

        return customer;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

export default {
    createCustomer,
    findCustomers,
    findCustomer,
    updateCustomer,
    activeInactiveCustomer
};
