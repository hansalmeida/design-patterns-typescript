import { IVehicle } from "./IVehicle"

export interface IVehicleCar extends IVehicle {
  configureCar(color: string, year: number, engine: number, seats: number): void
}
