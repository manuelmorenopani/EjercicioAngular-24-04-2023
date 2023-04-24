import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente3EventoComponent } from './componente3-evento.component';

describe('Componente3EventoComponent', () => {
  let component: Componente3EventoComponent;
  let fixture: ComponentFixture<Componente3EventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente3EventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente3EventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
