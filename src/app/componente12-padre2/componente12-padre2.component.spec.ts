import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente12Padre2Component } from './componente12-padre2.component';

describe('Componente12Padre2Component', () => {
  let component: Componente12Padre2Component;
  let fixture: ComponentFixture<Componente12Padre2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente12Padre2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente12Padre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
