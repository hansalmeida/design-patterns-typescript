import { Client } from "./vehicles/client/Client"
import { Company } from "./vehicles/consts/Company"
import { ITransportFactory } from "./vehicles/factories/interfaces/ITransportFactory"
import { UberTransport } from "./vehicles/factories/UberTransport"
import { NineNineTransport } from "./vehicles/factories/NineNineTransport"

const currentCompany = Company.NINE_NINE
let factory: ITransportFactory

switch (currentCompany) {
  case Company.UBER:
    factory = new UberTransport()
    break
  case Company.NINE_NINE:
    factory = new NineNineTransport()
    break
  default:
    console.error("Unknown company")
}

const client = new Client(factory)

client.startRoute()
