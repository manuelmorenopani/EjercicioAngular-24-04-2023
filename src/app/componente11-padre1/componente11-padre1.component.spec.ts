import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente11Padre1Component } from './componente11-padre1.component';

describe('Componente11Padre1Component', () => {
  let component: Componente11Padre1Component;
  let fixture: ComponentFixture<Componente11Padre1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente11Padre1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente11Padre1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
