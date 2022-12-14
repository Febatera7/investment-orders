import { customersServices ,usersServices } from "../services";
import { CustomersResponse } from "../interfaces/customers";
import { UsersResponse } from "../interfaces/users";
import logger from "../../utils/logger";

export default async (email: string): Promise<boolean> => {
    try {
        const emailOnUsers: UsersResponse = await usersServices.findByEmail(email);
        const emailOnCustomers: CustomersResponse = await customersServices.findByEmail(email);

        if(emailOnCustomers || emailOnUsers) return true;

        return false;
    } catch(error) {
        logger.error(error);
    }
};
