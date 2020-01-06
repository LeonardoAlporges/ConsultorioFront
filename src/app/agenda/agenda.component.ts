import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente.type';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  Paci : Paciente[];
  
  constructor(
    private service: PacienteService
  ) { }

  ngOnInit() {
        console.log(this.obterTodosWeatherForecasts());
  }
     
  obterTodosWeatherForecasts(): void {
     this.service
       .getAll()
       .subscribe(data => {
         this.Paci = data;
         console.log(data);
       });
      }

  displayedColumns: string[] = ['id', 'name', 'Nacimento', 'Data Consulta','Data Final','OBS','Edit','Remove'];
  dataSource = this.Paci;
    
}
