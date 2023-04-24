import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente11Hijo1Component } from './componente11-hijo1.component';

describe('Componente11Hijo1Component', () => {
  let component: Componente11Hijo1Component;
  let fixture: ComponentFixture<Componente11Hijo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente11Hijo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente11Hijo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
