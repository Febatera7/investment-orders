import { CustomersParams, CustomersResponse } from "../interfaces/customers";
import { CustomersRepository } from "../repositories";
import generateId from "../helpers/generateId";
import logger from "../../utils/logger";

const {
    createCustomer: create,
    findCustomers: findAll,
    findCustomer: findOne,
    updateCustomer: update,
    activeInactiveCustomer: activeInactive
} = CustomersRepository;

const createCustomer = async (customer: CustomersParams, userId: number): Promise<CustomersResponse> => {
    try {
        const customerId = generateId();

        const newCustomer: CustomersResponse = await create({
            _id: customerId,
            name: customer.name,
            email: customer.email,
            cpf: customer.cpf,
            birthday: customer.birthday,
            userId
        });

        return newCustomer;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findCustomers = async (userId: number): Promise<CustomersResponse[]> => {
    try {
        const customers: CustomersResponse[] = await findAll(userId);

        return customers;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findCustomer = async (customerId: number): Promise<CustomersResponse> => {
    try {
        const customer: CustomersResponse = await findOne(customerId);

        return customer;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const updateCustomer = async (customerData: CustomersParams): Promise<CustomersResponse> => {
    try {
        const customer: CustomersResponse = await update(customerData);

        return customer;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const activeInactiveCustomer = async (customerId: number): Promise<CustomersResponse> => {
    try {
        const customer: CustomersResponse = await activeInactive(customerId);

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
