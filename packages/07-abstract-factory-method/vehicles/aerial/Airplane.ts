import { IAircraft } from "./interfaces/IAircraft"

export class Airplane implements IAircraft {
  startRoute(): void {
    this.checkWind()
    this.getCargo()
    console.log("Starting flight")
  }
  getCargo(): void {
    console.log("The passengers are riding the plane, we're ready")
  }
  checkWind(): void {
    console.log("Wind speed is 25km/h, all good.")
  }
}
