import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente10ComppletarroutingComponent } from './componente10-comppletarrouting.component';

describe('Componente10ComppletarroutingComponent', () => {
  let component: Componente10ComppletarroutingComponent;
  let fixture: ComponentFixture<Componente10ComppletarroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente10ComppletarroutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente10ComppletarroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
