import { IDbProduct } from "./IDbProduct"

export class MongoDbProduct implements IDbProduct {
  getProductById(id: number): string {
    return `MongoDB: Displaying data for product: ${id}`
  }
}
