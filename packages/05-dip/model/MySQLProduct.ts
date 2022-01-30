import { IDbProduct } from "./IDbProduct"

export class MySQLProduct implements IDbProduct {
  getProductById(id: number) {
    return `MySQL: Displaying data for product: ${id}`
  }
}
