import { IVehicleMotorcycle } from "./IVehicleMotorcycle"

export class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine)
  }

  configure(color: string, year: number, engine: number) {
    console.log(`Creating motorcycle: ${color}, ${year}, ${engine}cc.`)

    this.start()
  }

  start() {
    console.log("Starting engine")
  }
}
