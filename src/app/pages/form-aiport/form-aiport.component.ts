import { Component, OnInit } from '@angular/core';
import {AirportService} from "../../../services/airport.service";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Airport} from "../../../models/airport.model";

@Component({
  selector: 'app-form-aiport',
  templateUrl: './form-aiport.component.html',
  styleUrls: ['./form-aiport.component.scss']
})

export class FormAiportComponent implements OnInit {
  formAirport!: FormGroup
  myMode!: boolean

  airports!: Observable<Airport[]>

  constructor(
    private airport: AirportService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm()
    this.myMode = false
    this.airports = this.getAirport()
  }

  /**
   * Recupère tout les aéroports
   */
  getAirport(){
    return this.airport.getAirportsAll()
  }

  /**
   * Formulaire
   */
  initForm(){
    this.formAirport = this.fb.group({
      airport: [''],
      mode: [false],
      departure: [''],
      arrival: ['']
    })
  }

  onSubmit() {
    console.log(this.formAirport.value)
  }

  onSwitch() {
    return this.myMode != !this.myMode
  }
}
