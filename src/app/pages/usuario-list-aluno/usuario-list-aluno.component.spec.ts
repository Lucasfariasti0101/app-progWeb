import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioListAlunoComponent } from './usuario-list-aluno.component';

describe('UsuarioListAlunoComponent', () => {
  let component: UsuarioListAlunoComponent;
  let fixture: ComponentFixture<UsuarioListAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioListAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioListAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
