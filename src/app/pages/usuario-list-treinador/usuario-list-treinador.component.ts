import { Usuario } from './../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { ListarUsuariosService } from './../../services/listar-usuarios.service';

@Component({
  selector: 'app-usuario-list-treinador',
  templateUrl: './usuario-list-treinador.component.html',
  styleUrls: ['./usuario-list-treinador.component.css']
})
export class UsuarioListTreinadorComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private service: ListarUsuariosService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.service.listarUsuarios().subscribe(usr => this.usuarios = usr);
   }

}
