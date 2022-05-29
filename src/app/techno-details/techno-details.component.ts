import { Technology } from './../../models/Technology';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-techno-details',
  templateUrl: './techno-details.component.html',
  styleUrls: ['./techno-details.component.css']
})
export class TechnoDetailsComponent implements OnInit {
  @Input() tech!: Technology ;
  @Output() deleteTech = new EventEmitter<Technology>();

  constructor() {
  }

  ngOnInit(): void {
  }

  removeTechno(techno: Technology ){
    this.deleteTech.emit(techno);
  }
}
