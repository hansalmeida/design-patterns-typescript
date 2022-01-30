import { ILandVehicle } from "./interfaces/ILandVehicle"

export class Motorcycle implements ILandVehicle {
  startRoute(): void {
    this.getCargo()
    console.log("Starting delivery")
  }
  getCargo(): void {
    console.log("Picked up package.")
  }
}
