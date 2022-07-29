import { Component, OnInit } from '@angular/core';
import {AirportService} from "../../../services/airport.service";
import {Observable} from "rxjs";
import {Flight} from "../../../models/flight.model";
import {FormGroup} from "@angular/forms";

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
  formAirport!: FormGroup
  airports!: Observable<any>

  constructor(
    private airport: AirportService
  ) { }

  ngOnInit(): void {
    this.airports = this.getAirport()
  }

  getAirport(){
    //TODO ajouter la fonction x
    //return this.airport.getStateAll()
    return this.airport.getAirportsAll()
  }
  initForm(){
    //TODO Builder le formulaire
  }

  onSubmit() {
    console.log(this.formAirport)
  }
}
