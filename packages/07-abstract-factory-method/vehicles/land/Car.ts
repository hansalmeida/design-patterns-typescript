import { ILandVehicle } from "./interfaces/ILandVehicle"

export class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo()
    console.log("Starting trajectory")
  }
  getCargo(): void {
    console.log("Passengers are riding the car, we're ready.")
  }
}
