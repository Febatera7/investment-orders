export interface CustomersParams {
    _id?: number,
    name: string,
    email: string,
    cpf: string,
    birthday: Date,
    userId: number,
    active?: boolean
}

export interface CustomersResponse {
    _id?: number,
    name?: string,
    email?: string,
    cpf?: string,
    birthday?: Date,
    userId: number,
    active?: boolean
}
