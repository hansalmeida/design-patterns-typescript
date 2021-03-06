import { IDbProduct } from "../model/IDbProduct"
import { Db } from "../model/Db"
import { MySQLProduct } from "../model/MySQLProduct"
import { MongoDbProduct } from "../model/MongoDbProduct"

export class DbProductFactory {
  private static type: Db = Db.MYSQL

  public static create(): IDbProduct {
    if (DbProductFactory.type === Db.MYSQL) {
      return new MySQLProduct()
    } else if (DbProductFactory.type === Db.MONGODB) {
      return new MongoDbProduct()
    }
  }
}
