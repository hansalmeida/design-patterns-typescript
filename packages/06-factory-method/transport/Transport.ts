import { IVehicle } from "./vehicles/interfaces/IVehicle"

export abstract class Transport {
  start(): void {
    const vehicle = this.createTransport()
    vehicle.startRoute()
  }
  protected abstract createTransport(): IVehicle
}
