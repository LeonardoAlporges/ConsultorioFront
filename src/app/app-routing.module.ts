import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { AgendaComponent} from './agenda/agenda.component';
import { NewPacienteComponent } from './new-paciente/new-paciente.component';

const routes: Routes = [
  { path : 'Paciente', component: PacienteComponent },
  { path : 'Agenda', component: AgendaComponent },
  { path : 'novo', component: NewPacienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
