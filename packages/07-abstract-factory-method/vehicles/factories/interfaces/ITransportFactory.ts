import { ILandVehicle } from "../../land/interfaces/ILandVehicle"
import { IAircraft } from "../../aerial/interfaces/IAircraft"

export interface ITransportFactory {
  createTransportVehicle(): ILandVehicle
  createTransportAircraft(): IAircraft
}
