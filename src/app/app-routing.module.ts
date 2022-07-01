import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component'
import { UsuarioListTreinadorComponent } from './pages/usuario-list-treinador/usuario-list-treinador.component'
import { UsuarioListAlunoComponent } from './pages/usuario-list-aluno/usuario-list-aluno.component'

const routes: Routes = [
  {path: '', component: CadastroUsuarioComponent},
  {path: 'cadastrar-usuario',component: CadastroUsuarioComponent},
  {path: 'treinadores', component: UsuarioListTreinadorComponent},
  {path: 'alunos', component: UsuarioListAlunoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
