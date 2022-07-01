import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { first } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {
  private apiUrl = 'https://62bdfe5bc5ad14c110ca2607.mockapi.io/app-proWeb/api/v1/cadastro'
  constructor(private http: HttpClient) { }

  cadastrar(cadastro: Usuario){
    return this.http.post<Usuario>(this.apiUrl, cadastro).pipe(first())
  }
}
