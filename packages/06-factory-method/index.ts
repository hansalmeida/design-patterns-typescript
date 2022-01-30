import { Transport } from "./transport/Transport"
import { CarTransport } from "./transport/CarTransport"
import { MotorcycleTransport } from "./transport/MotorcycleTransport"

let transport: Transport

if (process.argv.includes("--uber")) {
  transport = new CarTransport()
} else if (process.argv.includes("--log")) {
  transport = new MotorcycleTransport()
} else {
  console.error(`
    No argv arguments were passed
    run either: 
      yarn dev -- --uber
      yarn dev -- --log
  `)
}

if (transport) {
  transport.start()
}
