import { TechnoService } from './../services/techno.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techno-add',
  templateUrl: './techno-add.component.html',
  styleUrls: ['./techno-add.component.css']
})
export class TechnoAddComponent implements OnInit {

  constructor(private ts: TechnoService) { }

  ngOnInit(): any {
  }

  addTechno(form: NgForm){
    this.ts.createTechno(form.value);
    form.reset();
  }

}
