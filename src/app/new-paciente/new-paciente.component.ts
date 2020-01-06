import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-new-paciente',
  templateUrl: './new-paciente.component.html',
  styleUrls: ['./new-paciente.component.css']
})
export class NewPacienteComponent implements OnInit {

  pacienteForm : FormGroup
  submitted = false;

  constructor(private fb: FormBuilder, private service:PacienteService) { }

  ngOnInit() {
    this.pacienteForm = this.fb.group({
      Id: ['', [Validators.required]],
      Nome: ['', [Validators.required]],
      Nacimento: ['', [Validators.required]],
      DataConsultaInicial: ['', [Validators.required]],
      DataConsultaFinal: ['', [Validators.required]],
      Observacao: ['', [Validators.required]],
     })
  }

  onSubmit(){
    console.log(JSON.stringify(this.pacienteForm.value))
    if(this.pacienteForm.valid){         
      this.service.createPaciente(this.pacienteForm.value)
      }
    }

}
