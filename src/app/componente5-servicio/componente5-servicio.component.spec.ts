import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente5ServicioComponent } from './componente5-servicio.component';

describe('Componente5ServicioComponent', () => {
  let component: Componente5ServicioComponent;
  let fixture: ComponentFixture<Componente5ServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente5ServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente5ServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
