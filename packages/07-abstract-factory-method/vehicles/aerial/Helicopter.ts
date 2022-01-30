import { IAircraft } from "./interfaces/IAircraft"

export class Helicopter implements IAircraft {
  startRoute(): void {
    this.checkWind()
    this.getCargo()
    console.log("Starting flight")
  }
  getCargo(): void {
    console.log("Passengers are riding the helicopter. Starting propellers.")
  }
  checkWind(): void {
    console.log("Wind speed is 25km/h to the southwest, all good.")
  }
}
