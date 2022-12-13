import Customers from "../models/customers/dto";
import CustomersModel from "../models/customers";
import { CustomersParams } from "../interfaces/customers";
import logger from "../../utils/logger";

const createCustomers = async (customer: CustomersParams): Promise<Customers> => {
    try {
        const createCustomer: Customers = await CustomersModel.create(customer);

        return createCustomer;
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

const updateCustomer = async (customer: CustomersParams): Promise<Customers> => {
    try {
        const oldCustomerDocument: Customers = await CustomersModel.findByIdAndUpdate(
            customer._id,
            { ...customer }
        );

        return oldCustomerDocument;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const activeInactiveCustomer = async (customerId: number): Promise<Customers> => {
    try {
        const customer: Customers = await CustomersModel.findById(customerId);

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
    createCustomers,
    findCustomers,
    updateCustomer,
    activeInactiveCustomer
};
