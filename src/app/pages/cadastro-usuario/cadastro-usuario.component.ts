import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastroUsuarioService } from 'src/app/services/cadastro-usuario.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  form: FormGroup
  constructor(private service: CadastroUsuarioService,
    private formBuilder: FormBuilder,
    private location: Location ) {

    this.form = this.formBuilder.group({
      nome: [null],
      sobrenome: [null],
      email: [null],
      senha: [null],
      tipo: [null]
    })
  }

  ngOnInit(): void {
  }
  clear(){
    this.location.back()
  }
  cadastrar(){
    this.service.cadastrar(this.form.value).subscribe(r => {
      console.log(r);
      this.form.reset()
    })

  }

}
