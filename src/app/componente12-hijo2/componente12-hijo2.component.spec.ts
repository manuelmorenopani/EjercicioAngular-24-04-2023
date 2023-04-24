import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente12Hijo2Component } from './componente12-hijo2.component';

describe('Componente12Hijo2Component', () => {
  let component: Componente12Hijo2Component;
  let fixture: ComponentFixture<Componente12Hijo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente12Hijo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente12Hijo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
