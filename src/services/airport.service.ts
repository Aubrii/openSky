import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Airports} from "../app/pages/form-aiport/form-aiport.component";

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  baseURL: string = "https://opensky-network.org/api/"

  constructor(
    private http: HttpClient
  ) { }

  getStateAll(){
    return this.http.get<Airports>(`${this.baseURL}states/all`)
  }
}
