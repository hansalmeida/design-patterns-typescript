import { NubankCard } from "./NubankCard"

export class CreditCard extends NubankCard {
  validate() {
    console.log("Verifying limit")
  }
}
