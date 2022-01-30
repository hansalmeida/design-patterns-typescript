import { IVehicleCar } from "./IVehicleCar"

export class Car implements IVehicleCar {
  constructor(color: string, year: number, engine: number, seats: number, doors: number) {
    this.configure(color, year, engine, seats, doors)
  }

  configure(color: string, year: number, engine: number, seats: number, doors: number) {
    console.log(`Creating car: ${color}, ${year}, ${engine} power, ${doors} doors with ${seats} seats.`)

    this.start()
  }

  start() {
    console.log("Starting engine")
  }
}
