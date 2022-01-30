import { Director } from "./director/Director"
import { VehicleBuilder } from "./builders/VehicleBuilder"
import { Vehicle } from "./products/Vehicle"

const builder = new VehicleBuilder()
const director = new Director(builder)

director.constructSedanCar()

const sedan: Vehicle = builder.getVehicle()

console.log(`
  Creating a vehicle of type: ${sedan.vehicleType}
  With ${sedan.wheelsTotal} wheels
`)

director.constructTruck()
const truck: Vehicle = builder.getVehicle()

console.log(`
  Creating a vehicle of type: ${truck.vehicleType}
  With ${truck.wheelsTotal} wheels
`)
