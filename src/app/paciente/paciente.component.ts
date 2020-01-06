import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente.type';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

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

    

}
