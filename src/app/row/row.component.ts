import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../flight.model'

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
@Input() row !: Flight;
  constructor() { }

  ngOnInit(): void {
  }

}
