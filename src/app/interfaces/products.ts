export interface ProductsParams {
    _id?: number,
    name: string,
    value: number,
    userId: number,
    active?: boolean
}

export interface ProductsResponse {
    _id?: number,
    name?: string,
    value?: number,
    userId?: number,
    active?: boolean
}
