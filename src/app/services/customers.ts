import { CustomersParams, CustomersResponse } from "../interfaces/customers";
import { CustomersRepository } from "../repositories";
import generateId from "../helpers/generateId";
import logger from "../../utils/logger";
import verifyEmailExists from "../helpers/verifyEmailExists";

const {
    createCustomer: create,
    findCustomers: findAll,
    findCustomer: findOne,
    updateCustomer: update,
    activeInactiveCustomer: activeInactive,
    findByEmail: findEmail
} = CustomersRepository;

const createCustomer = async (customer: CustomersParams, userId: number): Promise<CustomersResponse> => {
    try {
        const customerId = generateId();

        if(await verifyEmailExists(customer.email)) throw new Error("E-mail already registered");

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

const findCustomer = async (customerId: number, userId: number): Promise<CustomersResponse> => {
    try {
        const customer: CustomersResponse = await findOne(customerId, userId);

        return customer;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const updateCustomer = async (customerData: CustomersParams, userId: number): Promise<CustomersResponse> => {
    try {
        const customer: CustomersResponse = await update(customerData, userId);

        return customer;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const activeInactiveCustomer = async (customerId: number, userId: number): Promise<CustomersResponse> => {
    try {
        const customer: CustomersResponse = await activeInactive(customerId, userId);

        return customer;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findByEmail = async (email: string): Promise<CustomersResponse> => {
    try {
        const user: CustomersResponse = await findEmail(email);

        return user;
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
    activeInactiveCustomer,
    findByEmail
};
