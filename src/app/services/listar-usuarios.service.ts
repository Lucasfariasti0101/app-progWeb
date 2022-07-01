import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {
  private apiUrl = 'https://62bdfe5bc5ad14c110ca2607.mockapi.io/app-proWeb/api/v1/cadastro'

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrl)
  }

}
