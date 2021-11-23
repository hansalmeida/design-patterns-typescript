import { CreditCard } from "./CreditCard"
import { DebitCard } from "./DebitCard"
import { NubankRewards } from "./NubankRewards"

const creditCard = new CreditCard()
creditCard.validate()
creditCard.collectPayment()

const debitCard = new DebitCard()
debitCard.validate()
debitCard.collectPayment()

const nubankRewards = new NubankRewards()
nubankRewards.validate()
nubankRewards.collectPayment()
