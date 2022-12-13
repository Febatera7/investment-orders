import { CustomersParams, CustomersResponse } from "../interfaces/customers";
import { CustomersRepository } from "../repositories";
import generateId from "../helpers/generateId";
import logger from "../../utils/logger";

const {
    createCustomers: create,
    findCustomers: find,
    updateCustomer: update,
    activeInactiveCustomer: activeInactive
} = CustomersRepository;

const createCustomers = async (customer: CustomersParams, userId: number): Promise<CustomersResponse> => {
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

const findCustomers = async (userId: number): Promise<CustomersParams[]> => {
    try {
        const customers: CustomersParams[] = await find(userId);

        return customers;
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

const activeInactiveCustomer = async (userId: number): Promise<CustomersResponse> => {
    try {
        const createUser: CustomersResponse = await activeInactive(userId);

        return createUser;
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
