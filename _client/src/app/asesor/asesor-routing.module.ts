import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesorGuard } from '../Guards/asesor.guard';
import { InmueblesComponent } from './components/inmuebles/inmuebles.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'inmuebles', component: InmueblesComponent},
      {path: '**', redirectTo: 'inmuebles'},
    ],
    canActivate: [AsesorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }