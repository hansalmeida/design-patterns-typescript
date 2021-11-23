import { IVehicleCar } from "./IVehicleCar"

export class Car implements IVehicleCar {
  constructor(color: string, year: number, engine: number, seats: number) {
    this.configureCar(color, year, engine, seats)
  }

  configureCar(color: string, year: number, engine: number, seats: number): void {
    console.log(`${color} car, ${year}, ${engine} engine, ${seats} seats.`)

    this.start()
  }

  start(): void {
    console.log("Starting engine")
  }
}
