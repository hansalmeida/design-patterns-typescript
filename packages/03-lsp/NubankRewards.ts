import { IPaymentInstrument } from "./IPaymentInstrument"

export class NubankRewards implements IPaymentInstrument {
  validate(): void {
    console.log("Verifying rewards score")
  }
  collectPayment(): void {
    console.log("Paying with rewards score")
  }
}
