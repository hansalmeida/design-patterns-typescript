import { IVehicle } from "./interfaces/IVehicle"

export class Motorcycle implements IVehicle {
  startRoute() {
    this.getCargo()
    console.log("Staring delivery")
  }
  getCargo() {
    console.log("Package fetched")
  }
}
