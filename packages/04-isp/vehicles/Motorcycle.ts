import { IVehicle } from "./IVehicle"
import { IVehicleMotorcycle } from "./IVehicleMotorcycle"

export class Motorcycle implements IVehicleMotorcycle, IVehicle {
  constructor(color: string, year: number, engine: number) {
    this.configureMotorcycle(color, year, engine)

    this.start()
  }

  configureMotorcycle(color: string, year: number, engine: number): void {
    console.log(`${color} motorcycle, ${year}, ${engine}cc`)
  }

  start(): void {
    console.log("Starting engine")
  }
}
