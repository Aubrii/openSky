import { Component, OnInit } from '@angular/core';
import {AirportService} from "../../../services/airport.service";
import {Observable} from "rxjs";
import {Flight} from "../../flight.model";

export class Airports {
  states!: Airport[]
}

export interface Airport {

}

@Component({
  selector: 'app-form-aiport',
  templateUrl: './form-aiport.component.html',
  styleUrls: ['./form-aiport.component.scss']
})
export class FormAiportComponent implements OnInit {

  airports!: Observable<any>

  constructor(
    private airport: AirportService
  ) { }

  ngOnInit(): void {
    this.airports = this.getAirport()
  }

  getAirport(){
    return this.airport.getStateAll()
  }
}
