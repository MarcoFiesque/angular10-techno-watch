import { Technology } from './../../models/Technology';
import { TechnoService } from './../services/techno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techno-list',
  templateUrl: './techno-list.component.html',
  styleUrls: ['./techno-list.component.css']
})
export class TechnoListComponent implements OnInit {
  public allTechnos: Technology[] = [];
  constructor(private ts: TechnoService) { }

  ngOnInit():void{
    this.getAllTechnos();
  }
  getAllTechnos(): void{
    this.allTechnos = this.ts.getTechnos();
  }
  deleteTechno(techno: Technology){
    this.ts.deleteTechno(techno);
    this.ts;this.getAllTechnos();
  }

}
