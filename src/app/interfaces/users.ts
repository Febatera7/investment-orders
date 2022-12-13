export interface UserParams {
    _id?: number,
    name: string,
    email: string,
    password: string,
    cpf: string,
    birthday: Date,
    active?: boolean
}

export interface UsersResponse {
    _id?: number,
    name?: string,
    email?: string,
    password?: string,
    cpf?: string,
    birthday?: Date,
    active?: boolean
}

export interface CreateResponse {
    token?: string,
    newUser?: UsersResponse
}

