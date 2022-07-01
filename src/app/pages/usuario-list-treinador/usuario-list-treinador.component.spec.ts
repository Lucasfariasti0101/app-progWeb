import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioListTreinadorComponent } from './usuario-list-treinador.component';

describe('UsuarioListTreinadorComponent', () => {
  let component: UsuarioListTreinadorComponent;
  let fixture: ComponentFixture<UsuarioListTreinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioListTreinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioListTreinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
