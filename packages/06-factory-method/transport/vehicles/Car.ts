import { IVehicle } from "./interfaces/IVehicle"

export class Car implements IVehicle {
  startRoute() {
    this.getCargo()
    console.log("Starting trajectory")
  }
  getCargo() {
    console.log("Passengers were picked up, we're ready")
  }
}
