import { TechnoListComponent } from './techno-list/techno-list.component';
import { TechnoAddComponent } from './techno-add/techno-add.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'add-techno', component: TechnoAddComponent},
  {path:'all-technos', component: TechnoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
