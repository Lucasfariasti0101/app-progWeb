import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/header/header.component';
import { SidenavComponent } from './views/sidenav/sidenav.component';
import { MainComponent } from './views/main/main.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { UsuarioListTreinadorComponent } from './pages/usuario-list-treinador/usuario-list-treinador.component';
import { UsuarioListAlunoComponent } from './pages/usuario-list-aluno/usuario-list-aluno.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidenavComponent,MainComponent, CadastroUsuarioComponent, UsuarioListTreinadorComponent, UsuarioListAlunoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
