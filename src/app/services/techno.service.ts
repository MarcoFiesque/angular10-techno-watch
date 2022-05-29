import { Technology } from './../../models/Technology';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnoService {
  private technos: Technology[] = [];

  constructor() { }

  getTechnos(): Technology[]{
    this.technos = JSON.parse(localStorage.getItem("savedTechnos") || '[]');
    return this.technos;
  }

  createTechno(techno: Technology): Technology{
    const newTechno: Technology = {...techno};
    newTechno.id = Date.now();
    this.technos = [newTechno, ...this.technos];
    localStorage.setItem("savedTechnos", JSON.stringify(this.technos));
    return newTechno;
  }

  deleteTechno(techno: Technology): void{
    this.technos = this.technos.filter(t=>t.id != techno.id);
    localStorage.removeItem('savedTechnos');
    localStorage.setItem("savedTechnos", JSON.stringify(this.technos));

  }

}
