import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente8ReciboparametroComponent } from './componente8-reciboparametro.component';

describe('Componente8ReciboparametroComponent', () => {
  let component: Componente8ReciboparametroComponent;
  let fixture: ComponentFixture<Componente8ReciboparametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente8ReciboparametroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente8ReciboparametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
