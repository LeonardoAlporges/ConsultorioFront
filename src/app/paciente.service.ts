import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './paciente.type';

@Injectable({
  providedIn: 'root'
})
export class PacienteService{
      applicationUrl = 'https://localhost:5001/api'; //Propriedade que armazena o endereço do servidor
    
      constructor(
        private httpClient: HttpClient //Classe injetável para manipular requisições HTTP
      ) { }
    
      //Método de busca na API (GET)
      getAll(): Observable<Paciente[]> {
        return this.httpClient.get<Paciente[]>(`${this.applicationUrl}/Pacientes`);
      }
      createPaciente(paciente){  
        return this.httpClient.post<Paciente>(`${this.applicationUrl}/Pacientes`, paciente, {observe: 'response'})
        .subscribe( 
          () => console.log('HTTP request completed.')
          );  
      }
  }
  
