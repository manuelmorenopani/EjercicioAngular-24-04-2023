import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1InterpoblacionComponent } from './componente1-interpoblacion.component';

describe('Componente1InterpoblacionComponent', () => {
  let component: Componente1InterpoblacionComponent;
  let fixture: ComponentFixture<Componente1InterpoblacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1InterpoblacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1InterpoblacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
