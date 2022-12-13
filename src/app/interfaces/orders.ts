export interface OrdersParams {
    _id?: number,
    productValue: number,
    productQuantity: number,
    totalValue: number,
    orderDate: Date,
    userId: number,
    customerId: number,
    productId: number,
}

export interface OrdersResponse {
    _id?: number,
    productValue?: number,
    productQuantity?: number,
    totalValue?: number,
    orderDate?: Date,
    userId?: number,
    customerId?: number,
    productId?: number,
}
