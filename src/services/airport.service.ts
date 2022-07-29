import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Airport} from "../models/airport.model";

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  baseURL: string = "https://opensky-network.org/api/"

  constructor(
    private http: HttpClient
  ) { }


  // getStateAll(){
  //   //TODO changer le lien vers le fichier JSON par baseURL avant production
  //   return this.http.get<Airports>('../assets/flights.json').pipe(
  //     map(airport => airport.states.filter((value, index)=> index < 50)),
  //   )
  // }

  /**
   * Renvoie une liste d'aéroport
   */
  getAirportsAll(){
    return this.http.get<Airport[]>('../assets/airports.json')
  }
}
