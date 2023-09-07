import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJuguetesComponent } from './components/create-juguetes/create-juguetes.component';
import { ListJuguetesComponent } from './components/list-juguetes/list-juguetes.component';
import { EditJuguetesComponent } from './components/edit-juguetes/edit-juguetes.component';

const routes: Routes = [
  {path: '', redirectTo: 'list-juguetes', pathMatch: 'full'},
  {path: 'list-juguetes', component: ListJuguetesComponent},
  {path: 'create-juguetes', component: CreateJuguetesComponent},
  {path: 'edit-juguetes/:id', component: EditJuguetesComponent},
  {path: '**', redirectTo: 'list-juguetes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
