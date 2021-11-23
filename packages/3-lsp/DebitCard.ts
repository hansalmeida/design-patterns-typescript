import { NubankCard } from "./NubankCard"

export class DebitCard extends NubankCard {
  validate() {
    console.log("Validating if there's enough balance")
  }
}
